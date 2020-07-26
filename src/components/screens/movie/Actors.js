/* eslint-disable react/prop-types */
import React from "react"
import NoImage from "../../../images/no_image.jpg"
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config"
import { StyledActor } from "../../../styles/StyledActor"

const Actors = ({ actor }) => {
  return (
    <StyledActor>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="actor"
      />
      <span className="actor-name">{actor.name}</span>
      <span className="actor-charachter">{actor.charachter}</span>
    </StyledActor>
  )
}

export default Actors
