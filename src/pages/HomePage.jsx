import React, { useEffect, useState } from 'react'
import { Axios } from '../utils/api';
import axios from "axios";
import { Container } from '../styles/HomePage.styled';
import ListAnime from '../components/ListAnime';
import ButtonPagination from '../components/ButtonPagination';

const config = {
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  }
}
function HomePage() {
    const [anime, setAnime] = useState([]);
    const [prevLink, setPrevLink] = useState(null);
    const [nextLink, setNextLink] = useState(null);

    const fetchAnime = async () => {
        await Axios.get(`/anime?page[limit]=10&page[offset]=0`).then((resp) => {
          // console.log("data: ",resp.data)
            setAnime(resp.data.data);
            setPrevLink(resp.data.links.prev);
            setNextLink(resp.data.links.next);
            // setFirstLink(resp.data.links.first);
            // setLastLink(resp.data.links.last);
        })
        
    }
    // console.log(prevLink)
    // const handleFirstClick = async () => {
    //   await axios.get(firstLink, config).then((resp) => {
    //     setAnime(resp.data.data);
    //     setPrevLink(resp.data.links.prev);
    //     setNextLink(resp.data.links.next);
    //     setFirstLink(resp.data.links.first);
    //     setLastLink(resp.data.links.last);
    //   })
    // }

    const handlePrevClick = async () => {
      await axios.get(prevLink, config).then((resp) => {
        setAnime(resp.data.data);
        setPrevLink(resp.data.links.prev);
        setNextLink(resp.data.links.next);
        // setFirstLink(resp.data.links.first);
        // setLastLink(resp.data.links.last);
      })
      localStorage.setItem("currentPage", prevLink)
    }

    const handleNextClick = async () => {
      await axios.get(nextLink, config).then((resp) => {
        setAnime(resp.data.data);
        setPrevLink(resp.data.links.prev);
        setNextLink(resp.data.links.next);
        // setFirstLink(resp.data.links.first);
        // setLastLink(resp.data.links.last);
      })
      localStorage.setItem("currentPage", nextLink)
    }

    // const handleLastClick = async () => {
    //   await axios.get(lastLink, config).then((resp) => {
    //     setAnime(resp.data.data);
    //     setPrevLink(resp.data.links.prev);
    //     setNextLink(resp.data.links.next);
    //     setFirstLink(resp.data.links.first);
    //     setLastLink(resp.data.links.last);
    //   })
    // }
    // console.log("current page", currentPage)
    useEffect(() => {
      const currentPage = localStorage.getItem("currentPage")
      // console.log('tes masuk useEffect', currentPage)

      if (currentPage === '') {
        fetchAnime();
      } else {
        const fetchCurrentPage = async () => {
          await axios.get(currentPage, config).then((resp) => {
            console.log(resp.data)
            setAnime(resp.data.data);
            setPrevLink(resp.data.links.prev);
            setNextLink(resp.data.links.next);
            // setFirstLink(resp.data.links.first);
            // setLastLink(resp.data.links.last);
          })
          localStorage.setItem("currentPage", currentPage)
        }

        fetchCurrentPage()
      }
    }, [])

    // useEffect(() => {
    //   localStorage.setItem('currentPage', currentPage)
    // }, [currentPage])

    // console.log(anime)
    // console.log(anime.links.n)
  return (
    <div>
      <Container>
        <ListAnime anime={anime}/>
        <ButtonPagination handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} prevLink={prevLink} nextLink={nextLink}/>
      </Container>
    </div>
  )
}

export default HomePage