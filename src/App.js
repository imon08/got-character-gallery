import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./component/CharacterCard";
import Spinner from "./component/Spinner";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://thronesapi.com/api/v2/Characters").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const finalData = data.filter((item) => {
    return item.fullName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="p-5 bg-black min-h-screen">
      <h1 className="text-center text-4xl font-bold underline underline-offset-4 text-white">
        Characters
      </h1>
      <div className="my-10 flex justify-center w-full ">
        <input
          className="border-white bg-black border-2 rounded-lg w-[80%] h-9 caret-white px-3 py-1 text-white"
          placeholder="Search character name"
          value={search}
          onChange={handleSearch}
          type="text"
        />
      </div>
      <section className="mt-10 flex flex-wrap justify-center items-center min-h-[60vh]">
        {!loading &&
          finalData.map((item) => {
            return (
              <CharacterCard
                key={item.id}
                fullName={item.fullName}
                imageUrl={item.imageUrl}
              />
            );
          })}
        {loading && <Spinner />}
      </section>
    </div>
  );
}

export default App;
