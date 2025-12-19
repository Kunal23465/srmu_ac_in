import { FC } from "react"
import { Outlet } from "react-router-dom";



const RootPrograms: FC = () => {
    
    return (
        <div>
          
            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default RootPrograms
