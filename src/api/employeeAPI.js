import axios from 'axios'
const employees = [
  { id: 1, employeeName: 'John Doe', department: 'HR' },
  { id: 2, employeeName: 'Jane Smith', department: 'IT' },
  { id: 3, employeeName: 'Bob Johnson', department: 'Finance' },
  // Add more employees as needed
];
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
              // return response.data
              return employees;
             
            })).catch(function (error) {
              console.log(error)

            })
  // console.log(data)

  return data
}

