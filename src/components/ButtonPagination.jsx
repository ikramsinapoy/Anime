import React from 'react'
import { Button, ButtonWrapper } from '../styles/HomePage.styled'

function ButtonPagination({ handlePrevClick, handleNextClick, prevLink, nextLink }) {
  return (
    <ButtonWrapper>
        <div>
            <Button onClick={handlePrevClick} disabled={!prevLink}>Previous</Button>
            <Button onClick={handleNextClick} disabled={!nextLink}>Next</Button>
        </div>
        {/* <button onClick={handleFirstClick}>First</button> */}
        
        {/* <button onClick={handleLastClick}>Last</button> */}
    </ButtonWrapper>
  )
}

export default ButtonPagination