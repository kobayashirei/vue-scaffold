# Implement Common Utilities

Date: 2025-11-30

## Actions
1. Created `src/utils` directory.
2. Implemented `src/utils/singleton.ts`:
   - `singleton`: Class decorator/wrapper for ensuring single instance.
   - `createSingleton`: Factory wrapper for lazy singleton creation.
3. Implemented `src/utils/function.ts`:
   - `debounce`: Function debouncing.
   - `throttle`: Function throttling.
   - `sleep`: Async delay helper.
4. Implemented `src/utils/object.ts`:
   - `deepClone`: Deep copy of objects (handles Date, Array, Object).
   - `mergeDeep`: Recursive object merge.
   - `isObject`: Type check helper.
5. Exported all utilities in `src/utils/index.ts`.

## Implementation Details
- **Singleton**: Uses JS `Proxy` to intercept constructor calls, or a closure to cache the instance for factories.
- **Debounce/Throttle**: Standard implementations using closures and timers.
- **Deep Clone**: Recursive implementation supporting Date objects, not just JSON.parse/stringify.
