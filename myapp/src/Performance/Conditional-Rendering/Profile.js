import React from 'react'
import kohli from './kohli.PNG'
function Profile(props) {
  var [login, setLogin] = props.data
  return (
    <div>
      <h3>Profile</h3>
      <h4>Name: Kohli</h4>
      <img src={kohli} alt="" width="200px" height="120px" />
       <br />
      <button onClick={()=>setLogin(login=false)}>Logout</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum quidem ad deleniti, quo libero perspiciatis ipsum magni! Laboriosam similique sapiente ipsam non tenetur excepturi perferendis optio at, recusandae ad atque ipsa nam voluptatibus accusamus! Quas dolorum accusamus cumque enim placeat dicta vero ea sapiente necessitatibus voluptate non doloremque culpa voluptatum labore, sit, cupiditate, iure quis quibusdam velit. Ad iste recusandae, nam odio itaque quia, repellat omnis nobis cum facilis dignissimos quidem alias mollitia inventore, nemo dolor veritatis! Aut deserunt nihil eius sint adipisci optio magnam, totam atque nemo corporis et odit, pariatur voluptatem tempore doloribus at deleniti ut molestiae?</p>
    </div>
  )
}

export default Profile