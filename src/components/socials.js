import * as React from "react"

import "../styles/animations.css"

const SocialLinks = () => (
   <section className="social-links">
      <h2 className="subtle-heading">me</h2>
      <ul className="list-links">
         <li className="list-link"><span role="img">🐤</span> <a className="slide-animation opposite" target="_blank" rel="noreferrer" href="https://twitter.com/kyleancheta_" rel="noopener">twitter</a><span className="sneaky-note"> (a toxic cesspool but i just keep to my corner)</span></li>
         <li className="list-link"><span role="img">📷</span> <a className="slide-animation opposite" target="_blank" rel="noreferrer" href="https://instagram.com/kyleancheta" rel="noopener">instagram</a><span className="sneaky-note"> (see what i look like)</span></li>
         <li className="list-link"><span role="img">🎥</span> <a className="slide-animation opposite" target="_blank" rel="noreferrer" href="https://www.youtube.com/user/KyleAncheta" rel="noopener">youtube</a><span className="sneaky-note"> (i make one video a year - haven't met this year's quota yet)</span></li>
         <li className="list-link"><span role="img">🎨</span> <a className="slide-animation opposite" target="_blank" rel="noreferrer" href="https://polywork.com/kyleancheta" rel="noopener">polywork</a><span className="sneaky-note"> (yeah, i'm kinda a beta user)</span></li>
         <li className="list-link"><span role="img">✉️</span> <a className="slide-animation opposite" href="mailto:kyleancheta@live.com?Subject=Hello%20there">email</a><span className="sneaky-note"> (if you'd like to connect; coffee's on me)</span></li>
      </ul>
   </section>
)

export default SocialLinks
