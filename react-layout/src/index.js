import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={(<Layout />)}>
            <Route index element={(<Home />)} />
            <Route path="about" element={(<About />)} />
            <Route path="pictures" element={(<Pictures />)} />
            <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
};

root.render(
    <App />
);