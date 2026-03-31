#!/bin/bash
# IndexNow notification script
# Usage: ./scripts/indexnow.sh [url1] [url2] ...
# If no URLs provided, submits the sitemap URL

INDEXNOW_KEY="0b4fe51ca5284d1a952db88d847b5476"
BASE_URL="https://www.agentic-economy.ai"
KEY_LOCATION="${BASE_URL}/${INDEXNOW_KEY}.txt"

if [ $# -eq 0 ]; then
  # Default: notify about sitemap
  URLS="[\"${BASE_URL}/sitemap-index.xml\"]"
else
  # Build JSON array from arguments
  URLS=$(printf '%s\n' "$@" | sed "s|^|\"${BASE_URL}|" | sed 's|$|"|' | paste -sd, | sed 's/^/[/' | sed 's/$/]/')
fi

curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"www.agentic-economy.ai\",
    \"key\": \"${INDEXNOW_KEY}\",
    \"keyLocation\": \"${KEY_LOCATION}\",
    \"urlList\": ${URLS}
  }" \
  && echo "IndexNow: submitted" \
  || echo "IndexNow: failed"
