#!/bin/bash

API_URL="http://localhost:3000/api/graphql/"

rm  -f ./__generated/types.ts
rm  -f ./__generated/hooks.ts

./node_modules/.bin/rover graph introspect "$API_URL" --output graphql/schema/api.graphql
