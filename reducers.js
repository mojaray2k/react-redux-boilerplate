// Users
const initialUserState = {
  lastUpdated: 0,
  info : {
    name: '',
    uid: '',
    avatar: ''
  }
}

function user (state = initialUserState, action){
  switch(action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      }
    default:
      return state
  }
}

const initialUsersState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
}

function users (state = initialUsersState, action) {
  switch (action.type) {
    case AUTH_USER :
    /**
     * Alternative to Object.assign is Object.spread
     * return Object.assign({}, state, {
     *   isAuthd: true,
     *   authedId: action.uid
     * })
     */
      
     return {
       ...state,
       isAuthd: true,
       authedId: action.uid
     }
     case UNAUTH_USER :
      return {
        ...state,
        isAuthd: false,
        authedId: ''
      }
    case FETCHING_USER :
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USER_FAILURE :
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_USER_SUCCESS :
      return action.user === null
        ? {
          ...state,
          error: '',
          isFetching: false
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action)
        }
      default :
        return state
  }
}