import React from "react";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


export default class AddAssignment extends React.Component {

   constructor(props) {
    super(props)
   
    this.state ={
            id: "",
            name: "",
            date: ""
        }
    }
    
    
    handleChange = (event) => {
        console.log(this.state)
        this.setState(prev => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    
    onSubmit = () => {

        console.log("hello");

        if(this.state.id == "") return;


        const token = Cookies.get('XSRF-TOKEN');        
            fetch(`http://localhost:8081/assignment/add/${this.state.id}/${this.state.name}/${this.state.date}`, {
                method: 'POST',
                headers: { 'X-XSRF-TOKEN': token,},
            })
            .then(res => {
                if(res.ok){
                    toast.success("An assignment has been created!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    console.log('YES!');
                } else {
                    console.error(res.status);
                }
            
            })
            .catch(err => {
                console.error(err);
            })


    }


    render() {
        return (
            <div>
                <h2>Create New Assignment</h2>
            <form>
              
               <input
                name="name"
                type="text"
                placeholder="Assignment Name"
                onChange={this.handleChange}
                value={this.name}
               />  
    
               <input
                name="date"
                type="date"
                onChange={this.handleChange}
                value={this.date}
               /> 
               <select name="id" onChange={this.handleChange}>
                <option value="">Course Id's</option>
                <option value="999001">9990001</option>
                <option value="123456">123456</option>
               </select>


    
               <button onClick={this.onSubmit}>Create Assignment</button>
               
    
            </form>
            <Button component={Link} to={{pathname:'/'}} >Back To Home
            </Button>
            </div>
            
        )
    } 
}

