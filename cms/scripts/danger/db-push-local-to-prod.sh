#!/usr/bin/env bash

set -e

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

echo -e "${RED}This script OVERWRITES PRODUCTION database completely with local database!${NC}"

source "$(dirname $0)/../../.env"

if [[ $POSTGRES_URL != *"localhost"* && $POSTGRES_URL != *"127.0.0.1"* ]]; then
  echo -e "${RED}It appears that POSTGRES_URL is not pointing to a local database. Aborting.${NC}"
  exit 1
fi

read -p "Production POSTGRES_URL (destination): " PROD_POSTGRES_URL
echo

echo "Local (source):           $POSTGRES_URL"
echo "Production (destination): $PROD_POSTGRES_URL"
echo

echo -ne "Are you sure to push local database to ${RED}PRODUCTION${NC} database?"
yes_or_no

echo -ne "${YELLOW}Are you absolutely sure?${NC}"
yes_or_no

echo -ne "${RED}Last chance to abort. Are you REALLY sure?${NC}"
yes_or_no

prod_filename="production-backup-$(date +%s).sql"
echo -e "Creating backup of production database to ${YELLOW}$prod_filename...${NC}"
pg_dump "$PROD_POSTGRES_URL" --clean --no-owner --no-privileges -f $prod_filename

echo -e "Downloading local database to ${YELLOW}local.sql...${NC}"
pg_dump "$POSTGRES_URL" --clean --no-owner --no-privileges -f local.sql

echo "Pushing local database to production database..."
psql -d "$PROD_POSTGRES_URL" -f local.sql
