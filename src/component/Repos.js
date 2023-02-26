import React, { Fragment } from "react";

export default function Repos(props) {
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">{`${props.ele.name} `}</h6>
          <a className="btn btn-primary" href={props.ele.html_url} target="_blank" rel="noreferrer">visit Repo</a>
        </div>
      </div>
    </Fragment>
  );
}
