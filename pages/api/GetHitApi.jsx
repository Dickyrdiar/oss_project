// /* eslint-disable no-shadow */
// import { axios } from 'axios';
import { useState, useEffect } from 'react';

export default function GetHitApi(url) {
  const [response, setResponse] = useState(null);
  const [errorResponse, setError] = useState('');

  useEffect(() => {
    async function hitApi() {
      try {
        const dataHit = await fetch(url);
        console.log('data', dataHit);
        setResponse(dataHit);
      } catch (error) {
        console.log('error', error);
        setError(error.message);
      }
    }
    hitApi();
  }, []);

  return { response, errorResponse };
}
