import React from 'react'


class MobileApps extends React.Component {

  render() {
    return (

      <>
        <div className='flex'>
          <div className='adContainer'>
            <img src="../images/covid secondwave ad.png" alt="ad" className='AppAds' />
            
          </div>
          <div className='adContainer2'>
            <img src="../images/kea.jpg" alt="ad" className='AppAds' />
          </div>
          <div className='adContainer3'>
            <img src="../images/covid secondwave ad.png" alt="ad" className='AppAds' />
          </div>
        </div>
        <div className='flex1'>
          <h4 className='appInfo'>Covid Secondwave:<br></br> is a fruit ninja style game where you will fight off
          those terrible covid-19 cells to protect all your fellow humans</h4>
          <h4 className='appInfo'>Cheeky Kea's:<br></br> A fun side scroller where you play as a cheeky kea try to gather as much
          rubber and shinny objects you can, but watch out for air obstacles and people you steal from</h4>
          <h4 className='appInfo'>Covid Secondwave is a fruit ninja style game where you will fight off
          those terrible covid-19 cells to protect all your fellow humans</h4>
        </div>
      </>
    )
  }
}

export default MobileApps