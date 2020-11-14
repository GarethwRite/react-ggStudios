const request = require('superagent')
const express = require('express')
const { response } = require('../server')

const router = express.Router()


const serverURL = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
const recentCDPRURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=CDPROJEKTRED&count=20'
const recentBethesdaURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=BethesdaStudios&count=20'
const recentEAURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=EA&count=20'


const apiKey = 'TAxjpnbXhep19vE4xLZvNfJ6z'
const apiSecretKey = 'MasaXL01MgTthHACtcwHpdM8N1DL8P1SQDbbt9rDOWt85jt62W'
const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAE%2FsJgEAAAAArmyIvpSb1NRfMKJJpvDe5JnyIbg%3DCDu90Wt2hximmm5DjGbQlwiyXe51Np2ENTsdRU8ucO7PofQcqu'

router.get('/CDPR', (req, res) => {
  console.log('working??')
  return request 
    .get(recentCDPRURL)
    .set('Authorization', 'Bearer ' + bearerToken)
    .then(res => res.body)
    .then(data => res.json(data))
})

router.get('/Bethesda', (req, res) => {
  console.log('working??')
  return request 
    .get(recentBethesdaURL)
    .set('Authorization', 'Bearer ' + bearerToken)
    .then(res => res.body)
    .then(data => res.json(data))
})

router.get('/EA', (req, res) => {
  console.log('working??')
  return request 
    .get(recentEAURL)
    .set('Authorization', 'Bearer ' + bearerToken)
    .then(res => res.body)
    .then(data => res.json(data))
})


module.exports = router