import React from 'react'
import { Card, Wrapper, TitleCard, ContenWrapper } from '../styles/HomePage.styled'
import { Link } from 'react-router-dom'

function ListAnime({ anime }) {
  return (
    <Wrapper>
        {anime?.map((item) => (
          <Card key={item.id}>
            <Link to={`/detail-anime/${item.id}`}>
            <img src={item.attributes.posterImage.original} alt='cover'/>
            <ContenWrapper>
                <TitleCard>
                  {item.attributes.titles.en_jp === undefined? item.attributes.canonicalTitle : item.attributes.titles.en_jp}
                </TitleCard>
                <p>{item.attributes.titles.en}</p>
            </ContenWrapper>
            </Link>
          </Card>
        ))}
    </Wrapper>
  )
}

export default ListAnime