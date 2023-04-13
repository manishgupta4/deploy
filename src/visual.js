import "./visual.css";
import Temperature from "./temperature.png";
import VOC from "./VOC.png";
import humidity from "./humidity.png";
import CO2 from "./CO2.png"
import Dropdown from './dropdown.js';
// import Alert from './alert';
let { data } = require("./Database.json")
function Visual({count}) {

    // const [alerts,setalert]=useState([]);
    // const showAlert = (message, type)=>{
    // setalert(alerts => [
    //     {
    //       msg: message,
    //       type: type
    //     },
    //     ...alerts
    //   ])
    //   console.log(alerts)
    // }

    // const [count,setData] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(()=> {
    //       if((count+1)<data.length){
    //         setData(count+1);
    //         if(data[count+1].temp>14) {
    //           showAlert("Temperature is greater than 14","danger");
    //         }
    //         else {
    //           if(data[count+1].temp>10.5 && data[count+1].temp<14) {
    //             showAlert("Temperature is greater than 10","warning");
    //           }
    //         }
    //         console.log('alerts', alerts)
    //       }
    //       else{
    //         setData(0);
    //       }
    //     },5000);
    //     return()=>{
    //       clearInterval(interval);
    //     };
    //  },[count])
    
    //  useEffect(()=>{
    //     props.alerts = alerts;
    //  },[alerts])
     return (
       //<div className="d-flex justify-content-center w-100">
        <div className="w-100 row my-3 d-flex justify-content-center">
        <div className='temp col-sm-10 col-md-4 col-lg-4 col-xl-3 my-1'>
          <Dropdown/>
          <img className='image' src={Temperature}></img>
          <h1 className='hdg'>{data[Math.floor(count)].temp}</h1>
          <h2 className="down">Temperature</h2>
        </div>
        <div className='temp col-sm-10 col-md-4 col-lg-4 col-xl-3 my-1  '>
            <Dropdown/>
            <img className='image'src={humidity}></img>
            <h1 className='hdg'>{data[Math.floor(count)].humi}</h1>
            <h2 className="down">Humidity</h2>
        </div>
            <div className='temp col-sm-10 col-md-4 col-lg-4 col-xl-3 my-1 '>
            <Dropdown/>
            <img className='image'src={CO2}></img>
            <h1 className='hdg'>{data[Math.floor(count)].CO2}</h1>
            <h2 className="down">CO2</h2>
        </div>
            <div className='temp col-sm-10 col-md-4 col-lg-4 col-xl-3 my-1 '>
            <Dropdown/>
            <img className='image' src={VOC}></img>
            <h1 className='hdg'>{data[Math.floor(count)].VOC}</h1>
            <h2 className="down">VOC</h2>
        </div>
      </div>
    // </div>
  );
}
export default Visual;