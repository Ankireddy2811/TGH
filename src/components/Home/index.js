import {Component} from "react"
import Header from "../Header"
import ProfileData from "../ProfileData"
import Quotes  from "../Quotes"
// import Tags from "../Tags"
import "./index.css"
import Tags from "../Tags"

class Home extends Component{
    render(){
      return(
        <div className="bg-container">
          <Header/>
       
        <div className="content-container">
          <ProfileData/>
          <Quotes/>
          <Tags/>
        </div>
        </div>
      )
    }
}

export default Home