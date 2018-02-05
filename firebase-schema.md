# The Process of Create a Schmea for a React/Redux Applicaitons

## 1. Keep the schema shallow

## 2. Repeat Data is Ok

## 3. Pages/Views Setup

* **Home**
  * All Ducks
* **Profile**
  * User Info
  * Users Ducks
* **Replies**
  * Specific Duck
  * Ducks Replies

## 4. Endpoints

* /users
  * uid
    * name
    * uid
    * avatar
* /ducks
  * duckId
    * avatar
    * duckId
    * name
    * text
    * timestamp
    * uid
* /likeCount
  * duckId
* /usersDucks
  * uid
    * duckId
      * avatar
      * duckId
      * name
      * text
      * timestamp
      * uid
* /replies
  * duckId
    * replyId
      * name
      * comment
      * uid
      * timestamp
      * avatar
* /userLikes
  * uid
    * duckId