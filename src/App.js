// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './component/Home';
import Destinations from './Pages/Destinations';
import Passion from './Pages/Passion';
import Footer from './component/Footer';
import Packages from './Pages/Packages';
import Testimonial from './Pages/Testimonial';
import Blog from './Pages/Blog';
import Conscious from './Pages/Conscious';
import WBlog from './Pages/WBlog';
import Affiliation from './component/Affiliation';
import PackageDetail from './Pages/PackageDetail';
import TestimonialDetail from './Pages/TestimonialDetail';
import TravelBlogDetail from './Pages/TravelBlogDetail';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations/' element={<Destinations/>}/>
        <Route path="/destinations/:destination_id" element={<Destinations/>} />
        <Route path='/passion/' element={<Passion/>}/>
        <Route path='/passion/:passion_id' element={<Passion/>}/>
        <Route path='/packages' element={<Packages/>}/>
        {/* <Route path='/packages/:package_id' element={<PackageDetail/>}/> */}
        <Route path='/packages' element={<PackageDetail/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/conscious-travel' element={<Conscious/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/write-a-blog' element={<WBlog/>}/>
        <Route path='/testimonialDetail' element={<TestimonialDetail/>}/>
        <Route path='/travelblogdetail' element={<TravelBlogDetail/>}/>
      </Routes>
      <Affiliation/>
      <Footer/>
    </Router>
  );
}

export default App;
