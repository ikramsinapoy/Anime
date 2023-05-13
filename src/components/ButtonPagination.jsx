import React from 'react'
import { Button, CenterWrapper } from '../styles/HomePage.styled'

function ButtonPagination({ handlePrevClick, handleNextClick, handleFirstClick, handleLastClick, prevLink, nextLink }) {
  return (
    <CenterWrapper>
        <div>
            <Button onClick={handleFirstClick}>First</Button>
            <Button onClick={handlePrevClick} disabled={!prevLink}>Previous</Button>
            <Button onClick={handleNextClick} disabled={!nextLink}>Next</Button>
            <Button onClick={handleLastClick}>Last</Button>
        </div>
    </CenterWrapper>
  )
}

export default ButtonPagination