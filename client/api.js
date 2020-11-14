import request from 'superagent'

export function CDPRTweets(){
  return request
    .get('/api/v1/twiter/CDPR')
    .then(res => res.body)
}

export function EATweets(){
  return request
    .get('/api/v1/twiter/EA')
    .then(res => res.body)
}

export function BethesdaTweets(){
  return request
    .get('/api/v1/twiter/')
    .then(res => res.body)
}