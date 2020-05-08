import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => (
  <>
    <h1>About Page</h1>
    <Link to="/about" activeStyle={{color:'red'}}>About</Link>
    <Link to="/" >Home</Link>
  </>
)

export default AboutPage