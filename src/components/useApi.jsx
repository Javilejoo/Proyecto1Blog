import { useState } from 'react';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Error al realizar la solicitud');
      }

      setLoading(false);
      return await response.json();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const postData = async (url, data) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return fetchData(url, options);
  };

  const getData = async (url) => {
    return fetchData(url);
  };

  const putData = async (url, data) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return fetchData(url, options);
  };

  const deleteData = async (url) => {
    const options = {
      method: 'DELETE',
    };

    return fetchData(url, options);
  };

  return { loading, error, postData, getData, putData, deleteData };
};

export default useApi;
