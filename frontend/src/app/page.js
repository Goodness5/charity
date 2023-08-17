import Image from 'next/image'

export default function Home() {
  return (
        <>
        <nav className='bg-white flex justify-between'>
          <div className=' w-[50%] pl-12'>
            <Image src="logo.svg" width={0} height={0} className="w-[30%]"/>
          </div>
          <div className='w-[50%] pr-12'>
            <ul className='w-[100%] text-[#131313] text-2xl font-genos h-full flex justify-between items-center'>
              <li> <a >Home</a></li>
              <li> <a>About us</a></li>
              <li><Image src='home.svg' width={0} height={0} className="w-[60%]"/></li>
              <li> <button><Image src='sun.svg' width={0} height={0} className="w-[60%]"/></button></li>
            </ul>
          </div>
        </nav>
        </>
  )
}
