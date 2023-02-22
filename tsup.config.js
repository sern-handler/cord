import { defineConfig } from 'tsup';
const shared = {
    entry: ['src/index.ts'],
    platform: 'node',
    clean: true,
    sourcemap: false,
};
export default defineConfig([
    {
        format: 'esm',
        target: 'node18',
        tsconfig: './tsconfig.json',
        dts: true,
        outDir: './dist',
        treeshake: true,
        outExtension() {
            return {
                js: '.mjs',
            };
        },
        ...shared,
    },
]);
