import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔹 Intro Headline Stagger
      gsap.from(headlineRef.current.children, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.05,
        ease: "power3.out",
      });

      // 🔹 Stats Animation
      gsap.from(statsRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.6,
        stagger: 0.25,
        ease: "power3.out",
      });

      // 🔹 Scroll-Linked Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      tl.to(imageRef.current, {
        y: -300,
        scale: 1.12,
        rotation: 2,
        ease: "none",
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZ FIZZ".split("");

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

      {/* Headline */}
      <h1
        ref={headlineRef}
        className="text-4xl md:text-7xl font-bold tracking-[0.6em] text-center z-10"
      >
        {headline.map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Stats */}
      <div className="flex gap-14 mt-14 z-10">
        {[
          { value: "98%", label: "Customer Satisfaction" },
          { value: "150+", label: "Completed Projects" },
          { value: "4.9★", label: "Average Rating" },
        ].map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statsRef.current[index] = el)}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold">{stat.value}</h2>
            <p className="text-sm text-gray-400 mt-2 tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Main Visual */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <img
          ref={imageRef}
          src="/car.jpg"
          alt="Main Visual"
          className="w-[420px] md:w-[700px] object-contain will-change-transform"
        />
      </div>
    </section>
  );
}