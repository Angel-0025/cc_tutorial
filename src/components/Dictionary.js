import React, { useEffect, useState } from "react";

const Dictionary = () => {
  const [word, setWord] = useState();

  useEffect(() => {
    console.log("State updated", word);
  });

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Let's get the definition for {word}</h1>
    </>
  );
};

export default Dictionary;
