Generate client:

```
curl -X GET "https://api.egp.scale.com/openapi.json" | jq > schema.json
npx -y openapi-typescript-codegen --input schema.json --output generated
```

Use the script:

```
deno run --unstable-sloppy-imports --allow-env --allow-net main.ts
```