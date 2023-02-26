const types = {
  LOADING: "setLoading",
  SET_USER_LIST: "setUserList",
  SET_USER_INFO: "setUserInfo",
  CLEAR: "clearData",
  ALERT: "setAlert",
};

export default function reducer(state, action) {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: state.loading ? false : true,
      };
    case types.ALERT:
      return {
        ...state,
        alert: state.alert ? false : true,
      };
    case types.CLEAR:
      return {
        ...state,
        userList: [],
      };
    case types.SET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
        loading: false,
      };
    case types.SET_USER_INFO:
      return {
        ...state,
        userData: action.payload.userinfo,
        reposList: action.payload.repos,
        loading: false,
      };
    default:
      return state;
  }
}
