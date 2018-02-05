{
  users: {
    isAuthed
    isFetching
    error
    authedId
    uid: {
      lastUpdated
      info: {
        name,
        uid,
        avatar
      }
    }
  }
  model : {
    duck,
    isOpen
  }
  ducks: {
    isFetching
    error
    duckId: {
      lastUpdated
      info: {
        avatar,
        duckId,
        name,
        text,
        timestamp,
        uid
      }
    }
  }
  userDucks: {
    isFetching
    error
    uid: {      
      lastUpdated
      duckId: [duckId, duckId, duckId]
    }
  }
  likeCount: {
    duckId : 0
  }
  usersLikes : {
    duckId: true
  }
  replies: {
    isFetching,
    error
    duckId: {
      replies: {
        lastUpdated
        replyId: {
          name,
          comment,
          uid,
          timestamp,
          avatar
        }
      }
    }
  }
  listensers: {
    listensersId: true
  }
  feed: {
    isFetching,
    error,
    newDucksAvailable
    duckIdsToAdd: [duckId, duckId]
    duckIds: [duckId, duckId]
  }
}