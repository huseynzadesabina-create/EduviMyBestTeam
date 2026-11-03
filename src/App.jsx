import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Learning from './components/Learning/Learning'
import Courses from './components/Courses/Courses'
import Lessons from './components/Lessons/Lessons'
import Collage from './components/Collage/Collage'
import Career from './components/Career/Career'
import Subscribe from './components/Subscribe/Subscribe'



const App = () => {
  return (
    <>
  <Header/>
  <Learning/>
  <Courses/>
  <Lessons/>
  <Collage/>
  <Career/>
  <Subscribe/>
  <Footer/>
    </>
  
   
  )
}

export default App