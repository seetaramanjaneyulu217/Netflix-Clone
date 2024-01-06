import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movie_id }) => {

    const trailerVideo = useSelector(state => state.movies?.trailerVideo)

    // fetch movie trailer
    useMovieTrailer(movie_id)

    return (
        <div className='w-full'>
            <iframe 
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                frameBorder={0}
            >
            </iframe>
        </div>
    )
}

export default VideoBackground