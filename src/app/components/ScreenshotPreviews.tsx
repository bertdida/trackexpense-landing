'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const screenshotPreviews: { src: string; alt: string }[] = [
  {
    src: '/app/home-screenshot.png',
    alt: 'TrackExpense app home screenshot',
  },
  {
    src: '/app/record-expense-screenshot.png',
    alt: 'TrackExpense app record expense screenshot',
  },
  {
    src: '/app/home-green-screenshot.png',
    alt: 'TrackExpense app home green theme screenshot',
  },
  {
    src: '/app/breakdown-by-category-screenshot.png',
    alt: 'TrackExpense app breakdown by category screenshot',
  },
  {
    src: '/app/home-dark-screenshot.png',
    alt: 'TrackExpense app home dark mode screenshot',
  },
  {
    src: '/app/feedback-screenshot.png',
    alt: 'TrackExpense app feedback screenshot',
  },
  {
    src: '/app/email-sync-screenshot.png',
    alt: 'TrackExpense app email sync screenshot',
  },
  {
    src: '/app/notifications-screenshot.png',
    alt: 'TrackExpense app notifications screenshot',
  },
];

const ScreenshotPreviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScrollY ? -1 : 1;

      setScrollOffset((prev) => {
        const next = prev + direction * 1.5;
        const maxOffset = 100;
        return Math.max(Math.min(next, maxOffset), -maxOffset);
      });

      lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[250px] w-full items-center justify-center overflow-hidden"
    >
      <div
        style={{
          transform: `translateX(${scrollOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="relative -left-[200px] flex w-max gap-6 px-10"
      >
        {screenshotPreviews.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={978}
            height={2100}
            className="w-40 translate-y-2 rotate-[-10deg] md:w-52"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
export default ScreenshotPreviews;
