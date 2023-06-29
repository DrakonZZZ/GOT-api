import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Detail from './detail/Detail';
import Error from './Error';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="character/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Layout;
