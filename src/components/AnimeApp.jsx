import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'
import GlobalStyles from '../styles/Global'

function AnimeApp() {
  return (
    <div className="app-container">
          <GlobalStyles/>
          <header className='contact-app__header'>
            <h1><Link to='/'>Mangaku</Link></h1>
            {/* <Navigation logout={this.onLogout} name={this.state.authedUser.name}/> */}
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detail-anime/:id" element={<DetailPage />} />
              {/* <Route path="/notes/new" element={<AddPage />}/>
              <Route path="/notes/:id" element={<DetailPage />}/>
              <Route path="/archive" element={<ArchivePage />}/> */}
            </Routes>
          </main>
        </div>
  )
}

export default AnimeApp