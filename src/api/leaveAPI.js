import axios from 'axios'
const leaveData = [
  {
    id: 1,
    leaveName: 'Vacation',
    balanceDays: 10,
    employeeName: 'John Doe',
    employeeId: 101,
  },
  {
    id: 2,
    leaveName: 'Sick Leave',
    balanceDays: 5,
    employeeName: 'Jane Smith',
    employeeId: 102,
  },
  {
    id: 3,
    leaveName: 'Personal Leave',
    balanceDays: 8,
    employeeName: 'Bob Johnson',
    employeeId: 103,
  },
  // Add more leave entries as needed
];
const api=axios.create({
    baseURL: import.meta.env.VITE_API_BASE +'/LeaveBalances'
  })

export function fetchLeaveEntries(){
  const data=api.get('/', {
              // params: {
              //   title: "iPhone 9"
              // }
            }).then((function (response) {
              // console.log(response.data)
              // return response.data
              return leaveData;
             
            })).catch(function (error) {
              console.log(error)

            })
  // console.log(data)

  return data
}

export function addNewLeaveBalance(newLeave){
  // console.log(newLeave)
  const data=api.post('/', newLeave)
                .then((function (response) {
                  // console.log(response.data)
                  // return response.data
                  leaveData.push(newLeave);
                  return leaveData;
                }))
                .catch(function (error) {
                  console.log(error)

                })
  // console.log(data)

  return data
}

export function updateLeaveBalance(leave){
  // console.log(newLeave)
  const data=api.put('/'+leave.id, leave)
                .then((function (response) {
                  // console.log(response.data)
                  return leave
                }))
                .catch(function (error) {
                  console.log(error)

                })
  // console.log(data)

  return data
}

