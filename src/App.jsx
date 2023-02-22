// import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from "./components";
// import style from "./style";
import { lazy, Suspense } from 'react';
const Loader = lazy(() => import('./components/Loader'))  // export default
const Learning = lazy(() => import('./components/Learning'))  // export default
const About = lazy(() => import('./components/About').then((module) => {
  return { default: module.AboutUs }
}))  // export const
// import Learning from './components/Learning';
// import Loader from './components/Loader';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";




const App = () => (
  // <div className="bg-primary w-full overflow-hidden">
  //   <div className={`${style.paddingX} ${style.flexCenter}`}>
  //     <div className={`${style.boxWidth}`}>
  //       <Navbar />
  //     </div>
  //   </div>
  //   <div className={`${style.flexCenter}`}>
  //     <div className={`${style.boxWidth}`}>
  //       <Hero />
  //     </div>
  //   </div>
  //   <div className={`${style.paddingX} ${style.flexCenter}`}>
  //     <div className={`${style.boxWidth}`}>
  //       <Stats />
  //       <Business />
  //       <Billing />
  //       <CardDeal />
  //       <Testimonials />x`
  //       <Clients />
  //       <CTA />
  //       <Footer />
  //     </div>
  //   </div>
  // </div>
  <Router>
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Loader />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </Router>

);

function NavWrapper() {
  return (
    <>
      <nav className="flex justify-between">
        <Link to='/' className='border border-slate-300 px-2 py-1 w-48 cursor-pointer rounded-md hover:bg-green-500 hover:text-white'>Loading spinner</Link>
        <Link to='/learning' className='border border-slate-300 px-2 py-1 w-48 cursor-pointer rounded-md hover:bg-green-500 hover:text-white'>Learning</Link>
        <Link to='/about' className='border border-slate-300 px-2 py-1 w-48 cursor-pointer rounded-md hover:bg-green-500 hover:text-white'>About</Link>
      </nav>
      <span className='flex justify-center mt-6 w-full max-w-3xl mx-auto'>
        <Suspense fallback={<h2>loading</h2>}>
          <Outlet />
        </Suspense>
      </span>
    </>
  )
}

export default App;