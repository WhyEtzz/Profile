"use client"
import BlurText from "../Components/AnimatedList/blurtext"


export default function Experience() {
    return (
        
          <div className="flex text-white flex-col px-10 lg:px-20 pt-8">
        <div className="text-5xl lg:text-6xl font-bold">
        <BlurText
    text="Experiece"
    delay={150}
    animateBy="words"
    direction="top"
  /> 
  </div>
  <div className="py-8 flex flex-col lg:flex-row gap-4">
        <div
          className="w-full lg:w-1/3 bg-zinc-900 p-4 text-lg rounded-xl shadow-inner shadow-zinc-800 hover:bg-zinc-700 transition-colors duration-1000 cursor-none"
        >
          <span>Internship as a Graphic Designer at CV New Printerku</span>
          <div className="flex flex-col pt-4 text-sm text-white/50">
            <p>Jul, 2020 - Okt, 2020 • 4 months</p>
            <p>Internship as a Graphic Designer at CV New Printerku</p>
          </div>
        </div>
        <div
          className="w-full lg:w-1/3 bg-zinc-900 p-4 text-lg rounded-xl shadow-inner shadow-zinc-800 hover:bg-zinc-700 transition-colors duration-1000 cursor-none"
        >
          <span>Working as a Administrator at CV Setiawan Jaya Abadi</span>
          <div className="flex flex-col pt-4 text-sm text-white/50">
            <p>Mar, 2022 - Des, 2023 • 1 years 9 month</p>
            <p>Working as a Administrator at CV Setiawan Jaya Abadi</p>
          </div>
        </div>
        <div
          className="w-full lg:w-1/3 bg-zinc-900 p-4 text-lg rounded-xl shadow-inner shadow-zinc-800 hover:bg-zinc-700 transition-colors duration-1000 cursor-none"
        >
          <span
            >Working as a Graphic Designer at CV Greenlife Tirta Sentosa</span
          >
          <div className="flex flex-col pt-4 text-sm text-white/50">
            <p>April, 2023 - Now • Now</p>
            <p>Working as a Graphic Designer at CV Greenlife Tirta Sentosa</p>
          </div>
        </div>
      </div>
     </div>
  )
}