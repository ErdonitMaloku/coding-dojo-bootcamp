import { useParams } from "react-router"; //Top of App.js
//Rest of imports here...
    
const Params = (props) => { 
const { city , color , bcolor } = useParams();
   
    if (city ==="home") {
        return (
            <h1>Welcome !</h1>
        );
    }
    else if (isNaN(+city)===true){
        return(
            <p style={{color:color, backgroundColor:bcolor}}>The Word is: {city}</p>

        )
    }
    else if (isNaN(+city)===false){
        return(
            <h1>The number is: {city}</h1>
        )
    }
  
}
//Rest of code here...


export default Params;
