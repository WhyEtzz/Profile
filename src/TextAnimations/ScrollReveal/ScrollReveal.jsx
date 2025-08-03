import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.config({ trialWarn: false });
}

const ScrollReveal = ({children}) => {
  const paragraphRef = useRef(null);
  const splitTextRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && paragraphRef.current) {
      splitTextRef.current = new SplitText(paragraphRef.current, { type: "lines" });
      splitTextRef.current.lines.forEach((target) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            markers: false, // Anda bisa atur ke true untuk debugging
            scrub: 1,
            start: "top center",
            end: "bottom center"
          }
        });
      });

      // Cleanup function untuk menghindari memory leaks (penting di React)
      return () => {
        if (splitTextRef.current) {
          splitTextRef.current.revert(); // Kembalikan elemen ke kondisi awal
        }
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Hapus semua ScrollTrigger instance
      };
    }
  }, []); // Empty dependency array memastikan efek hanya berjalan sekali setelah render pertama

  return (
    <div className=''>
    <p ref={paragraphRef} className="text text-lg font-medium">
      {children}
    </p>
    </div>
  );
};

export default ScrollReveal;