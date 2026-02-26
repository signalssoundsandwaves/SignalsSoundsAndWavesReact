import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/Card';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const cardsRef = useRef([]);

  const firstRowCards = [
    {
      title: 'About Signals Sounds And Waves',
      text: 'Signals, Sounds and Waves is a project by William Eden. I hold a First-Class degree in Sound Engineering and Production and have since worked across a range of media disciplines. This website serves as both a portfolio of selected work and a platform to explore and refine the concepts I’ve developed throughout my studies and professional practice. I hope you find it clear, engaging, and informative.',
      image: '/wim_linkedin.jpeg',
      link: { to: '/Cv', label: 'My CV..' },
    },
    {
      title: 'Why Signals Sounds And Waves?',
      text: 'Signals, Sounds and Waves — sounds snappy right? Well, there\'s more to it than that. Here I\'ll talk about what the terms mean in the context of a typical recording setup, and link to lots of useful information.',
      link: { to: '/Why', label: 'Read more..' },
    },
    {
      title: 'Plugins!',
      text: 'Here you will find various plugins that I have developed. Please download and enjoy — any feedback or QA is much appreciated.',
      link: { to: '/Plugins', label: 'Read more..' },
    },
  ];

  const secondRowCards = [
    {
      title: 'Gaussian Splatting',
      image: '/Gaussian.png',
      imagePosition: 'float-end',
    },
    {
      title: 'What is a Gaussian Splat?',
      link: { to: '/GaussianSplatting', label: 'Read more..' },
    },
    {
      title: 'Splat-aloguing',
      text: 'Here you will find a collection of gaussian splats (use the arrow keys and space bar to cycle the splats, also viewable in VR).',
      externalLink: { href: 'https://vr-spark-splats.vercel.app/', label: 'Here' },
    },
  ];

  const thirdRowCards = [
    {
      title: 'Commercial Projects',
      text: 'I have contributed to various commercial projects as both a hardware developer and QA engineer, ensuring quality and reliability across diverse applications.',
      link: { to: '/projects', label: 'View projects..' },
    },
    {
      title: 'Research Projects',
      text: 'My research experience includes developing ecoacoustics measurement systems and exploring innovative applications of dry electrode EEG technology.',
      link: { to: '/research', label: 'View projects..' },
    },
    {
      title: 'Personal Projects',
      text: 'I pursue ongoing projects in Audio, Web development and 3D graphics, combining creative problem-solving with technical exploration.',
      link: { to: '/personal', label: 'View personal projects..' },
    },
  ];

  useEffect(() => {
    // Animate first row of cards with stagger
    const firstRowCards = cardsRef.current.slice(0, 3);
    gsap.fromTo(
      firstRowCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: firstRowCards[0],
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate second row of cards with stagger
    const secondRowCards = cardsRef.current.slice(3, 6);
    gsap.fromTo(
      secondRowCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: secondRowCards[0],
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate third row of cards with stagger
    const thirdRowCards = cardsRef.current.slice(6, 9);
    gsap.fromTo(
      thirdRowCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: thirdRowCards[0],
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
      {/* First row of cards */}
      <div className="row g-4">
        {firstRowCards.map((cardData, index) => (
          <div className="col-md-4" key={index}>
            <Card
              {...cardData}
              cardRef={(el) => (cardsRef.current[index] = el)}
            />
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="my-5"></div>

      {/* Second row of cards */}
      <div className="row g-4">
        {secondRowCards.map((cardData, index) => (
          <div className="col-md-4" key={index}>
            <Card
              {...cardData}
              cardRef={(el) => (cardsRef.current[3 + index] = el)}
            />
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="my-5"></div>

      {/* Third row of cards */}
      <div className="row g-4">
        {thirdRowCards.map((cardData, index) => (
          <div className="col-md-4" key={index}>
            <Card
              {...cardData}
              cardRef={(el) => (cardsRef.current[6 + index] = el)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
