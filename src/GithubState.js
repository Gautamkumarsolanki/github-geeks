import React, { useReducer, useEffect } from "react";
import gitContext from "./githubContext";
import axios from "axios";
import reducer from "./GithubReducer";
const types = {
  LOADING: "setLoading",
  SET_DEFAULT_USER_LIST: "setDefaultUserList",
  SET_SEARCH_USER_LIST: "setSearchUserList",
  SET_USER_INFO: "setUserInfo",
  CLEAR: "clearData",
  ALERT: "setAlert",
};
function GithubState({ children }) {
  const stateData = {
    alert: false,
    loading: false,
    defaultUserList: [],
    searchUserList: [],
    reposList: [],
    userData: null,
  };
  async function func() {
    let arr = await axios
      .get("https://api.github.com/users")
      .then((response) => response.data);
    dispatch({ type: types.SET_DEFAULT_USER_LIST, payload: arr });
  }
  useEffect(() => {
    setLoading();
    func();
  }, []);
  const searchUser = async (text) => {
    setLoading();
    let arr = await axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => response.data)
      .then((data) => data.items);
    dispatch({ type: types.SET_SEARCH_USER_LIST, payload: arr });
  };

  const oneUser = async (text) => {
    setLoading();
    let userInfo = await axios.get(
      `https://api.github.com/users/${text}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    let listRepos = await axios.get(
      `https://api.github.com/users/${text}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: types.SET_USER_INFO,
      payload: { userinfo: userInfo.data, repos: listRepos.data },
    });
  };
  const clearData = () => {
    dispatch({ type: types.CLEAR });
  };
  const alertUser = () => {
    dispatch({ type: types.ALERT });
    setTimeout(() => {
      dispatch({ type: types.ALERT });
    }, 2000);
  };
  const setLoading = () => {
    dispatch({ type: types.LOADING })};
  const [currentState, dispatch] = useReducer(reducer, stateData);
  return (
    <gitContext.Provider
      value={{
        ...currentState,
        searchUser,
        oneUser,
        clearData,
        alertUser,
        dispatch,
      }}
    >
      {children}
    </gitContext.Provider>
  );
}
export default GithubState;
