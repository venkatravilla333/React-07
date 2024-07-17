import React from 'react'
import TableData from './TableData';

function Fragment() {
  var names = ['sachin', 'kohli', 'dhoni', 'rahul']
  return (
    <>
      <p>Para-1</p>
      <p>Para-1</p>
      {/* <table>
       
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>city</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData/>
            </tr>
          </tbody>
        
      </table> */}
      {
        names.map((name) => {
        return  <React.Fragment key={name}>
            <h4>{name}</h4>
            <h4>Hello</h4>
          </React.Fragment>; 
        })
      }
    </>
  );
}

export default Fragment