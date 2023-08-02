import {defineConfig} from "tsup";

export default defineConfig({
    entry: ['src/index.ts'],
    sourcemap: true,
    dts: true,
    clean: true,
    splitting: false,
})
