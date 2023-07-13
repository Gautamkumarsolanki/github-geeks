const types = {
  LOADING: "setLoading",
  SET_DEFAULT_USER_LIST: "setDefaultUserList",
  SET_SEARCH_USER_LIST:"setSearchUserList",
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
        defaultUserList: [],
        searchUserList:[]
      };
    case types.SET_DEFAULT_USER_LIST:
      return {
        ...state,
        defaultUserList: action.payload,
        searchUserList:[],
        loading:false
      };
    case types.SET_USER_INFO:
      return {
        ...state,
        userData: action.payload.userinfo,
        reposList: action.payload.repos,
        loading: false,
      };
    case types.SET_SEARCH_USER_LIST:
      return {
        ...state,
        searchUserList:action.payload,
        loading:false,
        defaultUserList:[]
      }
    default:
      return state;
  }
}
