// /* eslint-disable no-shadow */
// import { axios } from 'axios';
import { useState, useEffect } from 'react';

const Headers = {
  Authentication: process.env.GITHUB_OUTH,
};

export default function GetHitApi(url) {
  const [response, setResponse] = useState(null);
  const [errorResponse, setError] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('url', url);

  useEffect(() => {
    async function hitApi() {
      try {
        setLoading(true);
        const dataHit = await fetch({
          url,
          headers: { ...Headers },
        });
        console.log('data', dataHit);
        setResponse(dataHit);
      } catch (error) {
        console.log('error', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    hitApi();
  }, []);

  return { response, errorResponse, loading };
}
