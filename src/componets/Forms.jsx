import {useState} from "react";
import {setMany} from "idb-keyval";
import {useNavigate} from "react-router-dom";

const Forms = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const navigates = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        setMany([["name", name], ["subject", subject], ["email", email], ["message", message]])
        return navigates("/")
    }
    return (<>
        <h3>Form</h3>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
                <form action="" className="form">
                    <input type="text" className="form-control" placeholder="Names"
                           onChange={(e) => setName(e.target.value)}/><br/>
                    <input type="text" className="form-control" placeholder="Subject"
                           onChange={(e) => setEmail(e.target.value)}/><br/>
                    <input type="text" className="form-control" placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}/><br/>
                    <textarea className="form-control" placeholder="Type..."
                              onChange={(e) => setMessage(e.target.value)}></textarea><br/>
                    <div className="row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3">
                            <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    </>);
}
export default Forms