import {Routes, Route} from "react-router-dom";

import {ROUTES} from "./constants/routes";
import Landing from "./pages/landing/landing";
import SignIn from "./pages/authorization/signIn/signIn";

const RoutesComponent = () => {

    return (
        <div>
            <Routes>
                <Route path={ROUTES.main} element={<Landing/>} />
                <Route path={ROUTES.signIn} element={<SignIn/>} />
            </Routes>
        </div>
    )
}

export  default RoutesComponent