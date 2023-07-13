import React, { Fragment, useContext } from "react";
import Spinner from "./Spinner.js";
import Useritem from "./Useritem";
import gitContext from "../githubContext.js";
export default function Users(props) {
  const values=useContext(gitContext);
  console.log(values);
  if (values.loading) {
    return (<Spinner/>);
  }else{
    return (
      <Fragment>
        <div className="container my-3">
          <div className="container row">
            {values.defaultUserList.map((ele) => {
              return <Useritem user={ele} key={ele.id} />;
            })}
          </div>
        </div>
        <div className="container my-3">
          <div className="container row">
            {values.searchUserList.map((ele) => {
              return <Useritem user={ele} key={ele.id} />;
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
