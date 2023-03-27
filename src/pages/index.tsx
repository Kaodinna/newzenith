import Accelerator from "@/components/Accelerator"
import Vision from "@/components/Vision"
import Apply from "@/components/Apply"
import FAQ from "@/components/FAQ"
import Footer from "../components/Footer"
import Head from 'next/head';
const Home = () => {
  return (
    <div>
       <Head>
        <title>Zenithchain</title>
      </Head>
      <Head>
        <link rel="icon" href="../../public/sphere.png" />
      </Head>
      <Accelerator/>
      <Vision/>
      <Apply/>
      <FAQ/>
      <Footer/>
      
    </div>
  )
}

export default Home 