"use client"
import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      {/* <Navbar/> */}
      <section className='flex p-12 max-md:flex-col max-md:'>
        <div className='w-[50%] min-w-[60%] flex flex-col'>
          <h1 className='bng text-[72px] font-bold max-[1095px]:text-[52px]'>The World is burning! Donate,Generously</h1>
          <p className='text-[24px]'>
            You can donate directly to orphanages,<br /> Verified NGOs and much more different<br />causes around the world
          </p>
          <div><br /><br />
            <a href='#' className='btnn'>Donate</a>
          </div>

        </div>
        <div className='w-[50%] flex flex-col gap-4'>
          <div className='flex justify-between'>
            <div className='flex items-end'>
              <Image src='first.svg' width={160} height={0} className='max-[1095px]:w-[60%]'/>
            </div>
            <Image src='third.svg' width={280} height={0} className='max-[1095px]:w-[50%]'/>
          </div>
          <div className='flex gap-[4em] max-[1095px]:gap-[2em] '>
            <div className='relative'>
              <Image src='second.svg' width={130} height={0} className='max-[1095px]:w-[70%]'/>
            </div>
            <Image src='fourth.svg' width={230} height={0} className='max-[1095px]:w-[40%]'/>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className='text-center text-[48px] font-bold'>Projects You Can Donate To</h1>
          <p className='text-center text-[24px]'>These are popular causes around the world <br /> people are currently donating to</p>
        </div>
        <div className='p-12 flex justify-between'>
          <div className='w-[30%] rounded borderstyling'>
            <img src='./boyonboat.jpg' class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-[20px] mb-2 text-[#616060]">Nigeria</div>
              <p class="text-black text-[24px] font-bold">
                Provide Health Care to 20 Villages in Borno State
              </p>
            </div>
          </div>
          <div className='w-[30%] rounded shadow-lg borderstyling'>
            <img src='./sunset.jpg' class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-[20px]  mb-2 text-[#616060]">PHILIPINES</div>
              <p class="text-black text-[24px] font-bold">
              Provide Health Care to 20 Villages in Borno State
              </p>
            </div>
          </div>
          <div className='w-[30%] rounded shadow-lg borderstyling'>
            <img src='./floodedhome.jpg' class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-[20px]  mb-2 text-[#616060]">Nigeria</div>
              <p class="text-black text-[24px] font-bold">
              Provide Health Care to 20 Villages in Borno State
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className='text-center text-[48px] font-bold'>Top Donors</h1>
          <p className='text-center text-[24px]'>These are our top donors from <br /> around the world</p>
        </div>
        <div className='flex justify-between p-12'>
          <div className='bg-blue-200 px-[48px] py-[1px] bt-[1px solid black] items-center'>
            <h2>Arnold David</h2>
            <p>Donated 500 dollars to H</p>
          </div>
          <div className='bg-blue-200 px-[48px] py-[17px]'>
            <h2>Arnold David</h2>
            <p>Donated 500 dollars to H</p>
          </div>
          <div className='bg-blue-200 px-[48px] py-[17px]'>
            <h2>Arnold David</h2>
            <p>Donated 500 dollars to H</p>
          </div>
        </div>
      </section>
    </>
  )
}
