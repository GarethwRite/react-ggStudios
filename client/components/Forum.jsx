import React from 'react'
import { CDPRTweets, EATweets, BethesdaTweets } from '../api';
import Footer from './Footer'

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
      <div >
        <h2 className='welcome'>The Competition</h2>
        <h3 className='welcome'>See what our competitiors are upto</h3>
        <div className='tweetMainContainer'>

        <div className='tweetdata'>
          <ul className='tweetContainer'>
          <h3>CD Projekt Red</h3>
            {this.state.CDPRData.map((tweet, i) => {
              return <li className='tweets'>{tweet.date}: <br />{tweet.text}</li>;
            })}
          </ul>
        </div>

        <div className='tweetdata'>
          <ul className='tweetContainer'>
          <h3>EA Games</h3>
            {this.state.EAData.map((tweet, i) => {
              return <li className='tweets'>{tweet.date}: <br />{tweet.text}</li>;
            })}
          </ul>
        </div>

        <div className='tweetdata'>
          <ul className='tweetContainer'>
          <h3>Bethesda Studios</h3>
            {this.state.BethesdaData.map((tweet, i) => {
              return <li className='tweets'>{tweet.date}: <br/>{tweet.text}</li>;
            })}
          </ul>
        </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>

    )
  }
}

export default Forum