import Child1 from "./Child1"
import Child2 from "./Child2"


function Parent() {
  var data = 'sachin'
  return <div>
    <h2>Parent: {data}</h2>
    <Child1 data={data}/>
    <Child2 data={data} />
  </div>
}

export default Parent


