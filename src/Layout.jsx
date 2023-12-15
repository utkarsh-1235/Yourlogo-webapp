
import Header from './Components/Headers/Header'
import Footer from './Components/Footers/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Layout
