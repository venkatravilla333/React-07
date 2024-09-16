// import React, { useEffect, useState } from 'react'
// // import B from './B'
// // import C from './C'
// import axios from 'axios'

// function A() {
  //   var [loading, setLoading] = useState(false);
  //   var [posts, setPosts] = useState([]);
//   var [error, setError] = useState(false);
//   console.log(error)

//   useEffect(() => {
//     setLoading(true)
//     setError(false)
//     axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
//       console.log(res.data);
//       setLoading(false)
//       setPosts(res.data);
//     }).catch((error) => {
  //       console.log(error)
  //       setLoading(false)
  //       setError(error)
//     })
//   }, []);

//   return (
  //     <div>
  
  //       <h3>A: component</h3>
  //       <div>
  //         {
    //           loading ? <h1>Loading</h1> : error ? <h4>{error.message}</h4> : <div>
    //             {
      //               posts.map((obj) => {
        //                 return <p>{obj.id}. {obj.title}</p>
        //               })
        //             }
        //           </div>
        //         }
        //       </div>
        
        //       {/* <B posts={posts} />
        //       <C posts={posts} /> */}
        //     </div>
        //   );
        // }
        
        // export default A
        
        
        //useReducer hook
        
import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

function A() {

  useEffect(() => {
    dispatch({ type: 'FETCH_POST_REQUEST'});
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data)
        dispatch({type: 'FETCH_POST_SUCCESS', payload: res.data})
       })
      .catch((error) => { 
        console.log(error)
         dispatch({ type: 'FETCH_POST_FAILURE', payload: error.message });
      })

  }, [])

  var initialState = {
    loading: false,
    posts: [],
    error: ''
  }

  var postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POST_REQUEST':
        return {
          loading: true,
          posts: [],
          error: '',
        };
        break;
      case 'FETCH_POST_SUCCESS':
        return {
          loading: false,
          posts: action.payload,
          error: '',
        };
        break;
      case 'FETCH_POST_FAILURE':
        return {
          loading: false,
          posts: [],
          error: action.payload
        }
        break;
      default:
        return state
    }
    
  }
 var [state, dispatch] = useReducer(postReducer, initialState)
    return (
      <div>
  
        <h3>A: component</h3>
        <div>
          {
              state.loading ? <h1>Loading</h1> : state.error ? <h4>{state.error}</h4> : <div>
                {
                    state.posts.map((obj) => {
                        return <p key={obj.id}> {obj.title}</p>
                      })
                    }
                  </div>
                }
              </div>
        
            </div>
          );
        }


export default A

// import React, { useReducer } from 'react'

// function A() {

//   var initialState = {
//     count: 0
//   }

//   var countReducer = (state=initialState, action) => {
//     switch (action.type) {
//       case 'increase':
//         return {
//           count: state.count + 1
//         }
//         break;
//       case 'decrease':
//         return {
//           count: state.count - 1
//         }
//         break;
//       case 'reset':
//         return {
//           count: state.count=0
//         }
//       default: return state
//     }
//   }
//  var [statevalue, dispatch] = useReducer(countReducer, initialState)
//   return (
//     <div>
//       <h2>Count: {statevalue.count}</h2>
//       <button onClick={()=>dispatch({type: 'increase'})}>increase</button>
//       <button onClick={()=>dispatch({type: 'decrease'})}>decrease</button>
//       <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
//     </div>
//   )
// }

// export default A