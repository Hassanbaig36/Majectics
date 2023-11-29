import React, { Component } from 'react'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
export default class Test extends Component {
  render() {
    return (
      <div className='test'>
        <Roll left>
        <h4 className='testh4'>WHAT DRIVES US</h4>
        </Roll>
        <Fade bottom big>
        <p className='testp'>No one phrase it better than Marc Anthony, who said,If you do what you love, you will never work a day in your life <br />Thats why we don’t just have a team of skilled professionals but people who also deeply care about their work. We live and breathe design like its air because we are passionate about what we do and the client. For us, a successful project gives results but is also a respectful collaboration between the clients and us. Our aim is to help businesses grow and reach their best potential. We understand the cutthroat competitiveness of the market for businesses in the present times, and thats why we use the best approaches and practices to ensure that we stay caught up on those dream results and customer satisfaction.</p>
        </Fade>
        <style jsx>{`
      .test {
          text-align: center;
        margin: 50px;
    
  
      }
      .testh4{
          background: -webkit-linear-gradient(360deg, var(--bg-color-1) 38%, var(--bg-color-2) 100%, var(--bg-color-1)100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--heading-font);
      }
      .testp{
        color:#000!important;
      }
      
    `}</style>
      </div>
    )
  }
}
