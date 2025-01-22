import { useEffect, useState } from "react"
import { fetchData } from "../utils/fetchData"

export default function useQuiz() {
    const [questions, setQuestions] = useState([])
    // const questionsArray = (array, index, country) => {
    //     if (array[index].includes('español')) { 
    //         return array[index]
    //     } 
    //     return array[index] + country.name.common + " ?"
    // }

    const questionsArray = (array, index, country) => {
        switch (index) {
            case 0:
                return {
                    question: array[index] + country?.name?.common + " ?",
                    answer: country?.capital?.[0],
                    options: shuffle(["dominicana", "Peru", "Sudafrica", country?.capital?.[0]])
                }
            case 1:
                return {
                    question: array[index] + country.name.common + " ?",
                    answer: Object.values(country.languages).join(","),
                    options: shuffle(["dominicana", "Peru", "Sudafrica", Object.values(country.languages).join(",")])
                }
            case 2:
                return {
                    question: array[index] + country.name.common + " ?",
                    answer: getCurrency(country?.currencies),
                    options: shuffle(["dominicana", "Peru", "Sudafrica", getCurrency(country?.currencies)])
                }
            case 3:
                return {
                    question: array[index] + country.name.common + " ?",
                    answer: country?.population,
                    options: shuffle(["dominicana", "Peru", "Sudafrica", country?.population])
                }
            case 4:
                return {
                    question: array[index] + country.name.common + " ?",
                    answer: country?.region,
                    options: shuffle(["dominicana", "Peru", "Sudafrica", country?.region])
                }
            case 5:
                return {
                    question: array[index] + country.name.common + " ?",
                    answer: country?.area + "KM",
                    options: shuffle(["dominicana", "Peru", "Sudafrica", country?.area + "KM",])
                }
            case 6:
                return {
                    question: array[index] + country.name.common + " ?",
                    answer: country?.tld,
                    options: shuffle(["dominicana", "Peru", "Sudafrica", country?.tld,])
                }
            case 7:
                return {
                    question: array[index] + country.name.common + " ?",
                    answer: country?.flag,
                    options: shuffle(["dominicana", "Peru", "Sudafrica", country?.flag])
                }
            default:
                console.log("invalid option");
                break;
        }
    }

    function getCurrency(currencies) {
        let  [key] = Object.keys(currencies)
        return currencies?.[key]?.name
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        function getQuestions(data) {
            const shuffledData = shuffle(data)
            console.log(shuffledData);
            let buildedQuestions = shuffledData.slice(0, 8).map((country, index) => questionsArray(array, index, country),)
            console.log(buildedQuestions);
            setQuestions(buildedQuestions)
        }
        fetchData("countries.json")
            .then(data => getQuestions(data))
            .catch(error => console.error(error))
    }, [])
    return {
        questions
    }
}
const array = [
    'Cual es la capital de  ', // pais
    '¿Qué idioma(s) oficial(es) se habla(n) en ',// pais
    '¿Qué moneda se utiliza en ', //pais
    '¿Cuál es la población aproximada de ', //pais
    '¿En qué región se encuentra ', //pais
    '¿Qué superficie tiene ',
    '¿Cuál es el dominio de internet de ',//pais
    '¿Puedes identificar la bandera de ',//pais
    // '¿En qué continentes hay países que hablan español ?',//pais
    // '¿En qué continente se encuentra ',//pais
]
//cual es la capital de "caribe" ?
//¿Qué idioma(s) oficial(es) se habla(n) en [nombre del país]?
//¿Qué moneda se utiliza en [nombre del país]?
//¿Cuál es la población aproximada de [nombre del país]?
//¿En qué región se encuentra Australia?
//¿Qué superficie tiene Rusia?
//¿Cuál es el dominio de internet de España?
//¿Puedes identificar la bandera de Italia?
//¿En qué continentes hay países que hablan español?
//¿En qué continente se encuentra Egipto?
//sort
