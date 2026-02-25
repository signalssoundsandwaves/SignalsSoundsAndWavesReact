import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/Card';

gsap.registerPlugin(ScrollTrigger);

function Personal() {
  const cardsRef = useRef([]);

  const personalCards = [
    {
        title: 'ID8Notes: A browser based note taking app',
        text: 'ID8Notes is a browser-based note-taking app that syncs across devices. Users can sign in to access their notes anywhere. The project demonstrates full-stack development and integrates the OpenAI API to generate embeddings from notes and perform similarity searches to find related research.',
        externalLink: { href: 'https://id8notes.vercel.app/', label: 'View project..' },
    },
    {
      title: 'Electronics and Embedded Projects',
      text: 'I am currently working on a guitar pedal based on the classic bazz fuzz design.',
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current.slice(0, personalCards.length);
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
      <h2 className="mb-4">Personal Projects</h2>
      <div className="row g-4">
        {personalCards.map((card, idx) => (
          <div className="col-md-6" key={idx}>
            <Card {...card} cardRef={(el) => (cardsRef.current[idx] = el)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personal;
