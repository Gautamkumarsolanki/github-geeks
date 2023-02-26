import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Useritem(props) {
  const { login, avatar_url,} = props.user;
  return (
    <Fragment>
      <div className="card mx-3 my-3" style={{ width: "18rem" }}>
        <img src={avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link className="btn btn-primary" to={`user/${login}`}>See Profile</Link>
        </div>
      </div>
    </Fragment>
  );
}
