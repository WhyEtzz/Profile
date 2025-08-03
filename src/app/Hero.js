import Lanyard from "./lanyard"
import Aurora from "../Backgrounds/Aurora/Aurora"
import RotatingText from '../TextAnimations/RotatingText/RotatingText'

export default function Hero() {
    return (
        <>
        <div className="flex flex-row text-white p-7 lg:p-14 h-screen bg-transparent">
      <div className="flex flex-col justify-center gap-y-3 h-4/5 lg:pl-5 z-10">
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <h1 className="text-left text-5xl lg:text-7xl font-bold nme">
              MOCHAMMAD
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-left text-5xl lg:text-7xl font-bold nme">EKHI</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-left text-5xl lg:text-7xl font-bold nme">
              SETIAWAN
            </h1>
          </div>
          <div className="flex flex-row gap-5 items-center w-full justify-start">
          <h1 className="text-left text-2xl lg:text-4xl font-semibold">
              I&apos;m a
            </h1>
          <RotatingText
  texts={['FULL STACK', 'GRAPHIC DESIGNER', 'VIDEO EDITOR', 'DEVELOPER']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl lg:text-3xl font-semibold"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
</div>
        </div>
        <span className="simple_desc text-base text-wrap"></span>
      </div>
      
    </div>
    <div className="hidden lg:flex w-full h-screen absolute top-0 left-0">
      <Lanyard/>
      </div>
    <div
      className="anu absolute flex justify-center w-full h-full top-0 right-0 -z-20">
        <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
      </div>
    </>
    )

}
