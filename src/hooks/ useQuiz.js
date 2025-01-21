import { useEffect, useState } from "react"
import { fetchData } from "../utils/fetchData"

export default function useQuiz() {
    const [questions, setQuestions] = useState([])

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            console.log(j);
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {

        function getQuestions(data) {
            const shuffledData = shuffle(data)

            let buildedQuestions = shuffledData.slice(0,10).map(country => {

                return {
                    question: `Cual es la capital de ${country.name.common}?`,
                    answer: country?.capital?.[0],
                    options: shuffle(["dominicana", "Peru", "Sudafrica", country?.capital?.[0]])
                }
            })

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
