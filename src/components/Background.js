import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Background = () => {
  const [apod, setApod] = useState();

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=VZnm5MWimNzgCAXEi7lyp7zDen0M0Rq3UWRiA2V4')
      .then(response => {
        console.log(response);
        setApod(response.data.url);
      })
      .catch(error => console.log('no nasa photo for you', error));
  }, []);
if (!apod){return <h3>Loading...</h3>}
  return <img src={apod} alt="nasa apod" />;
};
export default Background;
