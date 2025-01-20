import { useState, useEffect } from "react";

const country = "/public/countries.json";

export default function useCustomHooks() {

    const [data, setData] = useState([])
    data.map(res => {
        const rs = res.continents.filter((word) => word === 'North America')
        
    })

    useEffect(() => {
      fetch(country)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [])
    

  return <div>custom-hooks</div>;
}
/* export async function fetchData(country) {
    const response = await fetch(country)
    const data = await response.json()
    return data
} */
//import React, { useEffect, useState } from 'react'
// import { fetchData } from '../App';
// export function useData(url) {

//     const [data, setData] = useState({});
//     useEffect(() => {
//         fetchData(url)
//             .then(data => setData(data))
//             .catch(error => console.error(error))
//     }, [url])

//     return {
//         data
//     }
// }

// const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
// const { data } = useData(url)