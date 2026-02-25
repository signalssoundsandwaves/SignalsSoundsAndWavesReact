import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/Card';

gsap.registerPlugin(ScrollTrigger);

function Research() {
	const cardsRef = useRef([]);

	const researchCards = [
		{
			title: 'The Sound of Soil',
			text: 'In this project we created a fully functional prototype for a low cost, open source ecoacoustics measurement system. The project required a good understanding of analog and digital signal processing techniques, embedded development, electronics, and novel research in the field of eco-acoustics.',
            image: '/Fork1.JPG',
            imagePosition: 'float-end',
            imageStyle: { maxWidth: '200px', height: 'auto' },
        },
		{
			title: 'Creative applications for dry electrode EEG and VR applications',
			text: 'I worked alongside a team of researchers to explore novel applications for dry electrode EEG in virtual reality environments.',
            image: '/EEG1.jpeg',
            imagePosition: 'float-start',
		},
	];

	useEffect(() => {
		const cards = cardsRef.current.slice(0, researchCards.length);
		gsap.fromTo(
			cards,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: cards[0],
					start: 'top 80%',
					end: 'top 20%',
					toggleActions: 'play none none none',
				},
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div className="container my-5">
			<h2 className="mb-4">Research</h2>
			<div className="row g-4">
				{researchCards.map((card, idx) => (
					<div className="col-md-6" key={idx}>
						<Card {...card} cardRef={(el) => (cardsRef.current[idx] = el)} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Research;

