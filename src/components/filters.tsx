import { FaFire } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { FaRegMoon } from "react-icons/fa"
import { FaRocket } from "react-icons/fa"
import { FaGhost } from "react-icons/fa"
import { FaFilm } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa"
import Link from "next/link"

export default function Filters() {
    return (
        <div className="filters-overflow px-4">
                <div className="row justify-content-center d-inline">
                    <div style={{ display: "inline" }}>
                        <Link href="#" className="filter-style  text-white a-style text-center">
                            <FaFire className='mb-md-2 mx-1 d-inline filter-text' />
                            <span className=" filter-text iran-sans">پربازدید</span>
                        </Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link href="#" className="filter-style text-white a-style text-center">
                            <FaRocket className='mb-md-2 mx-1 d-inline filter-text' />
                            <span className=" filter-text">اکشن</span>
                        </Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link href="#" className="filter-style text-white a-style text-center">
                            <FaRegHeart className='mb-md-2 mx-1 d-inline filter-text' />
                            <span className=" filter-text">عاشقانه</span>
                        </Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link href="#" className="filter-style text-white a-style text-center">
                            <FaFilm className='mb-md-2 mx-1 d-inline filter-text' />
                            <span className=" filter-text">انیمیشن</span>
                        </Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link href="#" className="filter-style text-white a-style text-center">
                            <FaGhost className='mb-md-2 mx-1 d-inline filter-text' />
                            <span className=" filter-text">ترسناک</span>
                        </Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link href="#" className="filter-style text-white a-style text-center">
                            <FaRegStar className='mb-md-2 mx-1 d-inline filter-text' />
                            <span className=" filter-text">خاص</span>
                        </Link>
                    </div>
                    <div style={{ display: "inline" }}>
                        <Link href="#" className="filter-style text-white a-style text-center">
                            <FaRegMoon className='mb-md-2 mx-1 d-inline filter-text' />
                            <span className=" filter-text">درام</span>
                        </Link>
                    </div>
                </div>
        </div>
    )
}