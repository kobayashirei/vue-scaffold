# Configure Pinia Persistence

Date: 2025-11-30

## Actions

- Installed `pinia-plugin-persistedstate` using npm.

```bash
pnpm add pinia-plugin-persistedstate
```

- Configured the plugin in `src/main.ts` by adding the following code:

  ```typescript
  import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
  pinia.use(piniaPluginPersistedstate)
  ```

- Updated `src/stores/counter.ts` to enable persistence for the counter store by adding `{ persist: true }` to the store definition.
