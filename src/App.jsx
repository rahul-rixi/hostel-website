import Footer from "./components/Footer"
import Navbar from "./components/Project"
import Header from "./pages/Header"
import StudentSection from "./pages/StudentSection"
import Map from "./components/Map"



function App() {
 

  return (
    <div className=' h-screen'>   
 
<Navbar/>
<Header/>

<StudentSection/>
<Map/>
<Footer/>
   
    </div>
  )
}

export default App
