import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';

export default function MoviesCard() {
    return (
        // banner component
        <div className=' container-fluid px-md-4'>
            <div className="row justify-content-center my-5">
                <div className="col-12 col-md-5">
                    <div style={{ border: 'none', background: 'none' }} className="card my-md-5 my-3">
                        <Link href='#' className='a-style'>
                            <div className="card-body banner1">
                                <div className='row'>
                                    <div className='col-12 col-lg-4 text-white'>
                                        <div>
                                            <h2>Lonely Girl Movie</h2>
                                        </div>
                                        <div className='play-text'>
                                            <FaPlay style={{ backgroundColor: "black", borderRadius: '50%' }} className='d-inline p-2' size={30} color="#ffffff" />
                                            <b className='mx-2 text-black iran-sans'>پخش فیلم</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div style={{ border: 'none', background: 'none' }} className="card my-md-5 my-3">
                        <Link href="#" className='a-style'>
                            <div className=" card-body banner2">
                                <div className='row'>
                                    <div className='col-12 col-lg-3 text-white'>
                                        <div>
                                            <h2>Up the Movie 2009</h2>
                                        </div>
                                        <div className='play-text'>
                                            <FaPlay style={{ backgroundColor: "black", borderRadius: '50%' }} className='d-inline p-2' size={30} color="#ffffff" />
                                            <b className='mx-2 text-black iran-sans'>پخش فیلم</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}