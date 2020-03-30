import React, { useState, useEffect } from "react";
import { apiKey } from "./utils/api";
import { clientID } from "./utils/api"

import "./App.css";

const App = () => {
  const [songs, setSongs] = useState({});
  const [hasError, setErrors] = useState(false);

  const bearerToken =
    "BQCitWbq0jpgZzQLv_WWiSgdADmFmVqUxGsCZGWyX2A4eIy7QN8ggTO2LejC7t0gep7yo2ieeMiRYvubCiEKe-myF4QTyo48l5EQ0dMW1JbddjxlGVQ5CEPYpt9dLwpNUUqc-HUhkY4PfJv90Gye4DC13LaAvoUbP8R6dR-6JGPvkfW9FWVhw7U1A8NAQ840B_vJmDCN8NEp-QU1nF37dFTsaXlHUhsGaUghG5CXWQUWcS3PipTt9N3RIWWCm6T_x4lGvUSrHpcpmA";
  
    const authorizeUser = async () => {
      const auth = await fetch(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=http://localhost:3000/`)
      console.log("Auth", auth)
      
    }

    const fetchData = async () => {
      const data = await fetch(
        "https://api.spotify.com/v1/me/playlists?limit=10&offset=5",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": " application/json",
            Authorization: `Bearer ${bearerToken}`
          }
        }
      );
      setSongs(data);
    };
  
    useEffect(() => {
      authorizeUser()
      fetchData();
    }, []);

  console.log("songs", songs);
console.log( "Auth", authorizeUser())


  return <div>HI</div>;
};

export default App;









// const fetchData = () => {
//   fetch(
//     `https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBQbn8ThUA7ugNx9KN-x7pfd_xeLgzXe8vgt9EZxvaz9KNUHxg4u_X3AkcVCWfRxZtqIZMDzrMGMyD8n9sdsYmi09UBSh9b9jHBfIMpqitRsPxhPVRqdoq5GI5lkFgwOPoZi2j2SgUl7EE`
//   )
//     .then(res => res.json())
//     .then(data => setSongs(data))
//     .catch(err => setErrors(err));
// };
// useEffect(() => {
//   fetchData();
// }, []);
// const getPosts = () => {
//     var obj = {
//       link: 'https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT',
//       object: {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + this.state.clientToken,
//           'Host': 'api.producthunt.com'
//         }
//       }
//     }
