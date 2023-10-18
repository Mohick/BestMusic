import cssRecentLike from "./Recent Like.module.scss"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ContentRecentLike from "./content recent like"

export default function RecentLike() {
    const apiDiscover = 'http://127.0.0.1:8000/discover/?format=json'
 
    let [discover, setDiscover] = useState([])
    useEffect(() => {
        var check = true
        if (check) {

            
            fetch(apiDiscover)
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    return setDiscover(response)
                })
        }
        return () => check = false
    }, [])
    

    return (
        <ContentRecentLike>
            {discover}
        </ContentRecentLike>
    )
}