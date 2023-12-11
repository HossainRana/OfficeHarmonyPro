import axios from 'axios'

const api=axios.create({
  baseURL: import.meta.env.VITE_API_BASE +'/Employees'
  })

export function fetchEmployees(){
  const data=api.get('/', {
              // params: {
              //   title: "iPhone 9"
              // }
            }).then((function (response) {
              // console.log(response.data)
              return response.data
             
            })).catch(function (error) {
              console.log(error)

            })
  // console.log(data)

  return data
}

