import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/Card';

gsap.registerPlugin(ScrollTrigger);

function DSP() {
  const cardsRef = useRef([]);

  const dspCards = [
    {
      title: 'Signals Sounds and Waves',
      text: 'Learn how sound waves propagate, and how an analog signal is converted to a digital signal.',
      link: { to: '/SignalsSoundsWaves', label: 'Explore..' },
    },
    {
      title: 'Fourier Analysis',
      text: 'Discover the power of Fourier transforms and their applications. Learn how complex signals can be decomposed into simpler sinusoidal components and how this transforms our understanding of signal processing.',
      link: { to: '/FFT', label: 'Learn more..' },
    },
    {
      title: 'The Z Transform',
      text: 'Delve into the Z-transform, an essential tool in discrete-time signal processing. Understand its relationship to the Fourier transform and how it helps analyze and design digital filters.',
      link: { to: '/Ztransform', label: 'Discover..' },
    },
  ];

  useEffect(() => {
    // Animate DSP cards with stagger
    const cards = cardsRef.current.slice(0, 3);
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Digital Signal Processing</h2>
      <div className="row g-4">
        {dspCards.map((cardData, index) => (
          <div className="col-md-6" key={index}>
            <Card
              {...cardData}
              cardRef={(el) => (cardsRef.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DSP;
