import React from 'react'
import axios from '@/data/axios'
import Row from '@/components/Row'
import endpoints from '@/data/endpoints'
import Banner from '@/components/Banner'
function MainPage() {
  return (
    <>
        <Banner/>
        <Row className="text-lg" title="Netflix Originals" fetchUrl={endpoints.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending" fetchUrl={endpoints.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={endpoints.fetchTopRated}/>
        <Row title="Actions Movies" fetchUrl={endpoints.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={endpoints.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={endpoints.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={endpoints.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={endpoints.fetchDocumentaries}/>
    </>
  )
}

export default MainPage