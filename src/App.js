import './App.css';
import Nav from "./componets/Nav";
import {useEffect, useState} from "react";
import axios from "axios";
import LoadingIcon from "./componets/LoadingIcon";

const App = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://dummyjson.com/posts").then((res) => {
            setPosts(res.data.posts)
            setLoading(false)
        }).catch((error) => {
            console.log(error.message())
        }).finally(() => {
            console.log("In final")
        });
    }, [])
    return (
        <div className="App">
            {loading ? <LoadingIcon/> : <Nav posts={posts}/>}
        </div>
    );
}

export default App;
