import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Helmet } from "react-helmet";
import { dataFeatures } from './dataFeatures';


const Home = () => {
	const [dotLottie, setDotLottie] = React.useState(null);
	const [inputValue, setInputValue] = React.useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Form submitted with value: ' + inputValue);
	};

	return <>
		<Helmet>
			<title>Hesab System - AI Accounting & Inventory System with Advanced Voice Interaction Capabilities</title>
			<meta name="description" content="Next-generation AI-powered Accounting & Inventory System featuring Advanced Voice Interaction Capabilities" />
		</Helmet>
		<section className="container font-roboto ">
			<div className="row flex-grow-1 d-flex mb-5">
				<div className="col-12 col-xl-6 order-xl-1 order-2 text-center text-xl-start px-4">
					<h2 className="fw-bolder text-dark mt-5"
						style={{
							//fontSize: '3.8rem',
							fontSize: window.innerWidth < 1200 ? '3rem' : '3.8rem',
							lineHeight: '1.2'
						}}
					>
						AI accounting & inventory system with voice interaction
					</h2>
					<p className="fw-light mt-2 fs-5">
						Featuring Advanced Voice Interaction Capabilities
					</p>
					<form
						onSubmit={handleSubmit}
						className="mt-4 d-flex justify-content-center justify-content-xl-start mx-auto mx-xl-0 m-0 p-2 rounded-pill border border-1"
						style={{ maxWidth: '500px' }}
					>
						<input
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="Work email"
							className="form-control border-0 px-4 shadow-none rounded-end rounded-5"
						/>
						<button
							type="submit"
							className="btn btn-success border-0 px-4 py-3 text-nowrap rounded-start rounded-5"
						>
							Get free access
						</button>
					</form>
				</div >
				<div className="col-12 col-xl-6 order-xl-2 order-1">
					<DotLottieReact
						className='d-block mx-auto'
						src="/images/hesab-system-sphere.lottie"
						loop
						autoplay
						onMouseEnter={() => dotLottie?.setSpeed(2)}
						onMouseLeave={() => dotLottie?.setSpeed(0.5)}
						dotLottieRefCallback={(ref) => setDotLottie(ref)}
						style={{ width: '480px', height: '480px' }}
					/>
				</div>
			</div>

			<div className="row justify-content-center text-center my-5 py-5">
				<div className="col-12 mb-4 mt-5">
					<h3 className="fw-bolder text-dark">Key Features</h3>
					<p className="fw-light mt-2 fs-5">
						Discover the advanced features of Hesab System
					</p>
				</div>
				<div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
					{dataFeatures.map((feature, index) => (
						<div
							key={index}
							className="col-5 col-xl-3 text-center p-4 shadow-sm rounded-3 bg-light text-dark hover:bg-secondary hover:text-light"
							style={{ flex: '0 0 auto' }}
						>
							<h4 className="fw-medium mb-3">{feature.title}</h4>
							<p className="fw-light mt-2 fs-6">{feature.description}</p>
						</div>
					))}
				</div>
			</div>

		</section>
	</>
}


export default Home
