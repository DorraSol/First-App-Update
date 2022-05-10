import React  from 'react';
import './style.css'
const Profile = () => {
    return (
        <div class="profile_skills">
        <div class="container">
            <div class="profile">
                <h2 class="profile-title"><span>My </span>Profile</h2>
                <ul class="profile-list">
                    <li class="profile-item">
                        <span>Name</span>
                       DORRA
                    </li>
                   
                    <li class="profile-item">
                        <span>Name</span>
                       LINA
                    </li>
                    <li class="profile-item">
                        <span>Name</span>
                       AZIZ
                    </li>
                   
                    <li class="profile-item">
                        <span>Website</span>
                        <span class="web"> <a href="http://www.dorra-sediri-soltani.com/" > Click Portfolio </a></span>
                    </li>
                </ul>
            </div>
            
            <div class="skills">
                <h2 class="skills-title">Some <span>skills</span></h2>
                <p class="skills-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </p>
                <div class="bar">
                    <span class="title">HTML</span>
                    <span class="perc">70%</span>
                    <div class="parent">
                        <span class="sp1"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">CSS3</span>
                    <span class="perc">70%</span>
                    <div class="parent">
                        <span class="sp2"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">Photoshop</span>
                    <span class="perc">70%</span>
                    <div class="parent">
                        <span class="sp3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Profile