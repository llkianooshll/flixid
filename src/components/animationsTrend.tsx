"use client"
import { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import SortFilter from './sortFilter';
import ShowMovieList from './showMovieList';

export default function AnimationsTrend() {
    const [count, setCount] = useState(0);
    const [movies, setMovies] = useState<any>([]);
    const [fetchArr, setFetchArr] = useState([]);
    const [error, setError] = useState(null);

    const showComp = () => {
        const element = document.getElementById("show-component2");
        const classList1 = element?.classList;

        if (!classList1) {
            console.warn("Element not found or classList is undefined");
            return;
        }

        let dNone = false;
        for (let i = 0; i < classList1.length; i++) {
            if (classList1[i] === "d-none") {
                dNone = true;
                break;
            }
        }

        if (dNone) {
            classList1.remove('d-none');
        } else {
            classList1.add("d-none");
        }
    }

    const bubbleSort = (array: any, scale: string) => {
        const sortedArray = [...array];
        const n = sortedArray.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (Number(sortedArray[j][scale]) < Number(sortedArray[j + 1][scale])) {
                    [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
                }
            }
        }
        setMovies(sortedArray);
        setCount(prevCount => prevCount + 1);
    };

    const filterArray = (scale: any, filterBy: number) => {
        if (filterBy == -1) {
            setMovies(fetchArr);
            setCount(prevCount => prevCount + 1);
        } else {
            let array = fetchArr;
            let result = array.filter(function (item) {
                return (item[scale] > filterBy);
            })
            setMovies(result)
            setCount(prevCount => prevCount + 1);
        }
    }


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/movies.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                let arrData = data[0];
                setFetchArr(arrData)
                setMovies(arrData);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMovies();
    }, []);

    if (error) return <div>Error: {error}</div>;


    return (
        <div className=" container-fluid px-md-4">
            <div className="d-flex justify-content-between">
                <div className=''>
                    {/* <div>
                        <button style={{ borderRadius: "50%" }} className="mx-2 p-2 badge btn btn-dark">-)</button>
                        <button style={{ borderRadius: "50%" }} className="mx-2 p-2 badge btn btn-dark">(-</button>
                    </div> */}
                    <div onClick={showComp} className="d-flex bg-black px-1 py-3 filterList-btn">
                        <button className=" text-white mx-md-3 mx-1 d-inline">
                            <FaBars className='d-inline' />
                        </button>
                        <div className='text-white'>|</div>
                        <button className=" text-white mx-md-3 mx-1 d-inline">
                            <FaFilter className='d-inline' />
                        </button>
                    </div>
                </div>
                {/* ye font size koli va responsive baraye codet darnazar begir */}
                <h2 className="text-white mx-3 mb-5 iran-sans animation-card-font">انیمیشن های پرطرفدار</h2>
            </div>
            <div id='show-component2' className='d-none'>
                <SortFilter movies={movies} sort={bubbleSort} filter={filterArray} />
            </div>
            <ShowMovieList list={movies} />
        </div>
    )
}