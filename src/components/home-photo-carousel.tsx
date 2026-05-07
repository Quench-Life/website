"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type CarouselSlide = {
  src: StaticImageData;
  alt: string;
};

type HomePhotoCarouselProps = {
  slides: CarouselSlide[];
};

export function HomePhotoCarousel({ slides }: HomePhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  if (!slides.length) return null;

  const goToPrevious = () => setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentIndex((index) => (index + 1) % slides.length);

  return (
    <article className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm">
      <div className="relative h-full min-h-72">
        {slides.map((slide, index) => (
          <Image
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority={index === 0}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/10 to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-100">Photo Highlights</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous photo"
              className="rounded-full border border-white/60 bg-white/20 px-2.5 py-1 text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next photo"
              className="rounded-full border border-white/60 bg-white/20 px-2.5 py-1 text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              ›
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={`${slide.alt}-dot`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show photo ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
