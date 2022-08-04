import { useEffect, useState } from "react";
import Header from "./Header";
import PageHead from "./PageHead";
import PageTitle from "./PageTitle";
import Sidebar from "./sidebar";

const LayoutAdmin = ({
    headTitle,
    children,
    pageTitle,
    pageTitleSub,
    pageClass,
    parent,
    child,
}) => {
    const [height, sETHeight] = useState(null);
    useEffect(() => {
        sETHeight(window.screen.height);
    }, []);
    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="main-wrapper" className={pageClass}>
                <Header />
                <Sidebar />
                {/* {pageTitle && ( */}
                <PageTitle
                                pageTitle={pageTitle}
                                pageTitleSub={pageTitleSub}
                                parent={parent}
                                child={child}
                            />
                        {/* )} */}

                <div className="content-body" style={{ minHeight: height - 122 }}>
                    <div className="container">
                        
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutAdmin;
