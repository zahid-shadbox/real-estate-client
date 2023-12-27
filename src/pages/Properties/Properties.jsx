import useProperties from "../../Hooks/useProperties"
import PropertyCard from "../../components/PropertyCard/PropertyCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import "./Properties.css"
import {PuffLoader} from "react-spinners"

const Properties = () => {

const {data,isError, isLoading} = useProperties()
console.log(data)

if (isError){
  return(
    <div className="wrapper">
      <span>Error while fetching data</span>
    </div>
  )
}
if(isLoading){
  return(
    <div className="wrapper" style={{height:"60vh"}}>
      <PuffLoader 
      height="80"
      width="80"
      radius={1}
      color="#4066ff"
      arai-label="puff-loading"
      />
    </div>
  )
}
  return (
    <div className='wrapper'>
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar/>
        <div className="paddings flexCenter properties">
        {
          data.map((card, i)=>(
            <PropertyCard card={card} key={i}/>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Properties