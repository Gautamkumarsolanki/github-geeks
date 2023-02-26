import React, { Fragment, useContext } from "react";
import Spinner from "./Spinner.js";
import Useritem from "./Useritem";
import gitContext from "../githubContext.js";
export default function Users(props) {
  const values=useContext(gitContext);
  if (values.loading) {
    return (<Spinner/>);
  } else {  
    return (
      <Fragment>
        <div className="container my-3">
          <div className="container row">
            {values.userList.map((ele) => {
              return <Useritem user={ele} key={ele.id} />;
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}