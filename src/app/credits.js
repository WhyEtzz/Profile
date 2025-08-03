import localFont from 'next/font/local'
import Link from 'next/link'


const myFont2 = localFont({
  src: './Minecraft.ttf',
})
export default function Credits() {
    return (
        <div className={"flex flex-row lg:text-start text-center px-2 lg:px-20 py-5 bg-black lg:justify-start justify-center "+myFont2.className}><Link className="text-white cursor-none" href={'#'} scroll={true}>Code With ♥️ From Mochammad Ekhi Setiawan</Link></div>
    )
}