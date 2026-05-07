export const fieldCopy = {
  home: {
    eyebrow: 'The Agentic Economy',
    title: 'Infrastructure for Software that Acts',
  },
  thesis: {
    eyebrow: 'Thesis',
    title:
      'Agency now moves through data, markets, institutions, and the physical world.',
    description:
      'The field is forming around what software can do, who it represents, and what remains visible after it acts.',
  },
  atlas: {
    eyebrow: 'Atlas',
    title: 'A map of software agency.',
    description:
      'A field map of the systems, markets, and controls changing as agency moves into software.',
    statement:
      'As capabilities become callable, access control moves from systems to powers.',
  },
  handshake: {
    eyebrow: 'Handshake',
    title: 'Before agents act, authority has to travel with them.',
    description:
      'A mandate layer for agents calling services, systems, devices, and other agents.',
  },
  team: {
    eyebrow: 'Team',
    title: 'Joel Chan',
    description:
      'Founder of The Agentic Economy. Mapping how software agency moves through markets, institutions, infrastructure, and the physical world.',
  },
} as const

export const homeDoorways = [
  {
    to: '/thesis',
    label: 'Thesis',
    title: 'What is changing',
    copy: 'The core view behind the field.',
  },
  {
    to: '/atlas',
    label: 'Atlas',
    title: 'The field as a system',
    copy: 'A visual map of where agency moves.',
  },
  {
    to: '/handshake',
    label: 'Handshake',
    title: 'One primitive',
    copy: 'Authority before agentic action.',
  },
  {
    to: '/writing',
    label: 'Writing',
    title: 'The arguments',
    copy: 'Essays from the edge of the transition.',
  },
] as const

export const thesisThemes = [
  {
    number: '01',
    title: 'Standing',
    question: 'Who acted?',
    copy: 'A process can commit a company, draw on credentials, and leave no person in the room to answer for the act.',
    slug: 'actors-without-standing',
  },
  {
    number: '02',
    title: 'Judgment',
    question: 'What context travelled?',
    copy: 'A goal becomes a chain of choices made without the context that normally tells people where the boundary is.',
    slug: 'judgment-without-context',
  },
  {
    number: '03',
    title: 'Scale',
    question: 'What can one operator now coordinate?',
    copy: 'One operator can coordinate customers, suppliers, research, finance, and support without building the organization that once made it possible.',
    slug: 'scale-without-organization',
  },
  {
    number: '04',
    title: 'Visibility',
    question: 'What remains visible?',
    copy: 'A decision moves through dependency chains faster than the institution watching it can form a picture.',
    slug: 'risk-without-visibility',
  },
  {
    number: '05',
    title: 'Anchoring',
    question: 'What anchors authority?',
    copy: 'Capability is climbing faster than the systems that know how to recognize, refuse, insure, or discipline it.',
    slug: 'the-hierarchy-unanchored',
  },
] as const

export type AtlasDomain = 'Data' | 'Markets' | 'Institutions' | 'Physical World'

export const atlasDomains: ReadonlyArray<AtlasDomain> = [
  'Data',
  'Markets',
  'Institutions',
  'Physical World',
]

export type AtlasSurface = {
  id: string
  title: string
  claim: string
}

export const atlasSurfaces: ReadonlyArray<AtlasSurface> = [
  {
    id: 'businesses-as-apis',
    title: 'Businesses as APIs',
    claim: 'Outcomes, not tools.',
  },
  {
    id: 'guarded-capabilities',
    title: 'Guarded Capabilities',
    claim: 'Protected skills as powers.',
  },
  {
    id: 'edge-device-admission',
    title: 'Edge Device Admission',
    claim: 'Devices become counterparties.',
  },
  {
    id: 'atomized-resources',
    title: 'Atomized Resources',
    claim: 'Space, capacity, time.',
  },
  {
    id: 'agent-to-agent-negotiation',
    title: 'Agent-to-Agent Negotiation',
    claim: 'Delegation as chain.',
  },
  {
    id: 'physical-operations',
    title: 'Physical Operations',
    claim: 'Atoms enter the loop.',
  },
]

export const atlasPrimitives = [
  'identity',
  'mandate',
  'policy',
  'consent',
  'payment',
  'record',
  'revocation',
  'liability',
] as const

export const atlasSeries = [
  {
    id: 'field-atlas',
    plate: 'Plate I',
    title: 'Field Atlas',
    statement:
      'Software agency moves through data, markets, institutions, and the physical world.',
    copy: 'Software agency moving through data, markets, institutions, and the physical world.',
    image: '/images/atlas/plate-01-field-atlas.webp',
    alt: 'Field atlas plate showing software agency moving through data, markets, institutions, and the physical world.',
  },
  {
    id: 'businesses-as-apis',
    plate: 'Plate II',
    title: 'Businesses As APIs',
    statement: 'Businesses become callable.',
    copy: 'Outcomes becoming callable, priced, verified, and settled.',
    image: '/images/atlas/plate-02-businesses-as-apis.webp',
    alt: 'Atlas plate showing businesses decomposed into callable, verified, priced, and settled API endpoints.',
  },
  {
    id: 'guarded-capabilities',
    plate: 'Plate III',
    title: 'Guarded Capabilities',
    statement: 'Access control moves from systems to powers.',
    copy: 'Standards, models, knowledge, and protected skills becoming powers.',
    image: '/images/atlas/plate-03-guarded-capabilities.webp',
    alt: 'Atlas plate showing guarded capabilities passing through permission gates into authorized powers.',
  },
  {
    id: 'edge-admission',
    plate: 'Plate IV',
    title: 'Edge Admission',
    statement: 'Devices decide what may touch the world.',
    copy: 'Devices deciding whether software is allowed to touch the world.',
    image: '/images/atlas/plate-04-edge-admission.webp',
    alt: 'Atlas plate showing edge devices admitting or refusing local actions based on authority.',
  },
  {
    id: 'atomic-resources',
    plate: 'Plate V',
    title: 'Atomic Resources',
    statement: 'Space, time, and capacity become declarations of intent.',
    copy: 'Space, time, capacity, and rights of use becoming units of intent.',
    image: '/images/atlas/plate-05-atomic-resources.webp',
    alt: 'Atlas plate showing space, time, capacity, and rights of use as atomic resources claimed by intent.',
  },
  {
    id: 'authority-layer',
    plate: 'Plate VI',
    title: 'Authority Layer',
    statement: 'Authority has to travel before action.',
    copy: 'What must travel with an agent before action crosses a boundary.',
    image: '/images/atlas/plate-06-authority-layer.webp',
    alt: 'Atlas plate showing the authority layer that travels with an agent before it crosses a boundary.',
  },
] as const
