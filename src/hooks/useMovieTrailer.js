import { addTrailerVideo } from '../utils/moviesSlice'
import { options } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const useMovieTrailer = (movie_id) => {

    const dispatch = useDispatch()
    
    const fetchMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options)
        const json = await data.json()
        const filteredData = json.results.filter(part => part.type === 'Trailer' && part.name === 'Official Trailer')
        const trailer = filteredData.length ? filteredData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        fetchMovieTrailer()
    }, [])
}

export default useMovieTrailer