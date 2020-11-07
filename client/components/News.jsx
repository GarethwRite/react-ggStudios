import React from 'react'


class News extends React.Component {

  render() {
    return (
      <div class="formDiv">
        <label for="signUp" class="formLabel">sign up to our newsletter for updates<br></br> on upcoming games and apps</label>
        <form action="POST" class="newsletterForm">
          <label for="fname" class="formLabel">First name:</label>
          <input type="text" id="fname" name="fname"/>
          <br></br>
          <label for="lname" class="formLabel">Last name:</label>
          <input type="text" id="lname" name="lname" />
          <br></br>
          <label for="email" class="formLabel">Email:</label>
          <input type="text" id="lname" name="lname"/>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default News