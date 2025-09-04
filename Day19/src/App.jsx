import { BrowserRouter, Routes,Route } from "react-router"
import Layout from "./Layout/layout"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts from "./components/Posts";
import Error from './components/Error';
import PostDetails from "./components/PostDetails";
 import { ToastContainer } from 'react-toastify';
import AddPost from "./components/AddPost";


function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="posts" element={<Posts/>}/>
        <Route path="posts/:id" element={<PostDetails/>}/>
        <Route path="posts/add" element={<AddPost/>}/>
      <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
      <ToastContainer />
   </BrowserRouter>
   
  )
}

export default App
