import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import {
    ProductsPage,
    CartPage,
    HomePage,
    WishListPage
} from './routes';
import reportWebVitals from './reportWebVitals';
import CartContext from './components/contexts/CartContext';
import INITIAL_CART_CONTENT from './mockData/InitialCartContent';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <CartContext.Provider value={INITIAL_CART_CONTENT}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wish-list" element={<WishListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </CartContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
