import React from 'react'
import Footer from './Footer'

class Store extends React.Component{

render() {
  return (

      <>
        <div>
          <h1>Home Page</h1>
        </div>
        <div className='footerHome'>
          <Footer />
        </div>
      </>
    )
  }
}

export default Store