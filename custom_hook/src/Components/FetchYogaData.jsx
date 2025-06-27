import React from "react";
import useFetch from "./UseFetch";

const FetchYogaData = () => {
  const [data] = useFetch("https://api.npoint.io/4459a9a10e43812e1152");

  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Yoga Benefits</h1>
        {data &&
          data.map((e, index) => (
            <>
              <li key={index} className="list_data">
                <h2>{e.name}</h2>
                <p>
                  <strong>Benefits: </strong>
                  {e.benefits}
                </p>
                <p>
                  <strong>Duration: </strong>
                  {e.time_duration}
                </p>
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default FetchYogaData;
