import {getMany} from "idb-keyval";
import {useEffect, useState} from "react";

const Home = () => {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {

        getMany(['name', 'email', 'subject', 'message']).then((response) => (
            <>{console.log(response["name"])}</>
        )).catch((e) => (
            <></>
        )).catch((e) => {
            console.log("Here is the error" + e.error)
        })
    })
    return (<>
        <h3>Home</h3>
        <p></p>
    </>);
}
export default Home