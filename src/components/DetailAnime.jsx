import React from 'react'
import { PosterImg, TopBox, Wrapper } from '../styles/DetailPage.styled';
import UserRating from './UserRating';

function DetailAnime({ anime }) {
    console.log(anime)
  return (
    <div>
        <Wrapper>
            {/* <PosterImg alt='title' src={anime.attributes.posterImage.large}/>  
            <div>
            <TopBox>
                <div>
                <h2>{anime.attributes.titles.en_jp}</h2>
                <h3>{anime.attributes.titles.en}</h3>
                </div> */}

                <UserRating anime={anime}/>
            {/* </TopBox> */}
                
            <h4>Synopsis</h4>
            <p>{anime.synopsis}</p>
            {/* </div> */}
        </Wrapper>
        {/* <p>Coba</p> */}
    </div>
  )
}

export default DetailAnime