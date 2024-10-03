import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';


const root = ReactDOM.createRoot(document.getElementById('hesabsystem-root'));
root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);