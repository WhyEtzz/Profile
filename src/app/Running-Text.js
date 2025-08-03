import { VelocityScroll } from "../Components/magicui/scroll-based-velocity";

export default function Running_Text() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll>FULL STACK | GRAPHIC DESIGNER | VIDEO EDITOR | DEVELOPER | </VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-900"></div>
    </div>
    )
}