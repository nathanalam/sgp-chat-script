Generate client:

```
curl -X GET "https://api.egp.scale.com/openapi.json" | jq > schema.json
npx -y openapi-typescript-codegen --input schema.json --output generated
```