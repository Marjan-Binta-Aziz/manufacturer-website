import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    /*      https://rocky-stream-44489.herokuapp.com/       */
    fetch("https://rocky-stream-44489.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, [tools]);
  return [tools, setTools];
};

export default useTools;
