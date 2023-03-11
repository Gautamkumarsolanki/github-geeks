import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import gitContext from "../githubContext";
export default function Search(props) {
  const [text, setText] = useState("");
  // const [show,setShow]=useState('none')
  const values=useContext(gitContext);
  return (
    <Fragment>
      <div className="container">
        <form className="form">
          <input
            className="form-control aria-label"
            id="name"
            type={"text"}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Search User"
            value={text}
            onKeyDown={(e)=>{
              if(e.key==='Enter')e.preventDefault();
            }}
          />
          <Link to={`users/${text}`} onClick={(e) => {
              if(!text.trim().length){
                // props.alert();
                values.alertUser();
              }else{
                // props.findUser(text);
                values.searchUser(text);
              }
              // e.preventDefault();
            }}
            
            type="submit"
            className="btn btn-success my-2"
          >
            Submit</Link>
          <button
            onClick={() => {
              setText("");
              // props.clear();
              values.clearData();
            }}
            style={{ display: 'inline-block' }}
            type="reset"
            className="btn btn-primary mx-3 my-2"
          >
            Clear
          </button>
        </form>
      </div>
    </Fragment>
  );
}
