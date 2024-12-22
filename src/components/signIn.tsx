import Link from "next/link"
import { FaG } from "react-icons/fa6"
export default function SignIn({ handler }:any) {
    return (
        <div className="row justify-content-center">
            <div className="col-sm-5 col-10 bg-dark sign-form text-white py-5">
                <div className="text-center my-3">
                    <button onClick={handler} className="mx-3 mx-sm-5 d-inline sign-close">
                        <p style={{ fontSize: "40px", marginRight: "50px" }}>×</p>
                    </button>
                    <p className="d-inline text-white iran-sans sign-p">خوش آمدید!  لطفا وارد شوید</p>
                </div>
                <form className="text-center" action="">
                    <div className="my-3">
                        <div>
                            <label htmlFor="user-email"><p className="iran-sans sign-p">: ایمیل یا رمز عبور</p></label>
                        </div>
                        <input className="sign-input py-0 py-sm-1 py-md-2 text-black" type="text" name="username" id="user-email" />
                    </div>
                    <div className="my-3">
                        <div>
                            <label htmlFor="user-email"><p className="iran-sans sign-p">:رمز عبور</p></label>
                        </div>
                        <input className="sign-input py-0 py-sm-1 py-md-2 text-black" type="text" name="username" id="user-email" />
                    </div>
                    <div className=" text-center my-5">
                        <button style={{ borderRadius: "50px" }} className=" bg-primary sign-input pt-2"><p className="iran-sans sign-p"><FaG className="d-inline mb-1" /> با گوگل وارد شوید</p></button>
                        <div><p className="text-white my-3 iran-sans sign-p">حساب کاربری ندارید؟<Link className="text-primary" href={"#"}> ثبت نام</Link></p></div>
                    </div>
                    <div className=" text-center">
                        <input className="bg-black px-3 py-2 rounded btn btn-dark" type="submit" value={"ارسال"} />
                    </div>
                </form>
            </div>
        </div>
    )
}