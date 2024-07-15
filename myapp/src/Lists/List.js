import React from 'react'

function List() {
  var arr = ['sachin', 'kohli', 'dhoni', 'rahul', 'gill', 'hari']
  return (
    <div>
      <h3>List of names</h3>
      {/* <h3>{arr[0]}</h3>
      <h3>{arr[1]}</h3>
      <h3>{arr[2]}</h3>
      <h3>{arr[3]}</h3>
      <h3>{arr[4]}</h3> */}
      {
        arr.map((name) => {
       return   <h3>{name}</h3>
        })
      }
    </div>
  );
}

export default List