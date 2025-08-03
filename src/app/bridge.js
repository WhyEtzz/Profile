import localFont from 'next/font/local'
import DarkVeil from "../Backgrounds/darkveil"

const myFont = localFont({
  src: './Andrea Bellarosa.ttf',
})

export default function Bridge(){
    return (
        <div className="flex flex-row w-full text-gray-50 justify-center py-32 relative">
            <h3 className={"text-2xl lg:text-5xl text-center "+myFont.className}>Mochammad Ekhi Setiawan</h3>
            <div className='absolute w-full h-full top-0 right-0 -z-10'>
                 <DarkVeil />
            </div>
        </div>
    )
}