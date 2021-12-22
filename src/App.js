import MyNav from "./components/MyNav";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FullStack from "./pages/FullStack";
import Instructors from "./pages/Instructor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/developing" element={<FullStack />} />
          <Route path="/data-science" element={<FullStack />} />
          <Route path="/devops" element={<FullStack />} />
          <Route path="/instructors" element={<Instructors />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
