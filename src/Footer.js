import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
      <span className="name">
         Made by -{" "}
        <a href="https://www.linkedin.com/in/arushi-tailang-1a23001b0/" target="__blank">
          Pritesh and Prajeet
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      {/* <div className="iconContainer">
        <a href="https://www.linkedin.com/in/arushi-tailang-1a23001b0/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/arushi-tailang" target="__blank">
        <i class="fab fa-github fa-2x"></i>
        </a>
      </div> */}
    </div>
    )
}

export default Footer
