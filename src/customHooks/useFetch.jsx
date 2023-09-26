import { useState, useEffect } from "react";
import axios from 'axios'

export const useFetch = (url) => {
    const [data, setData] = useState(null) 
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        const fetchData = async (url) => {
            const data = await axios.get(url)
            setData(data)
        }

        fetchData(url)
    })

    return {isLoading, data}
};
