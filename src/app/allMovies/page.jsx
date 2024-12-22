"use client"
import { useEffect, useState } from 'react';

export default function AllMovies() {
    const [count, setCount] = useState(0);
    const [movies, setMovies] = useState([]);
    const [fetchArr, setFetchArr] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/movies.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                let arrData = data[0];
                setFetchArr(arrData)
                setMovies(arrData);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMovies();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container-fluid">
            <div className="row justify-content-center my-5">
                <div className="col-9 px-md-4 py-md-3 px-3 py-1 allMovies-header text-white">
                    <b style={{ fontSize: "24px" }}>Filters:</b>
                    <div className="text-center">
                        <button className="allMovies-btn">
                            All
                        </button>
                        <button className="allMovies-btn">
                            Comedy
                        </button>
                        <button className="allMovies-btn">
                            animations
                        </button>
                        <button className="allMovies-btn">
                            K-Drama
                        </button>
                    </div>
                    <b style={{ fontSize: "23px" }}>
                        Sort by:
                    </b>
                    <div className="text-center">
                        <button className="allMovies-btn">
                            Year
                        </button>
                        <button className="allMovies-btn">
                            Rating
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}