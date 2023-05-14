import React from 'react'
import { RatingBox, RatingText, ScoreText } from '../styles/DetailPage.styled'

function UserRating({ averageRating, userCount }) {
  return (
    <div>
      <RatingBox>
          <ScoreText>SCORE</ScoreText>
          <RatingText>{averageRating === null? "-" : averageRating}</RatingText>
          <p>{userCount} users</p>
      </RatingBox>
    </div>
  )
}

export default UserRating