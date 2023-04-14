import './graph.css';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, AreaChart, Area} from "recharts";
// import { Fragment } from 'react';
import React, { useEffect, useState } from "react";

function Graph() {
 const [user, setUser] = useState();
 const [domain, setDomain ] = useState([0,20])
 const [numberOfData, setNumberOfData] = useState(10);
 const [outData,setOutData] = useState();


 const fetchData = (e = null) => {
 // e.preventDefault();
 // console.log(e.value)
 if (e && console.log(e.target.value));
 if(e && e.target.value === 'humi'){
 // dropdownText = 'Humidity'
 console.log('Humidity Clicked')
 setDomain([80,120])
 return fetch(" https://api-generator.retool.com/irrO3k/data")
 .then((response) => response.json())
 .then((data) => setUser(data));
 }
 else if(e && e.target.value === 'voc'){
 // dropdownText = 'VOC'
 setDomain([350,500])
 // domain = [350,500]
 return fetch("https://api-generator.retool.com/lkBEgg/data")
 .then((response) => response.json())
 .then((data) => setUser(data));
 }
 else if(e && e.target.value === 'co2'){
 // dropdownText = 'CO2'
 setDomain([3000,4500])
 // domain = [3000,4500]
 return fetch(" https://api-generator.retool.com/jVv6VJ/data")
 .then((response) => response.json())
 .then((data) => setUser(data));
 }
 else{
 // dropdownText = 'Temperature'
 // domain = [0,20]
 setDomain([0,20])
 return fetch(" https://api-generator.retool.com/9Yv4lU/data")
 .then((response) => response.json())
 .then((data) => setUser(data));
 }
 }
 useEffect(() => {
 // const e.target.value = 'temp'
 fetchData();
 // console.log(dropdownText)
 },[])

 useEffect(()=>{
 if(user)
 setOutData(user.slice(0,numberOfData));
 },[user])
 const OnClickChart = e => {
 e.preventDefault();
 // console.log(e.value)
 if(e.target.value === 'Line'){
 document.querySelector('.linechart').hidden = false;
 document.querySelector('.barchart').hidden = true;
 document.querySelector('.areachart').hidden = true;
 }
 if(e.target.value === 'Bar'){
 document.querySelector('.linechart').hidden = true;
 document.querySelector('.barchart').hidden = false;
 document.querySelector('.areachart').hidden = true;
 }
 if(e.target.value === 'Area'){
 document.querySelector('.linechart').hidden = true;
 document.querySelector('.barchart').hidden = true;
 document.querySelector('.areachart').hidden = false;
 }
 }

 const onChangeNumber = (e) => {
 console.log(e.target.value)
 setNumberOfData(e.target.value)
 }
 useEffect(()=>{
 console.log(user)
 if(user)
 setOutData(user.slice(0,numberOfData))
 },[numberOfData])
 // let dropdownText = 'Temperature'
 const onChangeData = e => {
 // const dropdownButton = document.querySelector('.btn.btn-outline-success.dropdown-toggle.mx-3')
 // console.log(dropdownButton.innerText)
 // dropdownButton.innerText = dropdownText
 // console.log(e)
 fetchData(e) 
 }
 return (
 <div className='container w-100'> 
 <div className='linechart w-100 h-auto'>
 <h1 className='chart-heading'>Line Chart</h1>
 <ResponsiveContainer width="100%" aspect={2.5} minWidth={100}>
 <LineChart
 width='100%'
 height={300}
 data={outData}
 margin={{
 top: 5,
 right: 10,
 left: 20,
 bottom: 5,
 }}
 >
 <CartesianGrid strokeDasharray="3 3" />
 <XAxis dataKey="Time" />
 <YAxis domain={domain}/>
 <Tooltip />
 <Legend />
 <Line type="monotone" dataKey="Node 1" stroke="#8884d8" activeDot={{ r: 8 }} />
 <Line type="monotone" dataKey="Node 2" stroke="#82ca9d" />
 <Line type="monotone" dataKey="Node 3" stroke="#d88499" />
 <Line type="monotone" dataKey="Node 4" stroke="#16A5A5" />
 </LineChart>
 </ResponsiveContainer>
 
 
 </div>

 
 <div className='barchart w-100 h-auto' hidden>
 <h1 className='chart-heading'>Stacked Bar Chart</h1>
 <ResponsiveContainer width='100%' aspect={2.5}>
 <BarChart
 // width={'100%'}
 // height={400}
 data={outData}
 margin={{
 top: 20,
 right: 30,
 left: 20,
 bottom: 5,
 }}
 >
 <CartesianGrid strokeDasharray="3 3" />
 <XAxis dataKey="Time" />
 <YAxis/>
 <Tooltip />
 <Legend />
 <Bar dataKey="Node 1" stackId="a" fill="#8884d8" />
 <Bar dataKey="Node 2" stackId="a" fill="#82ca9d" />
 <Bar dataKey="Node 3" stackId="a" fill="#d88499" />
 <Bar dataKey="Node 4" stackId="a" fill="#16A5A5" />
 </BarChart>
 </ResponsiveContainer>
 </div>
 <div className='areachart w-100 h-auto' hidden>
 <h1 className='chart-heading'>Stacked Area Chart</h1>
 <ResponsiveContainer width="100%" aspect={2.5}>
 {/* <AreaChart
 width={1000}
 height={400}
 data={user}
 margin={{
 top: 10,
 right: 30,
 left: 0,
 bottom: 0,
 }}
 >
 <CartesianGrid strokeDasharray="3 3" />
 <XAxis dataKey="Time" />
 <YAxis />
 <Tooltip />
 <Area type="monotone" dataKey="Node 1" stackId="1" stroke="#8884d8" fill="#8884d8" />
 <Area type="monotone" dataKey="Node 2" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
 <Area type="monotone" dataKey="Node 3" stackId="1" stroke="#ffc658" fill="#ffc658" />
 <Area type="monotone" dataKey="Node 4" stackId="1" stroke="#16A5A5" fill="#16A5A5" />
 </AreaChart> */}
 {/* </ResponsiveContainer> */}
 <AreaChart data={outData}
 margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
 <defs>
 <linearGradient id="Node1" x1="0" y1="0" x2="0" y2="1">
 <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
 <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
 </linearGradient>
 <linearGradient id="Node2" x1="0" y1="0" x2="0" y2="1">
 <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
 <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
 </linearGradient>
 <linearGradient id="Node3" x1="0" y1="0" x2="0" y2="1">
 <stop offset="5%" stopColor="#A54FCD" stopOpacity={0.8}/>
 <stop offset="95%" stopColor="#A54FCD" stopOpacity={0}/>
 </linearGradient>
 <linearGradient id="Node4" x1="0" y1="0" x2="0" y2="1">
 <stop offset="5%" stopColor="#3E98B5" stopOpacity={0.8}/>
 <stop offset="95%" stopColor="#3E98B5" stopOpacity={0}/>
 </linearGradient>
 </defs>
 <XAxis dataKey="Time" />
 <YAxis domain={domain}/>
 <CartesianGrid strokeDasharray="3 3" />
 <Tooltip />
 <Area type="monotone" dataKey="Node 1" stroke="#8884d8" fillOpacity={1} fill="url(#Node1)" />
 <Area type="monotone" dataKey="Node 2" stroke="#82ca9d" fillOpacity={1} fill="url(#Node2)" />
 <Area type="monotone" dataKey="Node 3" stroke="#A54FCD" fillOpacity={1} fill="url(#Node3)" />
 <Area type="monotone" dataKey="Node 4" stroke="#3E98B5" fillOpacity={1} fill="url(#Node4)" />
 </AreaChart>
 </ResponsiveContainer>
 </div>
 {/* below code is for daily weekly monthly buttons till div is closed */}
 <div className='row pt-3 pb-2'>
 <div className='btn-group mx-2  col-sm-8 pb-2 col-xl-5 px-0' role="group" aria-label="Basic example">
 <button type="button" class="btn btn-outline-success " value={10} onClick={onChangeNumber}>Daily</button>
 <button type="button" class="btn btn-outline-success " value={30} onClick={onChangeNumber}>Weekly</button>
 <button type="button" class="btn btn-outline-success " value={50} onClick={onChangeNumber}>Monthly</button>
 <button type="button" class="btn btn-outline-success " value={100} onClick={onChangeNumber}>Quarterly</button>
 </div>
 
 <div className='btn-group mx-2 col-sm-8 col-xl-5 px-0 pb-2' role="group" aria-label="Basic example">
 <button type="button" class="btn btn-outline-success" onClick={OnClickChart} value='Line'>Line Chart</button>
 <button type="button" class="btn btn-outline-success" onClick={OnClickChart} value='Bar'>Bar Chart</button>
 <button type="button" class="btn btn-outline-success" onClick={OnClickChart} value='Area'>Area Chart</button>
 </div>

 {/* <button class="btn btn-outline-success mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
 <select class="btn btn-outline-success mx-2 col-sm-8 col-xl-1 px-0 pb-2" aria-label="Default select example" onChange={onChangeData}>
 <option value='temp'selected>Temperature</option>
 <option value="humi">Humidity</option>
 <option value="voc">VOC</option>
 <option value="co2">CO2</option>
 </select>
 
 {/* </button> */}
 </div>
 </div>
 );
}
export default Graph;