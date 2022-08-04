import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
    const router = useRouter();
    return (
        <>
            <div className="sidebar">
                <Link href="/">
                    <a className="brand-logo">
                        <img src="/images/logo.png" alt="" />
                        <span>Treemium </span>
                    </a>
                </Link>
                <div className="menu">
                    <ul>
                        <li>
                            <Link href="/">
                                <a className={router.pathname == "/" ? "active" : ""}>
                                    <span><i class="mdi mdi-view-dashboard"></i></span>
                                    <span class="nav-text">Home</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/buy-sell">
                                <a className={router.pathname == "/buy-sell" ? "active" : ""}>
                                    <span><i class="mdi mdi-repeat"></i></span>
                                    <span class="nav-text">Sign in</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/accounts">
                                <a className={router.pathname == "/accounts" ? "active" : ""}>
                                    <span><i class="mdi mdi-account"></i></span>
                                    <span class="nav-text">Account</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/settings">
                                <a className={router.pathname == "/settings" ? "active" : ""}>
                                    <span><i class="mdi mdi-settings"></i></span>
                                    <span class="nav-text">Setting</span>
                                </a>
                            </Link>
                        </li>

                    </ul>
                </div>

                <div class="sidebar-footer">
                    <div class="social">
                        <a href="#"><i class="fa fa-youtube-play"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </div>
                    <div class="copy_right">
                        © {new Date().getFullYear()} Quixlab
                    </div>
                </div>

            </div>
        </>
    );
}
export default Sidebar;
