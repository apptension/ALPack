#!/bin/bash

API_URL="http://localhost:3000/api/graphql/"

rm  -f ./src/__generated/types.ts
rm  -f ./src/__generated/hooks.ts

./node_modules/.bin/rover graph introspect "$API_URL" --output src/graphql/schema/api.graphql
