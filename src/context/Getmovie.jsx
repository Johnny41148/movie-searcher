import { useState } from "react";
import MovieProvider from "./MovieProvider";

const Getmovie = ({ children }) => {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(false);
  const [inaction, setinaction] = useState("i");
  const [mana, setmana] = useState(false);
  const getmovies = async (nameM) => {
    try {
      setloading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?s=${nameM}&page=1&apikey=48aa722f`
      );
      const data = await response.json();
      setstate(data.Search);

      setmana(true);
      setinaction(nameM);
    } finally {
      setloading(false);
    }
  };
  const closebtn = () => {
    setstate([]);
    setmana(false);
  };

  return (
    <MovieProvider.Provider
      value={{ state, getmovies, loading, inaction, mana, closebtn }}
    >
      {children}
    </MovieProvider.Provider>
  );
};
export default Getmovie;
