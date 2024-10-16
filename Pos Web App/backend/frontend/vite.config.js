import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';
// // import { createPostCssPlugin } from 'vite-plugin-postcss';

// // export default defineConfig({
// //     plugins: [react(), createPostCssPlugin()]
// // });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import postcss from 'vite-plugin-postcss';

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react(), postcss()]
// });
