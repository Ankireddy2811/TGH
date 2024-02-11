import "./index.css"

const Header = ()=>(
    <div className="header-container">
            <div className="profile-container">
               <h1 className="heading-ele">Quotverse</h1>
            </div>
           
            <div className="profile-container home-container">
               <img src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1707536511/Vector_2_bnuis0.png" alt="home" className="home-image"/>
               <img src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1707536959/Likes_yg48eh.png" alt="likes" className="likes-image"/>
            </div>
           
            <div className="profile-container tags-container">
              <img src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1707537369/Hamburger_eprjxy.png" alt="hamburger"/>
            </div>
    </div>
)

export default Header