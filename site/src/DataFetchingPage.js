import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { movieName } from './Firstpage';


const DataFetchingPage = () => {
  // const [movie, setMovie] = useState("oppenheimer");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '32d2270a';
        // console.log("Movie Name:", movie); 
        const response = await axios.get(
          `https://www.omdbapi.com/?t=${movieName}&y=2023&plot=full&i=tt3896198&apikey=${apiKey}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data from the API');
        setLoading(false);
      }
    };

    fetchData();
  }, [movieName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul>
        <div className='review'>
          <h1 className='t'>Movie Review</h1>
          <div className='part'><h3> Movie: </h3><p>{data["Title"]}</p></div>
          <div className='part'><h3> Year of Release: </h3>{data["Released"]}</div>
          <div className='part'><h3> Rated: </h3>{data["Rated"]}</div>
          <div className='part'><h3> Runtime: </h3>{data["Runtime"]}</div>
          <div className='part'><h3> Genre: </h3>{data["Genre"]}</div>
          <div className='part'><h3> Director: </h3>{data["Director"]}</div>
          <div className='part'><h3> Actors: </h3>{data["Actors"]}</div>
          <div className='part'><h3> Writer: </h3>{data["Writer"]}</div>
          <div className='part'><h3> Language: </h3>{data["Language"]}</div>
          <div className='part'><h3> Plot: </h3>{data["Plot"]}</div>
          <div className='part'><h3> Country: </h3>{data["Country"]}</div>
          <div className='part'><h3> Awards: </h3>{data["Awards"]}</div>
          <div className='part'><h3> imdbRating: </h3>{data["imdbRating"]}</div>
          <div className='part'><h3> imdbVotes: </h3>{data["imdbVotes"]}</div>
          <div className='part'><h3> BoxOffice: </h3>{data["BoxOffice"]}</div>
          <div className='part'><h3> imdbVotes: </h3>{data["imdbVotes"]}</div>
        </div>
      </ul>
    </div>
  );
};

export default DataFetchingPage;
