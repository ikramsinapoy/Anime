import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'
import GlobalStyles from '../styles/Global'
import Footer from './Footer'
import { IconHome, Navbar } from '../styles/Navigation.styled'
import { AiFillHome } from 'react-icons/ai';

function AnimeApp() {
  return (
    <div>
      <GlobalStyles/>
      <header>
        <Navbar>
          <Link to='/'><h1>Animeku</h1></Link>
          <Link to='/'><IconHome><AiFillHome/></IconHome></Link>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail-anime/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default AnimeApp