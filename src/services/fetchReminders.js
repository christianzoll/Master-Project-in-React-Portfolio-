import { useEffect } from "react"

function fetchReminders(){

  const getEm = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke'); //replace with mongodb api
    const resData = await res.json();
    console.log(resData);
  } 

  useEffect(() => {
    getEm();
  }, [])
}  

export { fetchReminders }