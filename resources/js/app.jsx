import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layouts/Layout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`];
    if (page.default.layout) {
      if (name === "HomePage") {
          // Do not apply default Layout for Home page
          page.default.layout = page => <HomeLayout>{page}</HomeLayout>;
      } else {
          // Apply default Layout for other pages
          page.default.layout = page => <Layout>{page}</Layout>;
      }
  }
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: {
    color: '#0f4f5f',
  }
})