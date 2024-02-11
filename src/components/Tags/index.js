import {Component} from "react"
import "./index.css"

class Tags extends Component{

    state = {tagsData:[]}

    componentDidMount(){
        this.getTagsData();
    }

    getTagsData = async ()=>{
      const response = await fetch("https://api.quotable.io/tags");
      const data = await response.json();
      
      if (response.ok){
        this.setState({tagsData:data.slice(0,5)});
      }
      else{
        console.log("An Error Occcured");
      }
    }

    render(){
        const {tagsData} = this.state
        console.log(tagsData)
        return(
            <div className="trending-container">
               <div className="trending-content-container">
               <h1 className="trending">Trending Topics</h1>
               <img src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1707560670/settings_jmm9kf.png" alt="settings" className="settings-image"/>
               </div>
               <a target="_blank"  className="link-ele">show all quotes</a>
               <ul className="all-tags-container">
                 {tagsData.map(eachItem=>(
                  <li>
                    <h2 className="main-heading">{eachItem.name.toUpperCase()}</h2>
                    <a className="main-slug">#{eachItem.slug}</a>
                    <p className="count">{eachItem.quoteCount} quotes</p>
                  </li>
                 ))}
               </ul>
            </div>
        )
    }
}


export default Tags;

