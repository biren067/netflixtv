// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import axios from '@/data/axios'
import endpoints from '@/data/endpoints'
import MainPage from '@/components/MainPage'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import background_image from '@/public/background_large.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={`${styles.home}`}>
        <div className={`${styles.home__backgroundImage}`}>
            <div className={`${styles.home__one__top_div}`}>
              <Image className='pl-36 pr-10 pt-5 h-20' src='/Logonetflix.png' width={350} height={60} alt="not found"/>
              <div className='float-right pt-10'>
              <select className={`${styles.home__langaue} border rounded-sm  bg-gray-950 border-white py-1 px-3 h-9`} name='language'>
                    <option value='en'>English</option>
                    <option value='hi'>हिंदी</option>
                </select> 
                <Link href="/mainpage"><button className='bg-red-600 text-white h-10 rounded-md px-6 py-1'>Login In</button></Link>
                </div>
                <div className={`${styles.home__image_description}`}>home__image_description</div>
            </div>
            
          <div className={`${styles.home__one__bottom_div}`}></div>
        </div>
        <div className={`${styles.home__two}flex  h-96 w-full`}>
          <div className='my-40  w-1/2'>
            <p className='text-5xl font-extrabold pt-10 pb-8'>Enjoy on your TV</p>
            <p className='font-semibold text-2xl pl-3'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
          <div className='w-1/2'>Image</div>
        </div>
        <div className={`${styles.home__three} flex h-96 w-full px-40`}><div className='w-1/2'><Image src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" width={500} height={500} unoptimized alt=""/></div><div className='w-1/2'><p className='text-5xl font-extrabold pt-10 pb-8 pl-2'>Download your show to watch online</p><p className='font-semibold text-2xl pl-3'>Save your favourites easily and always have something to watch.</p></div></div>
        <div className={`${styles.home__four} flex h-96 w-full px-40`}><div className='w-1/2'>Watch Everywhere</div><div className='w-1/2'>Image</div></div>
        <div className={`${styles.home__five} flex h-96 w-full px-40`}><div className='w-1/2'>Create Proflie for kids</div><div className='w-1/2'>Image</div></div>
        <div className={`${styles.home__six} flex h-96 w-full px-40`}><div className='w-1/2'>Frequently asked Question</div><div className='w-1/2'>Image</div></div>
      </div>
      <Link href='/mainpage'>Login</Link>
      
    </>
  )
}
