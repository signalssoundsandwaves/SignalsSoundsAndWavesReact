import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/Card';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const cardsRef = useRef([]);

  const projectCards = [
    {
      title: 'Meta: Rugby World Cup Experience 2023',
      text: 'Working with Unit9,  I lead motion capture sessions to create unique animations for each rugby \'superfan\'. These were used in an interactive green screen experience and within a Spark AR application. A further set of animations were captured for a holographic presentation across the paris skyline for the rugby final.',
      image: 'RWC.png',
      imagePosition: 'float-start',
      externalLink: { href: 'https://www.unit9.com/project/meta-rugby-world-cup-experience-2023', label: 'View project..' },
    },
    {
      title: 'Nike Air - Unit9/BBH Singapore',
      text: 'I was lead hardware tech for motion capture sessions. We created a set of animations for three world class athletes, which were used in a marketing campaign that saw the athletes projected onto the Nike Store, Orchard Road, Singapore',
      image: 'Nike.jpg',
      imagePosition: 'float-end',
    },
    {
      title: 'Anyang: China\'s Ancient City of Kings',
      text: 'I lead onsite QA for all aspects of the exhibition’s digital installation. This included an interactive table, projection mapping and an AR treasure hunt.',
      image: 'Anyang.png',
      imagePosition: 'float-start',
      externalLink: { href: 'https://www.unit9.com/project/anyang-chinas-ancient-city-kings', label: 'View project..' },
    },
    {
      title: 'M&Ms Sweet Moves',
      text: 'As a Hardware Dev at Unit9, I provided maintenance to the M&Ms Sweet Moves Experience at their Leciester Square store. This used a variety of technologies including Raspberry Pi controlled LEDs, depth sensors and OSC messaging over an internal network.',
      image: 'MnM.jpg',
      imagePosition: 'float-end',
    },
  ];

  useEffect(() => {
    // Animate project cards with stagger
    const cards = cardsRef.current.slice(0, 4);
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
      <h2 className="mb-4">Projects</h2>
      <div className="row g-4">
        {projectCards.map((cardData, index) => (
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

export default Projects;
