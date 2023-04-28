import React, { useEffect, useState } from 'react'
import axios from "axios"


//this hook is called whenever the page rerenders
const HookUseEffect = () => {

    const [data, setData] = useState("")

    useEffect(() => {

        // this is using async/await to fetch data
        async function fetchData() {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
                // console.log(res.data[0])
                setData(res.data[0].email)
                console.log("Api was called") //this clgs twice as once when the page renders and second time when the state is being changed.
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()

        //this is using promises to fetch data
        // axios
        // .get("https://jsonplaceholder.typicode.com/comments")
        // .then((res) => {console.log(res.data[1])})


    }, [])
    return (
        <div>
            {data}
        </div>
    )
}

export default HookUseEffect