import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from 'axios'
const Library = () => {
  const onClick = () => {
    //handle upload later
  };

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cricket.sportmonks.com/api/v2.0/players",
          {
            params: {
              api_token:
                "54ZUApappyDBqjsotfn29AcOspYb4pEf7DkanIkoNG3dj7Ot0SpVb2e3oZqi",
            },
          },
        );

        //setPlayers(response.data.data);
        console.log("hello");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className="flex 
        items-center
        justify-between
        px-5
        py-4"
      >
        <div
          className="inline-flex
            items-center
            gap-x-2"
        >
          <TbPlaylist size={24} className="text-neutral-400" />
          <p className="text-neutral-400 font-meduim text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={onClick}
          className="
             text-neutral-400 
             cursor-pointer
             hover:text-white 
             first-line:transition"
        />
      </div>

      <div
        className="flex flex-col gap-y-2 
      mt-4 px-3"
      >
        List of Songs
      </div>
    </div>
  );
};

export default Library;
