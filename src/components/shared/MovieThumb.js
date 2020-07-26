import React from "react"
import { Link } from "@reach/router"
import { StyledMovieThumb } from "../../styles/StyledMovieThumb"

const MovieThumb = ({ clickable, image, movieId, movieName }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`./${movieId}`}>
          <img src={image} className="clicable" alt="mpviet" />
        </Link>
      ) : (
        <img src={image} alt="fdf" />
      )}
    </StyledMovieThumb>
  )
}

export default MovieThumb
