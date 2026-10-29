import './App.css'
import './index.css'
import Home from './pages/home/Home';
import Units from './pages/units/Units';
import UnitsDetails from './pages/units/UnitsDetails';
import Zones from './pages/zones/Zones';
import ZonesDetails from './pages/zones/ZonesDetails';
import Developers from './pages/developers/Developers';
import DeveloperDetails from './pages/developers/DeveloperDetails';
import ContactUs from './pages/contactUs/ContactUs';
import ProjectDetails from './pages/projects/ProjectDetails';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {

  return (
    <>
  <Routes>

<Route element={<Layout/>}>
  <Route path='/' element={<Home />}/>
  <Route path='/home' element={<Home />}/>
  <Route path='/units' element={<Units />}/>
  <Route path='/units/:id' element={<UnitsDetails />}/>
  <Route path='/zones' element={<Zones />}/>
  <Route path='/zones/:id' element={<ZonesDetails />}/>
  <Route path="/projects/:id" element={<ProjectDetails />} />
  <Route path='/developers' element={<Developers />}/>
  <Route path='/developers/:id' element={<DeveloperDetails />}/>
  <Route path='/contactUs' element={<ContactUs />}/>
  </Route>

  </Routes>
    </>
  )
}

export default App
