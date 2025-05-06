Install Deno (alternative to Node, if you want):

https://docs.deno.com/runtime/getting_started/installation/

Generate client:

```
curl -X GET "https://api.egp.scale.com/openapi.json" | jq > schema.json
deno run npm:openapi-typescript-codegen --input schema.json --output generated
```

Use the script:

```
deno run --unstable-sloppy-imports --allow-env --allow-net main.ts
```