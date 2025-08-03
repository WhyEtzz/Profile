"use client"
import BlurText from "../Components/AnimatedList/blurtext"
import ScrollReveal from '../TextAnimations/ScrollReveal/ScrollReveal'


export default function About_me() {

const ew = `Hi there!👋🏻 I'm Mochammad Ekhi Setiawan, I'm currently living in
          Sidoarjo, Indonesia. I bring over 3 years of experience as a graphic
          designer, I'm skilled at creating, poster, banner, social media post,
          etc. I also a full stack web developer with a specialization in
          ExpressJS EJS And NextJS React. As a self-taught developer, I am driven by a
          passion for creating engaging and interactive websites, design and
          some video. I also a creative thinker, problem solver, and a perpetual
          learner, always eager to explore new technologies. Embracing a
          non-traditional path. I'm also a content creator on Tiktok and
          Instagram. I'm currently working as a graphic designer at CV Greenlife
          Tirta Sentosa until now. I'm always open to new opportunities and
          collaborations, so feel free to reach out to me! 🔥`


    return (
      <section id="about">
        <div className="flex text-white flex-col px-10 lg:px-20 pt-8">
      <div className="text-5xl lg:text-6xl font-bold">
      <BlurText
  text="About Me"
  delay={150}
  animateBy="words"
  direction="top"
  classNameName="text-2xl mb-8"
/>      </div>

              <div className="flex flex-col py-4 text-justify text-lg abt">
              <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  {ew}
</ScrollReveal>
</div>

      </div>
      </section>
    )
}