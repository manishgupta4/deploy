import React from 'react'
import "./alert.css";
const Alert = (props) => {
    return ( 
        props.alert && <div className="Alert">
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show w-100`} role="alert">
            <strong>{props.alert.msg} {props.alert.time}</strong>
            <h1> </h1>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
     );
}
 
export default Alert;