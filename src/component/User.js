import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import gitContext from "../githubContext";
import Repos from "./Repos";
import Spinner from "./Spinner";
export default function User() {
  const { loginId } = useParams();
  const values=useContext(gitContext)
  useEffect(() => {
    values.oneUser(loginId);
    // eslint-disable-next-line
  }, []);
  if (values.loading || !values.userData) {
    return <Spinner />;
  } else {
    const {
      login,
      avatar_url,
      bio,
      company,
      created_at,
      hireable,
      name,
      type,
      location,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
    } = values.userData;
    return (
      <Fragment>
        <div className="container row justify-content-md-center">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={avatar_url} alt="....." />
            <div className="card-body">
              <h5 className="card-title">
                <strong>{login}</strong>
              </h5>
              <p className="card-text">{bio}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                name:-{name ? name : "Not mentioned"}
              </li>
              <li className="list-group-item">
                Hireable:-{hireable ? hireable : "False"}
              </li>
              <li className="list-group-item">Created-At:-{created_at}</li>
              <li className="list-group-item">
                Location:-{location ? location : "Somewhere on earth"}
              </li>
              <li className="list-group-item">
                Type:-{type ? type : "Not mentioned"}
              </li>
              <li className="list-group-item">
                Company:-{company ? company : "Not mentioned"}
              </li>
              <li className="list-group-item">
                <button className="btn btn-primary btn-sm mx-1">
                  followers:{` ${followers}`}
                </button>
                <button className="btn btn-success btn-sm">
                  following:{` ${following}`}{" "}
                </button>
              </li>
              <li className="list-group-item">
                <button className="btn btn-primary btn-sm mx-1">
                  repos:{` ${public_repos}`}
                </button>
                <button className="btn btn-success btn-sm">
                  gists:{` ${public_gists}`}{" "}
                </button>
              </li>
            </ul>
            <div className="card-body">
              <a href="/" className="card-link">
                Card link
              </a>
              <a href={html_url} className="card-link">
                Github Link
              </a>
            </div>
          </div>
          {values.reposList.map((ele) => {
            return <Repos key={ele.id} ele={ele} />;
          })}
        </div>
      </Fragment>
    );
  }
}
