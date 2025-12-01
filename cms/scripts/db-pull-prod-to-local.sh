#!/usr/bin/env bash

set -

RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

function yes_or_no {
  while true; do
    read -p "$* [y/n]: " yn
    case $yn in
    [Yy]*) return 0 ;;
    [Nn]*)
      echo "Aborted"
      return 1
      ;;
    esac
  done
}

if ! command -v pg_dump >/dev/null 2>&1; then
  echo -e "${RED}pg_dump is missing. This script requires pg_dump.${NC}"
  exit 1
fi

echo -e "${YELLOW}This script overwrites local database completely with production database!${NC}"

source "$(dirname $0)/../.env"

if [[ $POSTGRES_URL != *"localhost"* && $POSTGRES_URL != *"127.0.0.1"* ]]; then
  echo -e "${RED}It appears that POSTGRES_URL is not pointing to a local database. Aborting.${NC}"
  exit 1
fi

read -p "Production POSTGRES_URL (source): " PROD_POSTGRES_URL
echo

echo "Production (source): $PROD_POSTGRES_URL"
echo "Local (destination): $POSTGRES_URL"
echo

echo -ne "Are you sure to pull ${YELLOW}PRODUCTION${NC} database to local database?"
yes_or_no

local_filename="local-$(date +%s).sql"
echo -e "Creating backup of local database to ${YELLOW}$local_filename${NC}"
pg_dump "$POSTGRES_URL" --clean --no-owner --no-privileges -f $local_filename

echo -e "Downloading production database to ${YELLOW}production.sql${NC}"
pg_dump "$PROD_POSTGRES_URL" --clean --no-owner --no-privileges -f production.sql

echo "Restoring production database to local database..."
psql -d "$POSTGRES_URL" -f production.sql
