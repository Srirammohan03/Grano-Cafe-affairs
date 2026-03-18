import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './styles/fonts.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const NewMenu = lazy(() => import('./pages/newMenu'));
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const Contact = lazy(() => import('./pages/Contact'));
const InNews = lazy(() => import('./pages/InNews'));

// Loading fallback
// const PageLoader = () => (
//   <div style={{
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FAF8F5',
//   }}>
//     <div style={{ textAlign: 'center' }}>
//       <div style={{ fontSize: '2rem', marginBottom: '16px' }}>☕</div>
//       <p style={{ color: '#C5A480', fontWeight: 500 }}>Loading...</p>
//     </div>
//   </div>
// );

const App = () => (
  <BrowserRouter>
    <Suspense >
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-menu" element={<Menu />} />
        <Route path="/menu" element={<NewMenu />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/innews" element={<InNews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
