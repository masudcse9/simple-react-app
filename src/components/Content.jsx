import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Content = () => {

    //state set and checked
    const [inputText,setInputText] = useState({textContent:''});
    const handleInput=(e)=> {
        const { name,value } = e.target;
        setInputText({...inputText, [name]:value});
        console.log(inputText);
    }
    
    const display=()=> {
        
        //select section
        let textElement     = document.querySelector(".textCon");
        let textValue       = textElement.value;

        if(textElement.value===""){
            toast.warning("Please enter text");
            textElement.focus();
        }        

        //display section
        let displayElement       = document.querySelector("span");
        displayElement.innerHTML = textValue;
    }   
    
    return (
        <div>
            <div className="container-fluid">    
                <div className="row content text-left">
                    <div className="col-sm-2 sidenav"></div>
                    <div className="col-sm-8 text-left"> 
                    <h1>
                        <textarea className="form-control textCon" name="textContent" rows={5} placeholder="Enter here.." value={inputText.textContent} onChange={handleInput}></textarea>
                        <button className="btn btn-success" onClick={display}>Display</button>
                    </h1>
                    <p></p>
                    <p className="text-left"> <b>Display Section :</b> <span></span></p>
                    <hr/>
                    </div>
                    <div className="col-sm-2 sidenav"></div>
                </div>

                <div className="row text-left">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2">
                        <b>Name : </b><br /> Md. Masud Rana
                    </div>
                    <div className="col-sm-2">
                        <b>Email : </b><br /> masudcse9@gmail.com
                    </div>
                    <div className="col-sm-2">
                        <b>Mobile : </b><br /> +8801672315302
                    </div>
                    <div className="col-sm-2">
                        <b>Address : </b><br /> Mohakhali Dhaka-1000
                    </div>
                </div>

            </div>

            <ToastContainer/>
        </div>
    );
};

export default Content;