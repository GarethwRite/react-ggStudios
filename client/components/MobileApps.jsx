import React from 'react'
import Footer from './Footer'

class MobileApps extends React.Component {

  render() {
    return (

      <>
        <div className='flex'>
          
            <div className='adContainerUl'>
            <img src="../images/covid secondwave ad.png" alt="ad" className='AppAds' />
          <h4 className='appInfo'>Covid Secondwave:<br></br> is a fruit ninja style game where you will fight off
          those terrible covid-19 cells to protect all your fellow humans</h4>
            </div>
          
            <div className='adContainerUl' >
            <img src="../images/kea.jpg" alt="ad" className='AppAds' />
          <h4 className='appInfo'>Cheeky Kea's:<br></br> A fun side scroller where you play as a cheeky kea try to gather as much
          rubber and shinny objects you can, but watch out for air obstacles and people you steal from</h4>
            </div>
          
        </div>
        <div>
          <Footer />
        </div>
      </>
    )
  }
}

export default MobileApps