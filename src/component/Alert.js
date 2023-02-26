import React, { useContext } from 'react'
import gitContext from '../githubContext'
export default function Alert(props) {
  const values=useContext(gitContext);
  return (
    values.alert && <div className="alert alert-warning" role="alert">
    Please Enter some valid data , or get lost!!!!!!
  </div>
  )
}
