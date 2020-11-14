import React from 'react'
import { CDPRTweets, EATweets, BethesdaTweets } from '../api.js';


//This section takes an api from twitter with big gaming studios to keep users 
//upto date on current news and events surrounding other gaming studios
//----------
//this section will also provide a chat system for people to cost inquiries 


class Forum extends React.Component {
  state = {
    CDPRData: [],
    EAData: [],
    BethesdaData: []
  }

  refreshCDPR = () => {
    CDPRTweets().then((data) => {
      data = data.map((data) => {
        return {
          text: data.text,
          date: data.created_at,
        }
      })
      this.setState({ CDPRData: data })
    })
  }

  refreshEA = () => {
    EATweets().then((data) => {
      data = data.map((data) => {
        return {
          text: data.text,
          date: data.created_at,
        }
      })
      this.setState({ EAData: data })
    })
  }

  refreshBethesda = () => {
    BethesdaTweets().then((data) => {
      data = data.map((data) => {
        return {
          text: data.text,
          date: data.created_at,
        }
      })
      this.setState({ BethesdaData: data })
    })
  }

  componentDidMount = () => {
    this.refreshCDPR()
    this.refreshEA()
    this.refreshBethesda()
  }

  render() {
    return (


      <div className="welcome">
        <h2 className='welcome'>The Competition</h2>
        <h3 className='welcome'>See what our competitiors are upto</h3>
        <div className='tweetContainer'>
        <div>
          <ul className='tweets1'>
            {this.state.CDPRData.map((tweet, i) => {
              return <li>{tweet.date}: <br />{tweet.text}</li>;
            })}
          </ul>
        </div>
        <div>
          <ul className='tweets2'>
            {this.state.EAData.map((tweet, i) => {
              return <li>{tweet.date}: <br />{tweet.text}</li>;
            })}
          </ul>
        </div>
        <div>
          <ul className='tweets3'>
            {this.state.BethesdaData.map((tweet, i) => {
              return <li>{tweet.date}: <br />{tweet.text}</li>;
            })}
          </ul>
        </div>
        </div>
      </div>

    )
  }
}

export default Forum