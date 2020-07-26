/* eslint-disable react/prop-types */
import React, { useRef } from "react"
import FontAwesome from "react-fontawesome"
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../../styles/StyledSearchBar"

const SearchBar = ({ search, setSearchQuery }) => {
  const timeOut = useRef(null)

  const handleChange = (e) => {
    const { value } = e.target
    setSearchQuery(value)
    clearTimeout(timeOut.current)
    timeOut.current = setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      value && search(value)
    }, 600)
  }
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input type="text" placeholder="search" onChange={handleChange} />
      </StyledSearchBarContent>
    </StyledSearchBar>
  )
}

export default SearchBar
