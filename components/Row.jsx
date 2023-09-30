import React,{useState,useEffect} from 'react'
import axios from '@/data/axios'
import {IMAGE_BASE_URL} from '@/data/endpoints'
import styles from '../styles/Row.module.css'
import Image from 'next/image'
import Link from 'next/link'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([])
    const [trailerUrl,setTrailerUrl] = useState(false)
    const setLaunchedTrailer=(movie)=>{
        console.log("movie-->",movie.item.original_title)
        // alert("movie::",movie.item.original_name)
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie.item?.original_title || '')
            .then((url)=>{
                // print("==========>>",url)
                // alert(url)
                const paramURL = new URLSearchParams(new URL(url).search)
                console.log("VIDEO ID:", paramURL.get("v"));
                setTrailerUrl(paramURL.get("v"))
            }).catch((error)=> console.log(error))
        }
    }
    const opts = {
        height:"400",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    } 
    useEffect(()=>{
        async function fetchMovies(){
        try{
            const res = await axios.get(fetchUrl)
            console.table(res.data.results)
            setMovies(res.data.results)
        }
        catch
        {
            console.log("Error is fetching movies")
        }
    }
    fetchMovies();
},[fetchUrl]);
  return (
    <div className={`${styles.row}`}>
        <div className={`${styles.row__title}`}>
            {title}
        </div>
        <div className={`${styles.row__posters}`}>

        {movies.map((item,index)=>(
            <Image 
                key={item.id}
                onClick={()=>setLaunchedTrailer({item})}
                className={`${styles.row__poster_image} ${isLargeRow && styles.row__poster_imageLarge}`} 
                src={`${IMAGE_BASE_URL}${isLargeRow?item.poster_path:item.backdrop_path}`} width={200} height={200} alt="" unoptimized/>
            
        ))}
        
        
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}  
    </div>
  )
}

export default Row