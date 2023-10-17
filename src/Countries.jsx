import React from "react";
import axios from "axios";

function Country() {
    var [countries, setCountries] = React.useState([]);
    var [pic, setPic] = React.useState(true);
   

    React.useEffect(() => {
        axios.get("https://restcountries.com/v3/all")
            .then((res) => {
                setCountries([...res.data])
                setPic(false)
            })
    },[])

    function abc(){
        setCountries([...countries].sort((a,b)=>a.population-b.population))
    }
    function bbc(){
        setCountries([...countries].sort((a,b)=>b.population-a.population))
    }

    function ccc(){
       
    }
      


    return (
        <div >
            <div>
                <h1 className="d2">COUNTRIES</h1>
                {
                    pic && (<img className="loading" src="https://i.pinimg.com/originals/67/f3/e4/67f3e47575c8e0e8e6cca532ce9b320f.gif" sdf=""/>)
                } 
            
            </div>
            <div className="d3">
            <button onClick={abc}><b>Ascending</b></button>
            <button onClick={bbc}> <b>Descending</b></button>
            <input id="d4" onKeyUp={()=>{ccc()}}  type="search" placeholder="search"/>
            </div>
               


            <ul className="list">
                {
                    countries.map((a) => {
                        return <li>
                            <h3> {a.name.common}</h3>
                            <img className="photo" src={a.flags[1]} alt=""  />
                            <h3>population:{a.population}</h3>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Country;