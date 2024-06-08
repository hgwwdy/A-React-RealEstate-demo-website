import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css';
import Companies from './components/companies/companies'
import Residencies from './components/residencies/residencies'
import Value from './components/value/value'
import Contact from './components/contact/contact'
import GetStarted from './components/getStarted/getStarted';
import Footer from './components/footer/footer'
function App() {
  return (
   <div className="App">
    <div>
      <div className="white-gradient"/>
 <Header />
 <Hero />
    </div>
    <Companies/>
    <Residencies />
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
     </div>  
  )
}

export default App;
