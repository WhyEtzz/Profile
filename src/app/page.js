import Image from "next/image";
import { SmoothCursor } from "./cursor";
import Nav from "./navbar"
import Hero from "./Hero";
import Running_Text from "./Running-Text";
import About_me from "./About-me";
import Experience from "./experience.";
import Skill from "./Skill";
import Bridge from "./bridge"
import Location from "./location";
import SocialMedia from "./social-media";
import Credits from "./credits";

export default function Home() {
  return (
    <>
    <SmoothCursor/>
    <Nav/>
    <Hero/>
    <Running_Text/>
    <About_me/>
    <Experience/>
    <Skill/>
    <Bridge/>
    <Location/>
    <SocialMedia/>
    <Credits/>
    </>
  );
}
