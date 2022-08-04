import Link from "next/link";
import { useState } from "react";
function HeaderLanding() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);



    return (
        <>
            <div className="header landing_page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12  position-relative">
                            <div className="navigation">
                                <nav class="navbar navbar-expand-lg navbar-light px-0">
                                    <Link href="/"><a class="navbar-brand">
                                        <img src="/images/logo.png" alt="" className="logo-primary" />
                                        <span>Treemium </span>
                                        {/* <img src="/images/logow.png" alt="" className="logo-white" /> */}
                                    </a></Link>

                                    <button className="navbar-toggler" type="button" onClick={toggleTrueFalse}>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={isToggled ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                                        <ul className="navbar-nav me-auto">


                                            <li className="nav-item">
                                                <Link href="#intro"><a className="nav-link">Home
                                                </a></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#market"><a className="nav-link">Market
                                                </a></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#portfolio"><a className="nav-link">Portfolio
                                                </a></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#testimonial"><a className="nav-link">Testimonial
                                                </a></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#contact"><a className="nav-link">Contact
                                                </a></Link>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="dashboard_log d-sm-none d-lg-block">
                                        <div className="signin-btn d-flex align-items-center">

                                            <Link href="/signin"><a className="btn btn-primary mx-2">Sign In</a></Link>
                                            <Link href="/signup"><a className="btn btn-outline-primary mx-2">Sign Up</a></Link>
                                        </div>
                                    </div>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );
}
export default HeaderLanding;

