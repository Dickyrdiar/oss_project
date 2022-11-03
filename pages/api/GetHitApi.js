/* eslint-disable no-shadow */
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function GetHitApi({ url }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function hitApi() {
      try {
        const dataHit = await axios.get(
          url,
        );
        setResponse(dataHit);
        console.log('data', dataHit);
      } catch (error) {
        console.log('error', error);
        setError(error);
      }
    }

    hitApi();
  }, []);

  return { response, error };
}
