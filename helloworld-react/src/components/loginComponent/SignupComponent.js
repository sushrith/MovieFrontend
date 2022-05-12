import React, { useState,useEffect } from "react";
import DataService from '../../DataService'
import Nav1 from '../navs/Nav1';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function SignupComponent(props) {
    
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        if(sessionStorage.getItem("username")){
            sessionStorage.removeItem("username")
        }
    }, [])
    const handleClick=(event)=>{
        setLoading(true);
        //alert(firstName+" "+lastName+" "+email+" "+password);
        DataService.create(firstName,lastName,email,password).then(
            (response)=>{
        setLoading(false);
                if(response.data){
                    sessionStorage.setItem('username',email);
                    }   
                    //redirect to welcome page
                    if(sessionStorage.getItem('username'))
                    {
                        // const islog=(sessionStorage.getItem("username"))?true:false;
                        // alert(islog);
                        
                        props.history.push(`/chooseMovie`);
                    }
                    else{
                        props.history.push(`/error`);
                    }
            }
        ).catch((error)=>{
            console.log(error);
        });
        event.preventDefault();   
    }
        return (<>
        <Nav1/>
            <div className="outer">
            <div className="inner">

            <form onSubmit={handleClick}>
                <h3>Register</h3>

                <div className="form-group m-2">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}/>
                </div>

                <div className="form-group m-2">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"  value={lastName} onChange={(event)=>{setLastName(event.target.value)}}/>
                </div>

                <div className="form-group m-2">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                </div>

                <div className="form-group m-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                </div>
{
loading?<Button variant="primary" disabled>
<Spinner
as="span"
animation="grow"
size="sm"
role="status"
aria-hidden="true"
/>
Loading...
</Button>:<button type="submit" className="btn btn-dark btn-lg btn-block m-2">Register</button>
}
                
            </form>
            </div></div></>
        );
    }
