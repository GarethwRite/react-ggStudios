import React from 'react'
import Footer from './Footer'

class Home extends React.Component{

render() {
  return (

      <>
        <div className='welcomeDiv'>
         <h1 className='welcome'>Award-Winning NZ Game and Mobile Application Studio </h1>
         <h2 className='welcomeH2'>One day in the near future...Hopefully</h2>
        </div>
        <div className='footerHome'>
          <Footer />
        </div>
      </>
    )
  }
}

export default Home