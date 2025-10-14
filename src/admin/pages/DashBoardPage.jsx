import { useAuth } from "../../context/AuthContext"; // ajusta la ruta si es distinta
import Aside from "../components/Aside";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function DashBoardPage() {
    const { user } = useAuth();

    return (
        <>
            <div id="page-top">
                <div id="wrapper">
                    <Aside rol={user.rol} />
                    <Content rol={user.rol} />
                </div>
                <Footer />
            </div>
        </>
    );
}
