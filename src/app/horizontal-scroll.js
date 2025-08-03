"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react'; 
import Particles from "../Backgrounds/particle"
import { InteractiveHoverButton } from "../Components/magicui/interactive-hover-button";


export default function Horizontal_scroll() {
  gsap.registerPlugin(ScrollTrigger);

  const containerref = useRef(null);
  // Gunakan array untuk menyimpan referensi ke setiap section
  const sectionRefs = useRef([]);
  sectionRefs.current = []; // Inisialisasi array kosong

  // Callback function untuk menyimpan referensi setiap section
  const addSectionRef = el => {
    if (el && !sectionRefs.current.includes(el)) { // Pastikan elemen ada dan belum ditambahkan
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    if (containerref.current && sectionRefs.current.length > 0) {
      let sections = sectionRefs.current; // Gunakan array referensi yang sudah terkumpul

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerref.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
          snap: 1 / (sections.length - 1),
          markers: false,
        }
      });
    }

    // Cleanup function untuk ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // [] agar efek hanya berjalan sekali setelah mount awal

  return (
    <div className="flex text-lg w-[400vw]" ref={containerref}>
      <section className="bg-gray-50 w-screen h-screen flex-shrink-0 text-black" ref={addSectionRef}>
        <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full px-0 lg:px-20 pt-8 relative'>
          <div className='flex flex-col justify-center w-10/12 lg:w-1/2 h-1/2 lg:h-full gap-3'>
            <h1 className="text-5xl lg:text-8xl font-bold">Language</h1>
            <span className="text-xl lg:text-3xl font-regular">Programming language that I use for making project</span>
            <a href='https://github.com/whyetzz' className='py-2 cursor-none'><InteractiveHoverButton>My Project</InteractiveHoverButton></a>
          </div>
          <div className='flex flex-row flex-wrap w-full lg:w-1/2 h-1/2 lg:h-full justify-center items-center gap-2 lg:gap-5 content-start lg:content-center'>
            <img src="icons/html.svg" alt="html icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/css.svg" alt="css icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/nodejs.svg" alt="nodejs icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/python.svg" alt="python icon" className="size-1/5 lg:size-1/6"></img>
          </div>
          <div className='absolute w-full h-full top-0 right-0 -z-20'>
           <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  </div>
        </div>
      </section>
      <section className="bg-gray-50 w-screen h-screen flex-shrink-0 text-black" ref={addSectionRef}>
        <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full px-0 lg:px-20 pt-8 relative'>
          <div className='flex flex-col justify-center w-10/12 lg:w-1/2 h-1/2 lg:h-full gap-3'>
            <h1 className="text-5xl lg:text-8xl font-bold">Framework & Library</h1>
            <span className="text-xl lg:text-3xl font-regular">Frameworks & Library that I mostly used for my project </span>
            <a href='https://github.com/whyetzz' className='py-2 cursor-none'><InteractiveHoverButton>My Project</InteractiveHoverButton></a>
          </div>
          <div className='flex flex-row flex-wrap w-full lg:w-1/2 h-1/2 lg:h-full justify-center items-center content-center gap-2 lg:gap-5 content-start lg:content-center'>
            <img src="icons/express.svg" alt="express icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/ejs.svg" alt="ejs icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/next.svg" alt="next icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/react.svg" alt="react icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/tailwind.svg" alt="tailwind icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/bootstrap.svg" alt="bootstrap icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/opencv.svg" alt="opencv icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/shadcn.svg" alt="shadcn icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/magicui.svg" alt="magicui icon" className="size-1/5 lg:size-1/6"></img>
            <img src="icons/reactbits.svg" alt="react bits icon" className="size-1/5 lg:size-1/6"></img>
          </div>
          <div className='absolute w-full h-full top-0 right-0 -z-20'>
           <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  </div>
        </div>
      </section>
      <section className="bg-gray-50 w-screen h-screen flex-shrink-0 text-black" ref={addSectionRef}>
        <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full px-0 lg:px-20 pt-8 relative'>
          <div className='flex flex-col justify-center w-10/12 lg:w-1/2 h-1/2 lg:h-full gap-3'>
            <h1 className="text-5xl lg:text-8xl font-bold">Graphic Design & Image Editing</h1>
            <span className="text-xl lg:text-3xl font-regular">Software that I use for making graphic design and image editing</span>
          </div>
          <div className='flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full justify-start lg:justify-center items-center content-center'>
          <div className='flex flex-row w-full justify-center items-center gap-2 lg:gap-5 content-start lg:content-center'>
            <img src="icons/photoshop.svg" alt="photoshop icon" className="w-1/5 lg:w-1/6"></img>
            <img src="icons/illustrator.svg" alt="illustrator icon" className="w-1/5 lg:w-1/6"></img>
            <img src="icons/coreldraw.svg" alt="coreldraw icon" className="w-1/5 lg:w-1/6"></img>
          </div>
            <hr className='h-[2px] w-2/3 text-gray-300 bg-gray-300'/>            
            <div className='flex flex-row gap-4 justify-center items-center py-3'>
              <img src='./image porto 1.jpg'className='w-1/3'/>
              <img src='./image porto 2.jpg'className='w-1/3'/>
            </div>
          </div>
          <div className='absolute w-full h-full top-0 right-0 -z-20'>
           <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  </div>
        </div>
      </section>
      <section className="bg-gray-50 w-screen h-screen flex-shrink-0 text-black" ref={addSectionRef}>
        <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full px-0 lg:px-20 pt-8 relative'>
          <div className='flex flex-col justify-center w-10/12 lg:w-1/2 h-1/2 lg:h-full gap-3'>
            <h1 className="text-5xl lg:text-8xl font-bold">Video Editing & 3D Animation</h1>
            <span className="text-xl lg:text-3xl font-regular">Software that I use for Video Editing & 3D Animation</span>

          </div>
          <div className='flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full justify-start lg:justify-center items-center content-center'>
          <div className='flex flex-row w-full justify-center items-center gap-2 lg:gap-5 content-start lg:content-center'>
            <img src="icons/adobe.svg" alt="adobe premiere icon" className="w-1/5 lg:w-1/6"></img>
            <img src="icons/after-effects.svg" alt="after effect icon" className="w-1/5 lg:w-1/6"></img>
            <img src="icons/blender.svg" alt="blender icon" className="w-1/5 lg:w-1/6"></img>
          </div>
            <hr className='h-[2px] w-2/3 text-gray-300 bg-gray-300'/>            
            <div className='flex flex-row gap-4 justify-center items-center py-3'>
              <video src='./video one.mp4'autoPlay muted loop className='w-2/4'/>
              <video src='./omg.mp4'autoPlay muted loop className='w-1/3'/>
            </div>
          </div>
          <div className='absolute w-full h-full top-0 right-0 -z-20'>
           <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  </div>
        </div>
      </section>
    </div>
  );
}