import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

function DataTable () {

  const [user, setUser] = useState([])

  useEffect(()=>{
    async function getAlluser(){
      try {
        const user = await axios.get("/api/fetchdata/")
        console.log(user)
        setUser(user.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAlluser()
  }, [])


    async function makerequest() {
		try {
			console.log("Button Clicked")

			const config = {
				method: 'post',
				url: '/api/senddata/',

				headers: {
					'Content-Type': 'application/json'
				},
                data: '{"name":"name2", "email":"email2@gmail.com"}'
			}

			const res = await axios(config)
			console.log(res.data)

		}catch (error) {
			console.log(error)
		}
	}



  return (
      <div className="App text-center">
        <h1>Connect React JS with Laravel</h1>
        {
          user.map((user, i)=>{
            return (
              <div>
                <h2 key={i}>Hello {user.name}</h2>
               <button type="button" onClick={makerequest}>Send Data</button>
              </div>
            )
          })
        }
      </div>
  );

}

export default DataTable;

