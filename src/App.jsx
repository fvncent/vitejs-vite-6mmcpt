import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navigation from './components/store-navigation/Navigation';
import ProductLists from './components/product-lists/ProductLists';
import ProductOverview from './components/product-overviews/ProductOverview';
import Carts from './components/shopping-cart/Carts';
import OrderSummary from './components/order-summary/OrderSummary';
import Checkout from './components/checkout/Checkout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navigation /> */}
      {/* <ProductLists /> */}
      {/* <ProductOverview /> */}
      {/* <Carts /> */}
      {/* <OrderSummary /> */}
      <Checkout />
    </>
  );
}

export default App;
