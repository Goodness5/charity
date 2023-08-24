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
              <Image src='first.svg' width={160} height={0} className='max-[1095px]:w-[60%]' />
            </div>
            <Image src='third.svg' width={280} height={0} className='max-[1095px]:w-[50%]' />
          </div>
          <div className='flex gap-[4em] max-[1095px]:gap-[2em] '>
            <div className='relative'>
              <Image src='second.svg' width={130} height={0} className='max-[1095px]:w-[70%]' />
            </div>
            <Image src='fourth.svg' width={230} height={0} className='max-[1095px]:w-[40%]' />
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
        <div className='flex justify-center p-12 flex flex-col gap-y-9'>

          <div className=' w-full flex gap-x-5 justify-between'>
            <div className='h-[12em] flex flex-col justify-end'>
              <div className='element'>
                <div className='bg-white px-[4px] py-[1px] gap-x-4 flex rounded items-center'>
                  <div className='h-full text-[40px]'><p className='gy'>2</p></div>
                  <Image src='Rectangle.svg' width={70} height={70} />
                  <div>
                    <h2 className='font-bold text-[24px]'>Arnold David</h2>
                    <p className='text-[16px]'>Donated 500 dollars to Havilah Home for the Orphaned</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=' h-[12em]'>

              <div className='element'>
                <div className='bg-white px-[4px] py-[1px] gap-x-4 flex rounded items-center'>
                  <div className='h-full text-[40px]'><p className='gy'>1</p></div>
                  <Image src='Rectangle.svg' width={70} height={70} />
                  <div>
                    <h2 className='font-bold text-[24px]'>Arnold David</h2>
                    <p className='text-[16px]'>Donated 500 dollars to Havilah Home for the Orphaned</p>
                  </div>
                </div>
              </div>

            </div>

            <div className=' h-[12em] flex flex-col justify-end'>

              <div className='element'>
                <div className='bg-white px-[4px] py-[1px] gap-x-4 flex rounded items-center'>
                  <div className='h-full text-[40px]'><p className='gy'>3</p></div>
                  <Image src='Rectangle.svg' width={70} height={70} />
                  <div>
                    <h2 className='font-bold text-[24px]'>Arnold David</h2>
                    <p className='text-[16px]'>Donated 500 dollars to Havilah Home for the Orphaned</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className=' w-full flex gap-x-5 justify-center'>

            <div className='element'>
              <div className='bg-white px-[4px] py-[1px] gap-x-4 flex rounded items-center'>
                <div className='h-full text-[40px]'><p className='gy'>4</p></div>
                <Image src='Rectangle.svg' width={70} height={70} />
                <div>
                  <h2 className='font-bold text-[24px]'>Arnold David</h2>
                  <p className='text-[16px]'>Donated 500 dollars to Havilah Home for the Orphaned</p>
                </div>
              </div>
            </div>

          </div>

          <div className=' w-full flex gap-x-5 justify-around'>

            <div className='element'>
              <div className='bg-white px-[4px] py-[1px] gap-x-4 flex rounded items-center'>
                <div className='h-full text-[40px]'><p className='gy'>5</p></div>
                <Image src='Rectangle.svg' width={70} height={70} />
                <div>
                  <h2 className='font-bold text-[24px]'>Arnold David</h2>
                  <p className='text-[16px]'>Donated 500 dollars to Havilah Home for the Orphaned</p>
                </div>
              </div>
            </div>

            <div className='element'>
              <div className='bg-white px-[4px] py-[1px] gap-x-4 flex rounded items-center'>
                <div className='h-full text-[40px]'><p className='gy'>6</p></div>
                <Image src='Rectangle.svg' width={70} height={70} />
                <div>
                  <h2 className='font-bold text-[24px]'>Arnold David</h2>
                  <p className='text-[16px]'>Donated 500 dollars to Havilah Home for the Orphaned</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className='text-center text-[48px] font-bold'>Disaster Recovery</h1>
          <p className='text-center text-[24px]'>Donorm makes it easy to donate to reliable, locally-led disaster relief <br /> and recovery efforts around the world.</p>
        </div>
        <div>
          <Image src='BasemapImage.svg' width={100} height={70} className='w-full'/>
        </div>
      </section>
      <section>
        <div>
          <h1 className='text-center text-[48px] font-bold'>Our Sponsors</h1>
          <p className='text-center text-[24px]'>Donorm makes it easy to donate to reliable, locally-led disaster relief <br /> and recovery efforts around the world.</p>
        </div>
      </section>
    </>
  )
}
