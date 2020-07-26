/* eslint-disable react/jsx-fragments */
import React, { Fragment, useState, useEffect } from "react"
import HeroImage from "./HeroImage"
import LoadMore from "./LoadMore"
import Grid from "../layouts/Grid"
import MovieThumb from "../shared/MovieThumb"
import Spinner from "../shared/Spinner"
import SearchBar from "../shared/SearchBar"
import NoImage from "../../images/no_image.jpg"

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../config"
import { useHomeFetch } from "../../store/useHomeFetch"

const Home = () => {
  const [{ state, loading, error }, fetchMovie] = useHomeFetch()
  const [searchQuery, setSearchQuery] = useState("")
  console.log(state)
  const loadMoreMovie = () => {
    const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${
      state.currentPage + 1
    }`
    const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
      state.currentPage + 1
    }`

    const apiUrl = searchQuery ? searchEndpoint : popularEndpoint

    fetchMovie(apiUrl)
  }
  const searchMovies = (query) => {
    const searchUrl = `${API_URL}search/movie?api_key=${API_KEY}&query=${query}`
    fetchMovie(searchUrl)
  }

  useEffect(() => {
    if (searchQuery === "" && state.movies.length === 0) {
      fetchMovie(`${API_URL}movie/popular?api_key=${API_KEY}`)
    }
  })

  if (error) return <div>somthing wrong</div>

  return (
    <Fragment>
      {!searchQuery && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
            state.heroImage && state.heroImage.backdrop_path
          }`}
          title={state.heroImage && state.heroImage.original_title}
          text={state.heroImage && state.heroImage.overview}
        />
      )}
      <SearchBar search={searchMovies} setSearchQuery={setSearchQuery} />
      <Grid header={searchQuery ? "Search Result" : "Popular Movies"}>
        {state.movies.length > 0 ? (
          state.movies.map((movie) => (
            <MovieThumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              movieId={movie.id}
              movieName={movie.original_title}
            />
          ))
        ) : (
          <div>There is no results to show</div>
        )}
      </Grid>
      {loading && <Spinner />}
      {state.currentPage < state.totalPages && !loading && (
        <LoadMore text="load more" action={loadMoreMovie} />
      )}
    </Fragment>
  )
}

export default Home
