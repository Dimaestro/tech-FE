import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@ui': path.resolve(__dirname, 'src/components/ui'),
            '@common': path.resolve(__dirname, 'src/components/common')
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                additionalData: `
                    @use "@/styles/utils.scss" as *;
                    @use "@/styles/media.scss" as *;
                `
            }
        }
    }
});

