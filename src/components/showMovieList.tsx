import Link from "next/link"
import { FaStar } from "react-icons/fa"
export default function ShowMovieList({list}:any) {
    return (
        <div >
            <div className='cards-overflow my-10'>
                {list.map((movie:any, index:number) => (
                    <div key={index}>
                        <div style={{ background: "none", border: "none" }} className=' card movieList-card'>
                            <div style={{ backgroundImage: `url(/images/${movie["imageSrc"]}.webp)`, backgroundSize: "cover", backgroundPosition: "cover" }} className='card-body animation-card'>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-white mt-3 mb-2 text-center animation-card-font'><Link href={`https://www.imdb.com/title/${movie["imdbLink"]}`} className="a-style text-white">{movie["name"]}</Link></h4>
                            <div className='d-flex justify-content-center text-white animation-card-font'>
                                <FaStar className='text-warning mt-1 mx-1' />
                                <span>{movie["rating"]}</span>
                                <span className='mb-1 mx-3'>|</span>
                                <span>{movie["year"]}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}