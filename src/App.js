import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "./components/Search/Search";
import Character from "./components/Character/Character";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterDetails from "./components/Character/CharacterDetails";

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updatePageNumber={updatePageNumber}
          />
      <div className="container">
        <div className="row">
          <Character page="/" results={results} />   
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
