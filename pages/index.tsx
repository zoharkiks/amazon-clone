import type { NextPage } from 'next'
import Head from 'next/head'

// import containers
import {Footer,Hero}  from '../containers'
// import components
import { Navbar, Sidebar } from "../components";

const Home: NextPage = () => {
  return (
    <div className='text-black bg-lightGray' >
      <Head>
        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Website Sections */}
<Navbar/>
<div className="flex">
<Hero/>

<div className="hidden md:flex">
          <Sidebar />
        </div>

</div>
<Footer/>

    </div>
  )
}

export default Home
