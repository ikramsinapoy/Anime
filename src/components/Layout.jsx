import React from 'react'
import NarutoImg from '../images/naruto.webp'
import { LayoutImg, WrapperLayout } from '../styles/HomePage.styled'

function Layout() {
  return (
    <WrapperLayout>
        <h1>A website dedicated to all things <span>anime</span>.</h1>
        <h1>Discover your must-watch <span>anime</span>.</h1>
        <LayoutImg src={NarutoImg} alt='Naruto'/>
    </WrapperLayout>
  )
}

export default Layout