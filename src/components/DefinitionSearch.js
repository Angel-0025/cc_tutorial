import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DefinitionSearch = () => {
  const [word, setWord] = useState();
  const navigate = useNavigate();

  return (
    <form
      className="flex space-between space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate(`/dictionary/${word}`);
      }}
    >
      <input
        className="shrink min-w-0 px-2 py-1 rounded "
        type="text"
        placeholder="Dinosaur"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded">
        Search
      </button>
    </form>
  );
};

export default DefinitionSearch;
