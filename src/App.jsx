import Carousel from './Components/Carousel'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [books , setBooks] = useState([]);
    useEffect(()=>{
    const fetchthumbnails = async () =>{
      const {data} = await axios.get("http://localhost:5000/getThumbnails");
      setBooks(data);
      console.log(data);
      
    }
    fetchthumbnails()
  },[])
  return (
    <>
      <Header />
      <HeroSection />
      <Carousel books={books} />
      <Carousel books={books} />
      <Carousel books={books} />
      <Footer/>
    </>

  )
}

export default App