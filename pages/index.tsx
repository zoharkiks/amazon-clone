import type { NextPage } from 'next'
import Head from 'next/head'

// import containers
import {Footer,Hero}  from '../containers'
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className='text-black bg-lightGray h-screen' >
      <Head>
        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Website Sections */}
<Navbar/>
<Hero/>
<Footer/>

    </div>
  )
}

export default Home
