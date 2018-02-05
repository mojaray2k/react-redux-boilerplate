// Users
function users (state, action) {
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
  }
}