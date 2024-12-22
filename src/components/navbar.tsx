"use client"
import styles from "../app/Navbar.module.css"
import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { FaBell } from "react-icons/fa"
import Link from "next/link"
import SignIn from "./signIn"

export default function Navbar() {
    const [count, setCount] = useState(0);
    const [fetchArr, setFetchArr] = useState<any>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchHandler = () => {
        const classList1 = document.getElementById("search-1")?.classList;
        const classList2 = document.getElementById("search-2")?.classList;

        if (!classList1 || !classList2) {
            console.error("One of the elements was not found");
            return;
        }

        const dNone = classList1.contains("d-none");

        if (dNone) {
            classList1.remove('d-none');
            classList2.add("d-none");
        } else {
            classList2.remove('d-none');
            classList1.add("d-none");
        }
    }

    const signHandler = () => {

        const element = document.getElementById("sign-div");
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

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/movies.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                let arrData = []
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < data[i].length; j++) {
                        arrData.push(data[i][j])
                    }
                }
                setFetchArr(arrData)
            } catch (err) {
                console.log(err)
            }
        };

        fetchMovies();
    }, []);
    const filteredMovies = fetchArr.filter((movie: any) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <div className=" container-fluid px-md-4">
                <div className="row my-md-4 my-3 justify-content-between">
                    <div className="col-lg-2 "><h2><b className="text-white">Flix.id</b></h2></div>
                    <div className="col-md-3 text-center ">
                        <div id="search-1" className="bg-black p-1 p-md-2 d-flex justify-content-between navbar-style">
                            <Link style={{ fontSize: "18px" }} href="#" className="a-style text-white iran-sans mt-2 ml-4"><b>فیلم</b></Link>
                            <Link style={{ fontSize: "18px" }} href="#" className="a-style text-white iran-sans mt-2 ml-4"><b>سریال</b></Link>
                            <Link style={{ fontSize: "18px" }} href="#" className="a-style text-white iran-sans mt-2 ml-4"><b>اصلی ها</b></Link>
                            <Link onClick={searchHandler} href="#" style={{ backgroundColor: "rgb(42, 58, 72)", borderRadius: "50%", padding: "10px 12px" }} className="a-style text-white"><FaSearch className="mt-1" /></Link>
                        </div>
                        <div id="search-2" className="p-md-1 navbar-style d-none">
                            <div style={{ backgroundColor: "rgb(42, 58, 72)", width: "100%", height: "95%", borderRadius: "35px", padding: "13px 10px" }} className="d-flex ">
                                <Link onClick={searchHandler} href="#" className="a-style text-white mx-3 mt-1"><FaSearch /></Link>
                                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" className="navbar-search" />
                            </div>
                        </div>
                        <ul className="search-ul my-1">
                            {searchTerm.length > 0 ? (
                                filteredMovies.map((movie: any, index: number) => (
                                    <li key={index} className="search-li text-start">
                                        <Link className="a-style" href={`https://www.imdb.com/title/${movie["imdbLink"]}`}>
                                            <img style={{ borderRadius: "5px" }} width={30} src={`/images/${movie["imageSrc"]}.webp`} className="d-inline mr-2" alt="" />
                                            <p className="d-inline text-white">{movie.name} ({movie.year})</p>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <p></p>
                            )}
                        </ul>
                    </div>
                    <div id="profile" className="col-lg-2 text-end">
                        <div className="d-flex justify-content-lg-between justify-content-end">
                            <Link id="profile-icon" href="#" className="a-style text-white mr-2"><FaBell className="mt-lg-3" /></Link>
                            <Link onClick={signHandler} href="#" className="d-flex a-style ">
                                <img src="/images/profile.jpg" className="profile-img" alt="" />
                                <p className="text-start text-white mx-md-2 d-none d-sm-block">llkianooshll <br />premium </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
            <div id="sign-div" className="container-fluid py-5 d-none">
                <SignIn handler={signHandler} />
            </div>
        </div>
    )
}