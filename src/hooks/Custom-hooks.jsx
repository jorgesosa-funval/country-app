import { useState, useEffect } from "react";

const country = "/src/assets/countries.json";

export default function useCustomHooks() {
  const [data, setData] = useState([]);
  data.splice(0, 10).map((res) => {
        questionWords(res)
   });
  useEffect(() => {
    fetch(country)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  function questionWords(res){
    if (res.name.common === 'Caribbean Netherlands') {
        console.log(res);
      }
}
  return { data };
}
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
