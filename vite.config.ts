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
            '@common': path.resolve(__dirname, 'src/components/common'),
            '@locales': path.resolve(__dirname, 'src/locales'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                additionalData: `
                    @use "@/styles/utils.scss" as *;
                `
            }
        }
    }
});

