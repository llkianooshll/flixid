import Link from 'next/link';
import '../src/app/globals.css'
import { FaPlay } from 'react-icons/fa';

export default function MoviesCard() {
    const movieImages = ['lonely', 'up'] // یه ارایه ی فیک برای یوزیبل کردن تصاویر بنر

    // استایل های بک گراند بنر ها بصورت متغیر
    const backgroundStyle1 = {
        backgroundImage: `url(images/${movieImages[0]}.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '270px',
        zIndex: -1, // قرار دادن در پس‌زمینه
        borderRadius: '18px',
        boxShadow: '3px 3px 15px black'

    };
    const backgroundStyle2 = {
        backgroundImage: `url(images/${movieImages[1]}.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '270px',
        zIndex: -1, // قرار دادن در پس‌زمینه
        borderRadius: '18px',
        boxShadow: '3px 3px 15px black'
    };

    return (
        // banner component
        <div>
            <div className="row justify-content-center my-5">
                <div className="col-11 col-md-5">
                    <div style={{ border: 'none', background: 'none' }} className="card my-md-5 my-3">
                        <Link href='#' className='a-style'>
                            <div style={backgroundStyle1} className="card-body">
                                <div className='row'>
                                    <div className='col-12 col-md-4 text-white'>
                                        <div>
                                            <h1>Lonely Girl Movie</h1>
                                        </div>
                                        <div style={{ marginTop: '40%' }}>
                                            <FaPlay style={{ backgroundColor: "black", borderRadius: '50%' }} className='d-inline p-2' size={30} color="#ffffff" />
                                            <b className='mx-2 text-black iran-sans'>پخش فیلم</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-11 col-md-7">
                    <div style={{ border: 'none', background: 'none' }} className="card my-md-5 my-3">
                        <Link href="#" className='a-style'>
                            <div style={backgroundStyle2} className=" card-body">
                                <div className='row'>
                                    <div className='col-12 col-md-3 text-white'>
                                        <div>
                                            <h1>Up the Movie 2009</h1>
                                        </div>
                                        <div style={{ marginTop: '40%' }}>
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