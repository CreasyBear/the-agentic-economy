import { useEffect, useState, useCallback, useRef } from 'react';
import Map, { Marker, Popup, NavigationControl, ScaleControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

type Asset = {
  id: string;
  name: string;
  country: string;
  type: string;
  lat: number;
  lng: number;
  severity: 'destroyed' | 'damaged' | 'threatened' | 'operational';
  details: string;
  prewar_capacity?: string;
  damage_date?: string;
  in_pd00?: boolean;
};

type MapData = {
  assets: Asset[];
};

const SEVERITY_COLORS: Record<string, string> = {
  destroyed: '#dc2626',
  damaged: '#f59e0b',
  threatened: '#6366f1',
  operational: '#22c55e',
};

const TYPE_ICONS: Record<string, string> = {
  oil: '🛢️',
  gas: '⛽',
  refining: '🏭',
  power: '⚡',
  port: '⚓',
  data_center: '🖥️',
  military: '🎯',
};

const SEVERITY_LABELS: Record<string, string> = {
  destroyed: 'Destroyed',
  damaged: 'Damaged',
  threatened: 'Threatened',
  operational: 'Operational',
};

export default function GulfDamageMap() {
  const [data, setData] = useState<MapData | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [filters, setFilters] = useState<Set<string>>(new Set(['destroyed', 'damaged', 'threatened']));
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    fetch('/data/gulf-damage-data.json')
      .then(r => r.json())
      .then(d => setData(d))
      .catch(err => console.error('Failed to load map data:', err));
  }, []);

  const toggleFilter = useCallback((severity: string) => {
    setFilters(prev => {
      const next = new Set(prev);
      if (next.has(severity)) next.delete(severity);
      else next.add(severity);
      return next;
    });
  }, []);

  const filteredAssets = data?.assets.filter(a => {
    if (!filters.has(a.severity)) return false;
    if (typeFilter && a.type !== typeFilter) return false;
    return true;
  }) ?? [];

  // Stats
  const stats = data ? {
    total: data.assets.length,
    destroyed: data.assets.filter(a => a.severity === 'destroyed').length,
    damaged: data.assets.filter(a => a.severity === 'damaged').length,
    threatened: data.assets.filter(a => a.severity === 'threatened').length,
    countries: new Set(data.assets.map(a => a.country)).size,
  } : null;

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border, #27272a)' }}>
      {/* Stats bar */}
      {stats && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
          padding: '16px 20px 32px',
          display: 'flex', gap: '24px', flexWrap: 'wrap',
        }}>
          <Stat label="Assets Hit" value={stats.total} />
          <Stat label="Destroyed" value={stats.destroyed} color="#dc2626" />
          <Stat label="Damaged" value={stats.damaged} color="#f59e0b" />
          <Stat label="Threatened" value={stats.threatened} color="#6366f1" />
          <Stat label="Countries" value={stats.countries} />
        </div>
      )}

      {/* Filters */}
      <div style={{
        position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
        display: 'flex', gap: '8px', flexWrap: 'wrap',
      }}>
        {Object.entries(SEVERITY_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => toggleFilter(key)}
            style={{
              background: filters.has(key) ? SEVERITY_COLORS[key] : 'rgba(0,0,0,0.6)',
              color: '#fff',
              border: 'none',
              borderRadius: '20px',
              padding: '6px 14px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              opacity: filters.has(key) ? 1 : 0.5,
              transition: 'all 0.2s',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Type filter */}
      <div style={{
        position: 'absolute', bottom: '16px', right: '16px', zIndex: 10,
        display: 'flex', gap: '4px',
      }}>
        <TypeButton active={typeFilter === null} onClick={() => setTypeFilter(null)} label="All" />
        {Object.entries(TYPE_ICONS).map(([type, icon]) => (
          <TypeButton
            key={type}
            active={typeFilter === type}
            onClick={() => setTypeFilter(typeFilter === type ? null : type)}
            label={icon}
          />
        ))}
      </div>

      {/* Map */}
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: 26,
          lng: 51,
          longitude: 51,
          zoom: 5.5,
          pitch: 0,
        }}
        style={{ width: '100%', height: '600px' }}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        attributionControl={false}
      >
        <NavigationControl position="top-right" style={{ marginTop: '80px' }} />
        <ScaleControl position="bottom-right" />

        {filteredAssets.map(asset => (
          <Marker
            key={asset.id}
            latitude={asset.lat}
            longitude={asset.lng}
            anchor="bottom"
            onClick={e => {
              e.originalEvent.stopPropagation();
              setSelectedAsset(asset);
            }}
          >
            <div style={{
              width: asset.severity === 'destroyed' ? '18px' : '14px',
              height: asset.severity === 'destroyed' ? '18px' : '14px',
              borderRadius: '50%',
              background: SEVERITY_COLORS[asset.severity],
              border: `2px solid ${asset.severity === 'destroyed' ? '#fff' : 'rgba(255,255,255,0.3)'}`,
              cursor: 'pointer',
              boxShadow: asset.severity === 'destroyed'
                ? `0 0 12px ${SEVERITY_COLORS[asset.severity]}80`
                : 'none',
              transition: 'transform 0.2s',
              transform: selectedAsset?.id === asset.id ? 'scale(1.4)' : 'scale(1)',
            }} />
          </Marker>
        ))}

        {selectedAsset && (
          <Popup
            latitude={selectedAsset.lat}
            longitude={selectedAsset.lng}
            anchor="bottom"
            onClose={() => setSelectedAsset(null)}
            closeButton={true}
            closeOnClick={false}
            maxWidth="320px"
            style={{ zIndex: 20 }}
          >
            <div style={{ padding: '4px', fontFamily: 'system-ui, sans-serif' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '20px' }}>{TYPE_ICONS[selectedAsset.type] ?? '📍'}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: '#18181b' }}>{selectedAsset.name}</div>
                  <div style={{ fontSize: '12px', color: '#71717a' }}>
                    {selectedAsset.country} · {selectedAsset.type.replace('_', ' ')}
                  </div>
                </div>
              </div>
              <div style={{
                display: 'inline-block',
                background: SEVERITY_COLORS[selectedAsset.severity],
                color: '#fff',
                padding: '2px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 600,
                marginBottom: '8px',
              }}>
                {SEVERITY_LABELS[selectedAsset.severity]}
              </div>
              <div style={{ fontSize: '13px', color: '#3f3f46', lineHeight: 1.5 }}>
                {selectedAsset.details}
              </div>
              {selectedAsset.damage_date && (
                <div style={{ fontSize: '11px', color: '#a1a1aa', marginTop: '6px' }}>
                  {selectedAsset.damage_date}
                </div>
              )}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color?: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '24px', fontWeight: 800, color: color ?? '#fff', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '11px', color: '#a1a1aa', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
  );
}

function TypeButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.6)',
        color: '#fff',
        border: active ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
        borderRadius: '8px',
        padding: '4px 8px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
    >
      {label}
    </button>
  );
}
