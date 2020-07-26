/* eslint-disable react/prop-types */
import React from "react"
import { StyledLoadMoreBtn } from "../../styles/StyledLoadMoreBtn"

const LoadMore = ({ text, action }) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={action}>
      {text}
    </StyledLoadMoreBtn>
  )
}

export default LoadMore
