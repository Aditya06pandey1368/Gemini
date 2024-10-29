import React from 'react'
import './Main.css'

const Main = (props) => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src="https://as2.ftcdn.net/v2/jpg/05/74/96/63/1000_F_574966309_U2cCzbX24S7IiYiumMSYKvIDqO11ROLu.jpg" alt="" width={65}/>
      </div>
      <div className="main-container">
      {props.answer ? <pre>{props.answer}</pre>:<div className="middle">
        <div className="greet">
          <p><span>Hello, Aditya.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src="https://static-00.iconduck.com/assets.00/compass-icon-512x512-s9cq2sum.png" alt="" />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src="https://static-00.iconduck.com/assets.00/compass-icon-512x512-s9cq2sum.png" alt="" />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src="https://static-00.iconduck.com/assets.00/compass-icon-512x512-s9cq2sum.png" alt="" />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src="https://static-00.iconduck.com/assets.00/compass-icon-512x512-s9cq2sum.png" alt="" />
          </div>
        </div>
        </div>
}
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" value={props.question} onChange={(e)=>{props.setquestion(e.target.value)}} placeholder='Enter a promt here'/>
            <div>
              <img src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" alt="" />
              <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png" alt="" />
              <img src="https://static-00.iconduck.com/assets.00/send-icon-2048x1863-u8j8xnb6.png" onClick={props.generateAns} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double checkits responses.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Main;