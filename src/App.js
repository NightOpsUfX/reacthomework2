// import {useEffect, useState} from "react";
// import {getUsers} from "./services/API";
//
// export default function App () {
//
//   let [users, setUsers] = useState([]);
//   useEffect(() => {
//
//     getUsers().then(response => {
//       // setUsers(response);
//       console.log(response.data);
//     })
//
//   }, []);
//
//   return (
//     <div>
//
//     </div>
//   );
// }
//////////////////////////////

import {getUsers, getUserPosts} from "./services/API";
import {useEffect, useState} from "react";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

export default function App () {

    let [users, setUsers] = useState([]);
    let [userPosts, setUserPosts] = useState([])
    console.log(userPosts);

    useEffect(() => {
        getUsers().then(response => {
            // console.log(response)
            setUsers(response.data);
        })
    },[]);

    function showUserPosts (id) {
        // console.log(id);
        getUserPosts(id).then(response => {
            // console.log(response.data);
            setUserPosts(response.data);
        });
    }
  return (
      <div>
          <div>
              {
                  <Users showUserPosts={showUserPosts} items={users}/>
              }
          </div>
          <div>
                <h2>Click on the button next to the user's name to see all of their posts below.</h2>
                <div>
                    {
                        <Posts items={userPosts}/>
                    }
                </div>
          </div>


      </div>
  )
}