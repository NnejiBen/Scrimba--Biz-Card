import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="https://i.postimg.cc/sgD7Wnvn/profile-picture.jpg" className="profile-picture" />
            <h1 className="info--name">Ben Nneji</h1>
            <h3 className="info--job-title">Frontend Developer</h3>
            <a href="https://techyben.com" target="_blank"><p className="info--website">techyben.com</p></a>
            <div className="button-container">
                <a href="mailto:hi@techyben.com" target="_blank"><button className="email-button">
                    <img src="https://i.postimg.cc/KjStgxML/mail-btn-icon.png" className="info--button-icon" />Email</button></a>
                <a href="https://www.linkedin.com/in/benjamin-nneji-a4372623a/" target="_blank"><button className="linkedin-button">
                    <img src="https://i.postimg.cc/dQr2ckb9/linkedin-btn-icon.png" className="info--button-icon" />LinkedIn</button></a>
            </div>
        </div>
    )
}
