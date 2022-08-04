import Link from "next/link";
const Footer = () => {
    return (
        <>
            <div class="footer landing">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-md-6">
                        <div class="footer-link text-left">
                            <Link href="#"><a class="m_logo"><img src="./images/logo.png" alt=""/></a></Link>
                            <Link href="/about"><a>About</a></Link>
                            <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                            <Link href="/term-condition"><a>Term & Service</a></Link>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-lg-end text-center">
                        <div class="social">
                            <Link href="#"><a><i class="fa fa-youtube-play"></i></a></Link>
                            <Link href="#"><a><i class="fa fa-instagram"></i></a></Link>
                            <Link href="#"><a><i class="fa fa-twitter"></i></a></Link>
                            <Link href="#"><a><i class="fa fa-facebook"></i></a></Link>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-xl-12 text-center text-lg-end">
                        <div class="copy_right text-center text-lg-center">
                            Copyright © {new Date().getFullYear()} Quixlab. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;