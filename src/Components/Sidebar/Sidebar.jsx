import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)

  return (
    <div className='sidebar'>
      <div className="top">
        <img className='menu' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" width={35} alt="" onClick={() => setExtended(!extended)} />
        <div className="new-chat">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png" width={25} alt="" />
          {extended ? <p>New Chat &nbsp;</p> : null}
        </div>
        {extended ? <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src="https://static-00.iconduck.com/assets.00/message-icon-512x463-tqzmxrt7.png" width={25} alt="" />
            <p>What is react...</p>
          </div>
        </div> : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src="https://brandeps.com/icon-download/H/Help-icon-02.png" alt="" width={25} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-4/24/5064-512.png" alt="" width={25} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png" alt="" width={25} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
