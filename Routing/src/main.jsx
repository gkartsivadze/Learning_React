import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import NoPage from './pages/NoPage'

function Main() {
  return (
    <>
    <h1>Hey</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<Main />)