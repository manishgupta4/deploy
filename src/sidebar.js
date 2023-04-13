import React from 'react'
import './sidebar.css'
// import emailjs from '@emailjs/browser';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { useEffect, useState } from "react";


import Visual from './visual';
import Graph from './graph';
let { data } = require("./Database.json")


const Sidebar = () => {
  const [alerts,setalert]=useState([]);
  const showAlert = (message, type,time,id)=>{
  setalert(alerts => [
      {
        msg: message,
        type: type,
        time: time,
        id: id
      },
      ...alerts
    ])
    console.log(alerts)
  }


  // function sendEmail(){
  //   const templateParams = {
  //     name: 'James',
  //     notes: 'Check this out!'
  // };

  //   emailjs.send('service_fbx8sxb', 'template_ffn3ott',templateParams,'8xMec99qaoKFXb8NO')
  //     .then((response) => {
  //     console.log('SUCCESS!', response.status, response.text);
  //   }, (error) => {
  //     console.log('FAILED...', error);
  //   });
       
  // };
  


  const [count,setData] = useState(0);
  useEffect(() => {
      const interval = setInterval(()=> {
        if((count+1)<data.length){
          setData(count+1);
          if(data[count+1].temp>14) {
            showAlert("Temperature is greater than 14","danger",data[count].time,data[count].id);
            // sendEmail();
          }
          else {
            if(data[count+1].temp>10.5 && data[count+1].temp<14) {
              showAlert("Temperature is greater than 10","warning",data[count].time,data[count].id);
            }
          }
          console.log('alerts', alerts)
        }
        else{
          setData(0);
        }
      },5000);
      return()=>{
        clearInterval(interval);
      };
   },[count])
   const changeAlert = e => {
    e.preventDefault();
    const id = e.target.value;
    // console.log()
    const newAlert = [...alerts.slice(0,id),...alerts.slice(id+1)]
    setalert(newAlert)
    // setalert([...alerts.slice(0,id), ...alerts.slice(id+1)])
   }
  return (
    <div style={{ display: 'flex',  overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" style={{ position: 'static', height:'100vh' }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            QTS Dashboard
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="table">News</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="pen">Contact</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="images">About</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            {/* copyright symbol entity code */}
            QTS &copy; 2023
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className="container">
        <div className="row vc">
          <div className="visual">
            <Visual count={count} />
          </div>
        </div>
        <div className="row gc">
          <div className="graph col-sm-12 col-md-9 col-lg-9 col-xl-9 ">
              <Graph/>
          </div>
          <div className="alert1 col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
            <h1 className="he">Alert</h1>
          {alerts.slice(0,4).map((alert,id)=>{
                return <div className="Alert">
                <div className={`alert alert-${alert.type} alert-dismissible fade show w-100`} role="alert">
                    <strong>
                      {alert.msg} 
                      <br/>
                      Time:{alert.time}  id: {alert.id}
                      </strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" value={id} aria-label="Close" onClick={changeAlert}></button>
                </div>
            </div>
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
