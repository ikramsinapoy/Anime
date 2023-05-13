import React from 'react'
import { RatingBox, RatingText, ScoreText } from '../styles/DetailPage.styled'

function UserRating({ anime }) {
  return (
    <div>
        <RatingBox>
            <ScoreText>SCORE</ScoreText>
            <RatingText>{anime.averageRating === null? "-" : anime.averageRating}</RatingText>
            <p>{anime.userCount} users</p>
        </RatingBox>
    </div>
  )
}

export default UserRating