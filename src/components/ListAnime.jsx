import React from 'react'
import { Card, Wrapper, TitleCard } from '../styles/HomePage.styled'
import { Link } from 'react-router-dom'

function ListAnime({ anime }) {
  return (
    <Wrapper>
        {anime?.map((item) => (
            <Card key={item.id}>
              {/* <img src={item.attributes.coverImage} alt='cover'/> */}
              <div>
                {/* <div> */}
                  <Link to={`/detail-anime/${item.id}`}><TitleCard>{item.attributes.titles.en_jp}</TitleCard></Link>
                  <p>{item.attributes.titles.en}</p>
                {/* </div> */}
              </div>
            </Card>
        ))}
    </Wrapper>
  )
}

export default ListAnime