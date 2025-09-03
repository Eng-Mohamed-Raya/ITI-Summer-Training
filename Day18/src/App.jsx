import { BrowserRouter ,Routes,Route} from "react-router"
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Layout from './components/layout/index';
import Error from './components/Error';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
