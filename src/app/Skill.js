
import BlurText from "../Components/AnimatedList/blurtext"
import Horizontal_scroll from "./horizontal-scroll"


export default function Skill() {

    return (
      <section id="Skill ">
        <div className="flex text-white flex-col px-10 lg:px-20 pt-8 pb-8 overflow-x-hidden">
      <div className="text-5xl lg:text-6xl font-bold">
      <BlurText
  text="Skill"
  delay={150}
  animateBy="words"
  direction="top"
  classNameName="text-2xl mb-8"
/>      </div>
             
      </div>
      <div className="overflow-x-hidden relative">
        <Horizontal_scroll/>
        </div>
      </section>
    )
}