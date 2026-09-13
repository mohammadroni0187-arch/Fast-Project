
import { Suspense } from 'react'
import './App.css'
import Card from './Component/Card'
import Navbar from './Component/Navbar'
import type { Icard } from './Types/cardType'
import HeroSection from './Component/HeroSection'
import Footer from './MainFooter/Footer'



const cardFetch=async():Promise<Icard[]>=>{
  const res =await fetch('/data.json')
  const data =await res.json();
  return data;
}

function App() {
  const cardPromise = cardFetch();

  return (
    <>
    <Navbar/>
    <main className='pt-20'>

    <HeroSection/>
    <Suspense fallback={<h2>Loanding....</h2>}>
      <Card cardPromise={cardPromise} />
    </Suspense>
    <Footer/>
    </main>
   </>
  )
}

export default App
