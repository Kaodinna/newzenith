import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';

type Props = {
  children: React.ReactNode;
};

export default function FadeInSection({ children }: Props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    }, {
      rootMargin: '-50px 0px',
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
