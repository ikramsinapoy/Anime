import React from 'react'
import { Card, Wrapper } from '../styles/HomePage.styled'
import { Link } from 'react-router-dom'

function ListAnime({ anime }) {
  return (
    <Wrapper>
        {anime?.map((item) => (
            <Card key={item.id}>
              <img src={item.attributes.coverImage} alt='cover'/>
              <div>
                <Link to={`/detail-anime/${item.id}`}><p>{item.attributes.titles.en_jp}</p></Link>
                <p>{item.attributes.titles.en}</p>
              </div>
            </Card>
        ))}
    </Wrapper>
  )
}

export default ListAnime