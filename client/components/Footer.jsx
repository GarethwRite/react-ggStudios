import React from 'react'


class Footer extends React.Component {

  render() {
    return (
      <div class="footer">
        <p class="followUs">follow us on</p>
        <div class="row">
          <div class="column">
            <a href="https://www.facebook.com/"><img src="/images/iconfinder_1_social_2609541.png" alt="faceBook" /></a>
          </div>
          <div class="column">
            <a href="https://www.instagram.com/">
              <img src="/images/iconfinder_social_media_applications_3-instagram_4102579.png" alt="instagram" /></a>
          </div>
          <div class="column">
            <a href="https://www.twitter.com/">
              <img src="/images/iconfinder_twitter_386736.png" alt="twitter" /></a>
          </div>
          <div class="column">
            <a href="https://www.linkedin.com/">
              <img src="/images/iconfinder_social_media_applications_14-linkedin_4102586.png" alt="linkedin" />
            </a>
          </div>
        </div>
          <p class="contactInfo">Contact info:<br></br>GGStudios@gmail.com</p>
          <p class="copyright">Ⓒ Copyright 2020<br></br>All rights reserved</p>
      </div>
    )
  }
}

export default Footer