import Navbar from './components/navbar/Navbar'
import style from './appstyle.module.css'
import Card from './components/card/Card';
import { useEffect, useState } from 'react';
const BASE_URL = "http://localhost:9000/"


const App = () => {
  const[data,setData] = useState(null)
  const[loading,setLoading] = useState(false)
  const[error,setError] = useState(null)

  useEffect(()=>{
    const fetchFoodData = async()=>{
      setLoading(true)
      try {
        const response = await fetch(BASE_URL)
        const json = await response.json()
        setData(json)
        setLoading(false)
      } catch (error) {
        setError("unable to fetch data")
        setLoading(false)
      }
    }
    fetchFoodData()
  },[])

  // console.log(data)

  if(error){
    return <div>{error}</div>
  }
  if(loading){
    return <div>loading...</div>
  }
  
  return <div>
    <Navbar/>
    <main className={`${style.heroSection}`}>
    {data && data.map((value,index)=>(
        <Card name={value['name']} text={value['text']} price={`$${value['price']}.00`} image={value['image']} key={index}/>
      ))}
    </main>
  </div>;
};

export default App;
