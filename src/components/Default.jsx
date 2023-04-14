import React from 'react'
import './Default.css'
import img1 from './imgs/Group.png'
import img2 from './imgs/actions-settings-desktop-jld6gct-svgrepo-com 1.png'
import img3 from './imgs/user-access-svgrepo-com 1.png'
import img4 from './imgs/report-svgrepo-com 1.png'
import img5 from './imgs/Group 12.png'
export default function Default() {
  return (
    <>
      <main>
        <ul>
            <li><img src={img1} alt="userS" /><span>Statistika</span></li>
            <li><img src={img2} alt="userS" /><span>Amallar</span></li>
            <li><img src={img3} alt="userS" /><span>Ruxsatlar</span></li>
            <li><img src={img4} alt="userS" /><span>Ruxsatlar</span></li>
            <li><img src={img5} alt="userS" /><span>Call-markaz</span></li>
        </ul>
      </main>
      
    </>
  )
}
