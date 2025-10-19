import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { getDashboardRoutes } from "../../components/common/getDashboardRoutes";


export default function DashBoardPage() {
    let { user } = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            getDashboardRoutes(user.rol)
        }        
    }, [user, navigate]);

    return null;
}
