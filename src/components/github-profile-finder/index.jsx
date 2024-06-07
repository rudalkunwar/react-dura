import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {
    const [userName, setUserName] = useState("raazdura");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();
        if (data) {
            setUserData(data);
            setLoading(false);
            setUserName('');
            setErrMsg(null);
        }

            // Handle 404 error
        if (res.status === 404) {
            setErrMsg('User not found');
        }
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <h1>Loading data ! Please wait</h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github User..."
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)} 
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {errMsg !== null 
                ? <h2>{errMsg}</h2>
                : userData !== null ? <User user={userData} /> : null
            }
        </div>
    );
}