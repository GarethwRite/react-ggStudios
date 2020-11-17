import request from 'superagent'

export function CDPRTweets(){
  return request
    .get('/api/twitter/CDPR')
    .then(res => res.body)
}

export function EATweets(){
  return request
    .get('/api/twitter/EA')
    .then(res => res.body)
}

export function BethesdaTweets(){
  return request
    .get('/api/twitter/Bethesda')
    .then(res => res.body)
}