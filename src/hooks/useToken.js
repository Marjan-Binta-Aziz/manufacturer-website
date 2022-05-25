import React, { useEffect, useState } from "react";

const useToken = (user) => {
const [token, setToken] = useState("");

useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
    fetch(`http://localhost:5000/users?email=${email}`, {
        method: "PUT",
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
    })
        .then((res) => res.json())
        .then((data) => {
        console.log("user inside token", data);
        const accessToken = data.token;
        localStorage.setItem("accessToken", data.accessToken);
        setToken(accessToken);
        });
        }
    }, [user]);
return [token];
};

export default useToken;
