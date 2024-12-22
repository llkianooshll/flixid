import { FaInstagram } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
export default function Footer() {
    return (
        <div className=" container-fluid py-4 bg-black">
            <div className="row justify-content-center iran-sans">
                <div className="col-md-3 order-md-0 order-2 col-10 mx-4 text-white">
                    <p className="text-center"><b>ما را دنبال کنید</b></p>
                    <div className="text-center">
                        <FaInstagram className="d-inline mx-2" size={30} />
                        <FaTelegram className="d-inline mx-2" size={30} />
                        <FaWhatsapp className="d-inline mx-2" size={30} />
                    </div>
                    <p className="my-2">Created by Kianoosh Afshari 2024.all rights reserved©</p>
                </div>

                <div className="col-md-3 order-md-0 order-1 col-10 mx-4 text-white text-center">
                    <p><b>ارتباط با ما</b></p>
                    <p>Email: info@Flix.id</p>
                    <p>Phone: +1 (555) 123-4567</p>
                </div>
                <div className="col-md-3 order-md-0 order-0 col-10 mx-4 text-white">
                    <p className="text-center"><b>درباره ی ما</b></p>
                    <p style={{ direction: "rtl" }} className="text-right">به Flix.id: مرکز سرگرمی نهایی شما خوش آمدید! در Flix.id، ما به همه چیز فیلم و تلویزیون علاقه داریم. چه اهل سینما باشید، چه تماشاگر پرخوری، یا فقط به دنبال برنامه مورد علاقه بعدی خود باشید، ما شما را تحت پوشش قرار داده ایم.</p>
                </div>
            </div>
        </div>
    )
}