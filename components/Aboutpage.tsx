import React from 'react';

const Aboutpage: React.FC = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<header className="max-w-5xl mx-auto px-6 py-16">
				<h1 className="text-4xl font-extrabold">About
					<span className="text-purple-600"> EnxtAI</span>
				</h1>
				<p className="mt-4 text-lg">We're EnxtAI - AI-powered business transformation agency. We transform innovative ideas into scalable businesses through cutting-edge technology and strategic expertise.</p>
				<p className="mt-2">Our mission is to empower Indian entrepreneurs and startups with world-class business solutions, advanced technology, and strategic guidance. We believe India's next unicorns are being built today.</p>
			</header>

			<section className="bg-gray-50 py-12">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-2xl font-bold">AI Timeline</h2>
					<p className="mt-2">From breakthrough technologies to mainstream adoption, discover how the AI revolution shaped the world and inspired the founding of EnxtAI in 2025.</p>

					<div className="mt-8 grid gap-6">
						<article className="p-6 bg-white rounded-lg shadow-sm">
							<h3 className="font-semibold">2020-2021</h3>
							<p className="mt-2 text-sm">The AI revolution begins with breakthrough developments in machine learning, natural language processing, and computer vision technologies that would reshape entire industries.</p>
							<div className="mt-3 text-xs text-gray-600">ai breakthrough • machine learning</div>
						</article>

						<article className="p-6 bg-white rounded-lg shadow-sm">
							<h3 className="font-semibold">2022-2023</h3>
							<p className="mt-2 text-sm">AI goes mainstream with ChatGPT's launch and widespread enterprise adoption. Generative AI transforms content creation, coding, and business processes globally.</p>
							<div className="mt-3 text-xs text-gray-600">ai mainstream • generative ai</div>
						</article>

						<article className="p-6 bg-white rounded-lg shadow-sm">
							<h3 className="font-semibold">2024</h3>
							<p className="mt-2 text-sm">AI agents and automation reshape entire industries. Indian startups emerge as global leaders in AI innovation, with breakthrough applications in fintech, healthcare, and education.</p>
							<div className="mt-3 text-xs text-gray-600">ai agents • indian ai innovation</div>
						</article>

						<article className="p-6 bg-white rounded-lg shadow-sm">
							<h3 className="font-semibold">2025</h3>
							<p className="mt-2 text-sm">EnxtAI is founded to harness this AI revolution and empower the next generation of Indian startups with cutting-edge business solutions and AI-driven growth strategies.</p>
							<div className="mt-3 text-xs text-gray-600">enxtai founding • startup ecosystem</div>
						</article>
					</div>
				</div>
			</section>

			<section className="max-w-5xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-bold">Leading India's startup revolution</h2>
				<p className="mt-3">Leading India's startup revolution with cutting-edge business solutions and innovation frameworks. Helping 200+ startups scale globally.</p>

				<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
					<div className="p-6 bg-white rounded-lg text-center">
						<div className="text-3xl font-extrabold">15+</div>
						<div className="mt-1 text-sm text-gray-600">Startup Partners</div>
					</div>
					<div className="p-6 bg-white rounded-lg text-center">
						<div className="text-3xl font-extrabold">8</div>
						<div className="mt-1 text-sm text-gray-600">Expert Team</div>
					</div>
					<div className="p-6 bg-white rounded-lg text-center">
						<div className="text-3xl font-extrabold">100%</div>
						<div className="mt-1 text-sm text-gray-600">Client Satisfaction</div>
					</div>
					<div className="p-6 bg-white rounded-lg text-center">
						<div className="text-3xl font-extrabold">₹2Cr+</div>
						<div className="mt-1 text-sm text-gray-600">Initial Funding</div>
					</div>
				</div>
			</section>

			<section className="bg-gray-50 py-12">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-2xl font-bold">Our Values</h2>
					<p className="mt-3">The principles that guide everything we do and drive our commitment to excellence in AI innovation.</p>

					<div className="mt-6 grid md:grid-cols-3 gap-6">
						<div className="p-6 bg-white rounded-lg">
							<h3 className="font-semibold">Innovation First</h3>
							<p className="mt-2 text-sm">We push the boundaries of what's possible with AI, constantly exploring new frontiers in machine learning and automation.</p>
						</div>
						<div className="p-6 bg-white rounded-lg">
							<h3 className="font-semibold">Client Success</h3>
							<p className="mt-2 text-sm">Your success is our success. We're committed to delivering measurable results and ROI through our AI solutions.</p>
						</div>
						<div className="p-6 bg-white rounded-lg">
							<h3 className="font-semibold">Ethical AI</h3>
							<p className="mt-2 text-sm">We believe in responsible AI development that benefits humanity while maintaining transparency and fairness.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="max-w-5xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-bold">What Clients Say</h2>
				<div className="mt-6 space-y-6">
					<blockquote className="p-6 bg-white rounded-lg shadow-sm">
						<p className="italic">“EnxtAI transformed our startup vision into a thriving business. Their strategic guidance helped us scale from idea to market leader.”</p>
						<footer className="mt-3 font-semibold">Priya Sharma — CEO, TechFlow Solutions</footer>
					</blockquote>

					<blockquote className="p-6 bg-white rounded-lg shadow-sm">
						<p className="italic">“Working with EnxtAI was the best decision we made as founders. They provided end-to-end startup support.”</p>
						<footer className="mt-3 font-semibold">Rajesh Kumar — Co-founder, GreenTech Innovations</footer>
					</blockquote>

					<blockquote className="p-6 bg-white rounded-lg shadow-sm">
						<p className="italic">“EnxtAI doesn't just build products, they build sustainable businesses. Their understanding of the market is unmatched.”</p>
						<footer className="mt-3 font-semibold">Ananya Patel — Founder, EduNext Platform</footer>
					</blockquote>
				</div>
			</section>

			<section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
					<p className="mt-3">Join the AI revolution and discover how our cutting-edge solutions can accelerate your growth and optimize your operations.</p>
					<div className="mt-6">
						<button className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold">Contact Us</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Aboutpage;
