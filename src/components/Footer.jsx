import React from 'react'
import { FooterNav } from '../styles/Navigation.styled'
import { MdCopyright } from 'react-icons/md';

function Footer() {
  return (
    <FooterNav>
        <p>Copyright <MdCopyright/> Muhammad Ikram Kaer Sinapoy</p>
    </FooterNav>
  )
}

export default Footer