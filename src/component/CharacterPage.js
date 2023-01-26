import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(data);

  useEffect(() => {
    axios
      .get(`https://thronesapi.com/api/v2/Characters/${params.id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black min-h-screen p-5">
      <h1 className="text-yellow-400 text-center font-bold text-4xl">
        Character Details
      </h1>
      <div className="mt-20 w-full h-full flex flex-col items-center md:items-start md:flex-row ">
        <div className="md:w-[50%] flex justify-center md:justify-start w-full h-full">
          <img
            src={data.imageUrl}
            alt=""
            className="w-[80%] h-full object-cover rounded-lg"
          />
        </div>
        <div className="text-white mt-5 md:mt-0" >
            <p className="text-3xl py-2 font-bold">{data.fullName}</p>
            <p className="text-xl py-1 text-center md:text-start">{data.family}</p>            
            <p className="text-xl py-1 text-center md:text-start">{data.title}</p>              
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
