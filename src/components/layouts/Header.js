import React from "react"

import { Link } from "@reach/router"
import RMDBLogo from "../../images/reactMovie_logo.png"
import TMDBLogo from "../../images/tmdb_logo.svg"

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from "../../styles/StyledHeader"

const Header = () => {
  return (
    <StyledHeader className="header-content">
      <Link to="/MovieApp">
        <StyledRMDBLogo src={RMDBLogo} alt="logo1" />
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="logo2" />
    </StyledHeader>
  )
}

export default Header
