import { defineConfig } from 'tsup';

export default defineConfig({
        format: 'esm',
        target: 'node16',
        tsconfig: './tsconfig.e2e.json',
        outDir: './dist',
        treeshake:true,
        entry: ['e2e/index.ts'],
        outExtension() {
            return {
                js: '.mjs'
            };
        }
    }
)
