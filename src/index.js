import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const el = <App />;

root.render(el);
