import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Home from "./componets/Home";
import Services from "./componets/Services";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Forms from "./componets/Forms";
import About from "./componets/About";
import Nav from "./componets/Nav";

const App = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorS, setError] = useState(false)
    const [errors, setErrors] = useState()
    useEffect(() => {
        axios.get("https://dummyjson.com/posts").then((res) => {
            setPosts(res.data.posts)
            setLoading(false)
        }).catch((error) => {
            console.log(error.message)
            setError(true)
            setErrors(error.message)
        }).finally(() => {
            console.log("In final")
        });
    }, [])
    return (
        // <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}>
                    <Route index element={<Home/>}/>
                    <Route path="contact" element={<Forms/>}/>
                    <Route path="blogs" element={<Services/>}/>
                    <Route path="about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        // </div>
    );
}

export default App;
