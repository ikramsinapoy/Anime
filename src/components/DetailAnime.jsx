import React from 'react'
import { PosterImg, TopBox, Wrapper } from '../styles/DetailPage.styled';
import UserRating from './UserRating';

function DetailAnime({ synopsis, canonicalTitle, titles, posterImage, userCount, averageRating }) {
  const { en_jp } = titles || {}
  const { en } = titles || {}
  const { original } =  posterImage || {}

  return (
    <div>
      <Wrapper>
        <PosterImg alt='title' src={original}/>  
        <div>
          <TopBox>
            <div>
              <h2>{en_jp === undefined? canonicalTitle : en_jp}</h2>
              <h3>{en === undefined? " " : en}</h3>
            </div>

            <UserRating userCount={userCount} averageRating={averageRating}/>
          </TopBox>
              
          <h4>Synopsis</h4>
          <p>{synopsis}</p>
        </div>
      </Wrapper>
    </div>
  )
}

export default DetailAnime