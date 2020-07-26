/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react"
import Navigation from "./Navigation"
import MovieInfo from "./MovieInfo"
import MovieInfoBar from "./MovieInfoBar"
import Actors from "./Actors"
import Grid from "../../layouts/Grid"
import Spinner from "../../shared/Spinner"
import { useMovieFetch } from "../../../store/useMovieFetch"

const Movie = ({ movieId }) => {
  const [state, loading, error] = useMovieFetch(movieId)
  if (error) return <div>something went wrong</div>
  if (loading) return <Spinner />
  return (
    <Fragment>
      <Navigation movie={state.original_title} />
      <MovieInfo movie={state} />
      <MovieInfoBar
        time={state.runtime}
        budget={state.budget}
        revenue={state.revenue}
      />
      <Grid header="Actors">
        {state.actors.map((actor) => (
          <Actors key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </Fragment>
  )
}

export default Movie
