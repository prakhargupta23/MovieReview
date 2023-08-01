import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'VNCYL19ZKG774JSF'; 
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=${apiKey}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data from the API');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Data from Alpha Vantage API:</h1>
      {/* Display the data you received from the API */}
      {/* You can customize this part based on the API response */}
      {/* For example, if your API returns time series data, you can display it like this: */}
      <ul>
        {Object.entries(data['Time Series (5min)']).map(([time, item]) => (
          <li key={time}>
            {time} - {item['1. open']} - {item['2. high']} - {item['3. low']} - {item['4. close']} -{' '}
            {item['5. volume']}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingPage;
