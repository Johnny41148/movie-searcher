import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import MovieProvider from "../context/MovieProvider";
import BoxMovies from "./BoxMovies";

const Serchpage = () => {
  const [text, settext] = useState("");
  const { state, getmovies, loading, inaction, mana, closebtn } =
    useContext(MovieProvider);
  const sendtext = () => {
    getmovies(text);
    settext("");
  };
  return (
    <div className="d-flex flex-column bg-body-secondary ">
      <div className="w-100 h-100 p-5 d-flex justify-content-center align-items-center bg-secondary">
        <nav className="w-75 ">
          <h1 className="ms-5 ps-5">Search for movies</h1>
          <form
            className="w-100 m-4 d-flex justify-content-center align-items-center"
            action=""
          >
            <input
              className="w-50 p-3"
              type="text"
              value={text}
              onChange={(e) => settext(e.target.value)}
              placeholder="please enter somting ..."
            />
            <Button
              onClick={sendtext}
              className="p-3 m-1 rounded-1"
              variant="outline-light"
            >
              Get Movies
            </Button>
          </form>
          {loading ? (
            <div className="spinner-border spinner-border-lg text-light d-block mx-auto"></div>
          ) : (
            <></>
          )}
        </nav>
      </div>
      {mana == true ? (
        <button
          onClick={closebtn}
          type="button"
          className="btn-close  d-block mx-auto p-3 m-2 border border-dark rounded-circle"
          aria-label="Close"
        ></button>
      ) : (
        <></>
      )}
      <div className=" w-100 h-100 d-flex flex-wrap gap-5 py-2   ps-5">
        {inaction !== "" ? (
          state?.map((data, index) => <BoxMovies key={index} {...data} />)
        ) : (
          <p className="h3 text-danger">please enter somting</p>
        )}
        {mana == true && state == undefined ? (
          <p className="h3 text-success">please enter somting meaningful</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Serchpage;
