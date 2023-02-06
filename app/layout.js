import Banner from './Components/Banner/Banner'
import Bestfull from './Components/Bestfull/Bestfull'
import RespponsiveBestfull from './Components/Bestfull/RespponsiveBestfull'
import Header from './Components/Header/Header'
import HealthySide from './Components/Midpart/HealthySide'
import SectionThree from './Components/SectionThree/SectionThree'
import './globals.css'

export default function RootLayout({ children }) {
  return (
     <div>
      <div className='lg:w-[1440px] lg:h-[4919px] mx-auto w-[100%] h-[6623px]'>
      <Header/>
       <Banner/>
       <HealthySide/>
       <SectionThree/>
       <Bestfull/>
       <RespponsiveBestfull/>

      </div>
     </div>
  )
}
