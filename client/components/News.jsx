import React from 'react'


class News extends React.Component {

  state = {
    fname: '',
    lname: '',
    email: '',
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log('submit')
  }
  handleChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  render() {
    return (
      <div class="formDiv">
        <label for="signUp" class="formLabel">sign up to our newsletter for updates<br></br> on upcoming games and apps</label>
        <form onSubmit={this.handleSubmit} class="newsletterForm">
          <label for="fname" class="formLabel">First name:</label>
          <input type="text" id="fname" name="fname" onChange={this.handleChange}/>
          <br></br>
          <label for="lname" class="formLabel">Last name:</label>
          <input type="text" id="lname" name="lname"  onChange={this.handleChange}/>
          <br></br>
          <label for="email" class="formLabel">Email:</label>
          <input type="text" id="lname" name="lname" onChange={this.handleChange}/>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>

    <h3>Welcome {this.state.fname}</h3>
      </div>
    )
  }
}

export default News