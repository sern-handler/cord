import { defineConfig } from 'tsup';
const shared = {
    entry: ['src/index.ts'],
    external: ['discord.js', 'rxjs'],
    platform: 'node',
    clean: true,
    sourcemap: false,
};
export default defineConfig([
    {
        format: 'esm',
        target: 'node17',
        tsconfig: './tsconfig-esm.json',
        dts: true,
        outDir: './dist',
        external: ['discord.js'],
        treeshake: true,
        outExtension() {
            return {
                js: '.js',
            };
        },
        ...shared,
    },
]);
