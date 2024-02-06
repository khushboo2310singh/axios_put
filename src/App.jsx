import React from 'react'
import axios from 'axios'

const App = () => {
    const handleclick=()=>{
        axios.put("https://648447a0ee799e321626764d.mockapi.io/users/15",{
            name:"Anita",
            age:24
        })
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        });
    }
  return (
    <>
        <div className="App">
                <input type="button" value="Insert data" onClick={handleclick} />

        </div>
   
    </>
  )
}

export default App
