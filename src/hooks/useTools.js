import { useEffect, useState } from "react";

const useTools = () => {
    const [tools, setTools] = useState([]);

useEffect(() => {
   /*      https://rocky-stream-44489.herokuapp.com/       */
    fetch("http://localhost:5000/tool")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setTools(data)});
}, []);
    return [tools, setTools];
};

export default useTools;
