import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <Fragment>
        <h1>About</h1>
        <Link to="display">Display|</Link>
        <Link to="show">Show|</Link>
        <Link to="nice">nice</Link>
        <Outlet/>
    </Fragment>
  )
}
