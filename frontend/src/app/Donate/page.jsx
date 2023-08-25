"use client"
import Image from 'next/image'
import { useState,useEffect } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

export default function Donate() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [money, setMoney] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney((prevMoney) => {
        const newMoney = prevMoney + 100;
        return newMoney >= 10000 ? 10000 : newMoney;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const normalizedValue = Math.min(money, 10000);
  const progressPercentage = (normalizedValue / 10000) * 100;
  return (
    <>
      <section className='px-12'>
        <h1 className='font-bold text-[48px]'>Flood Rescuers’ Forum for Flood Victims</h1>
        <section className='flex gap-x-2'>
          <div className='bg-red w-[60%]'>
            <Image src='FloodDonateImg.svg' width={0} height={0} className='w-full' />
            <div className='flex justify-between my-4'>
              <img src="fr.svg" alt="" srcset="" className='w-[12em]' />
              <img src="se.svg" alt="" srcset="" className='w-[12em]' />
              <img src="th.svg" alt="" srcset="" className='w-[12em]' />
              <img src="fo.svg" alt="" srcset="" className='w-[8em]' />
            </div>
            <section>
              <section className='bg-[#FBFCEB] w-full flex flex-col gap-y-[24px] me p-6'>
                <div>
                  <h1 className='text-[32px]'>Brief</h1>
                  <p>The initiative encompasses real-time communication, a crowdsourced volunteer network, emergency response funding, geolocation and mapping technology, and collaboration with local authorities. These components work together to create a comprehensive and coordinated approach that ensures swift response and efficient rescue operations during floods.</p>
                </div>
                <div>
                  <h1 className='text-[32px]'>Challenge</h1>
                  <p>In the face of the devastating impact of floods, our donation platform's proposed flood rescue impact initiative presents a holistic solution to address the challenges associated with rescue operations. By leveraging technology, community engagement, and strategic partnerships, we aim to revolutionize how we respond to floods and save lives.</p>
                </div>
                <div>
                  <h1 className='text-[32px]'>Solution</h1>
                  <p>Our proposed solution is to create a dedicated flood rescue impact initiative within our donation platform. This initiative will leverage the power of technology and community support to streamline rescue operations during floods. By collaborating with local authorities, emergency responders, and volunteer organizations, we will establish a comprehensive and coordinated network to provide aid swiftly and efficiently.</p>
                </div>

                <div>
                  <h1 className='text-[32px]'>Long Term Impact</h1>
                  <p>
                    The establishment of a flood rescue impact initiative on our donation platform will have a significant and lasting impact on flood-affected communities:
                    Swift Response:
                  </p>
                  <ol className='px-6 list-decimal'>
                    <li>By connecting volunteers and responders in real-time, we can drastically reduce response times, saving lives and minimizing property damage.</li>
                    <li>Community Empowerment: Enabling individuals to actively contribute to rescue efforts empowers communities to take charge of their safety and well-being.</li>
                    <li>Improved Resource Allocation: The emergency response fund will ensure that financial resources are readily available, enabling immediate action without waiting for  funding approvals.</li>
                    <li>Data-Driven Preparedness: The platform will collect valuable data that can help in predicting and preparing for future floods, thus enhancing disaster preparedness.</li>
                    <li>Scalability: This model can be adapted to address other natural disasters, such as earthquakes and hurricanes, expanding the platform's impact beyond flood rescues.</li>
                  </ol>
                  <p>
                    By harnessing technology, fostering community engagement, and facilitating rapid response, our flood rescue impact initiative aims to create a safer and more resilient future for flood-prone areas. Together, we can transform how we respond to disasters and make a tangible difference in the lives of those affected by floods.
                  </p>
                </div>

              </section>
              <div className='me mt-4 text-[16px] gap-x-[15em] flex px-10 py-20'>
                <p><span className='font-bold'>0</span> Donations</p>
                <p><span className='font-bold'>$10,000</span> to go</p>
              </div>
            </section>
          </div>
          <div className='bg-red-100 h-[90vh] w-[40%] flex flex-col gap-y-6'>
            <div className='me text-[16px] justify-between flex flex-col p-8'>
              <div className='flex items-center gap-x-[1em]'>
                <h1 className='font-bold text-[48px] font-Georama'>${money}</h1>
                <p className='text-[24px]'>raised of $10,000 goal</p>

              </div>
              <div className="w-full h-4 bg-gray-300 rounded overflow-hidden">
                
              <div className="h-full bg-blue-500" style={{ width: `${progressPercentage}%` }}></div>
              </div>
              <div className='flex items-center gap-x-[1em] justify-between'>
                <p><span className='font-bold'>0</span> Donations</p>
                <p><span className='font-bold'>$10,000</span> to go</p>
              </div>
              <div className='flex justify-center'>
                <div className='buttonshade w-[40%]'>
                  <button className='bg-white h-full w-full flex items-center justify-center gap-2 py-4'>Donate Now <Image src='Vector.svg' width={30} height={40} /></button>
                </div>
              </div>
            </div>
            <div className='me text-[16px] justify-between flex gap-y-6 flex-col p-8'>
              {/* <div className='buttonshade'> */}
                {/* <div className='h-[12em] bg-[#fff] flex flex-col-reverse'> */}
                  <div className='donateNowButtonShade'>
                    <div className='h-full bg-[#fff] p-4 flex gap-x-4'>
                      <p><span className='font-bold'>$10,000</span></p>
                      <p>Cater for the accommodation and feeding of 100 Nigerians displaced by the flood</p>
                    </div>
                  </div>
                  <div className='donateNowButtonShade'>
                    <div className='h-full bg-[#fff] p-4 flex gap-x-4'>
                      <p><span className='font-bold'>$5,000</span></p>
                      <p>Cater for the accommodation and feeding of 100 Nigerians displaced by the flood</p>
                    </div>
                  </div>
                {/* </div> */}
              {/* </div> */}
            </div>
            
          </div>
        </section>
      </section>
    </>
  )
}