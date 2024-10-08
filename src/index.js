import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';


const root = ReactDOM.createRoot(document.getElementById('hesabsystem-root'));
root.render(
	<React.StrictMode>
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Layout>
		</Router>
	</React.StrictMode>
);