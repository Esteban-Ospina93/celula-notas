import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Content from "../components/Content";


export default function DashBoardLayout() {
  return (
    <>
            <div id="page-top">
                <div id="wrapper" >
                    <Aside />
                    {/* Contenido que cambia por ruta */}
                    <Content>
                        <Outlet />
                    </Content>
                </div>
            </div>

    </>
  )
}
