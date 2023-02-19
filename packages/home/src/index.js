import { registerApplication, start } from 'single-spa';

registerApplication(
  'product-image',
  () => import('productImage/ProductImage'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'header',
  () => import('header/Header'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'footer',
  () => import('footer/Footer'),
  location => location.pathname.startsWith('/')
);

// registerApplication(
//   'buy-tools',
//   () => import('buyTools/BuyTools'),
//   location => location.pathname.startsWith('/')
// );

start();
