import {Component} from "react"
import EachQuote from "../EachQuote"
import "./index.css"

class Quotes extends Component{
    state = {quotesData:[]}

    componentDidMount(){
      this.getQuotesData();
    }

    getQuotesData = async() =>{
      const response = await fetch("https://api.quotable.io/quotes");
      const data = await response.json();
      if (response.ok){
        const apiData = data.results.slice(0,4);
        const updatedData = apiData.map(eachItem=>({
          ...eachItem,
          isLiked:false
        }))
        this.setState({quotesData:updatedData});
      }
      else{
        console.log("An Error Occcured");
      }
    }

    changeLikedStatus = (id)=>{
      const {quotesData} = this.state
      const data = quotesData.map(eachItem=>{
        if (eachItem._id === id){
          console.log("hi")
          return {...eachItem,isLiked:!eachItem.isLiked}
        }
        return {...eachItem}
      })
      this.setState({quotesData:data});
    }

    render(){
        const {quotesData} = this.state
        
        return(
            <div className="quotes-container">
                 {quotesData.map(eachItem=>(<EachQuote eachContent = {eachItem} key={eachItem._id} changeLikedStatus={this.changeLikedStatus}/>))}
            </div>
        )
    }
}







export default Quotes