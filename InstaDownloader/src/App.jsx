import React from 'react'
import Navbar from './components/Navbar';
import InstaTabs from './components/InstaTabs';
import SelectedTabFunction from './components/SelectedTabFunction';
import Tutorialtouse from './components/Tutorialtouse';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <div className='bg-gray-200 h-full w-full font-roboto'>
        <div className='wrapper container max-w-[1200px] mx-auto h-full'>

          <Navbar />
          <InstaTabs />
          <div className='bg-white'>
            <SelectedTabFunction />
          </div>
          <Tutorialtouse />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;