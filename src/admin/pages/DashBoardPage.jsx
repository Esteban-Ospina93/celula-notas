import Aside from "../components/Aside";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function DashBoardPage() {
    return (
        <>
            <div id="page-top">
                <div id="wrapper" >
                    {/* <Header /> */}
                    <Aside />
                    <Content />                                 
                </div>
                <Footer />               
            </div>
        </>
    )
}
