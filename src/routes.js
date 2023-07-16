import {Routes, Route} from "react-router-dom";

import {ROUTES} from "./constants/routes";
import SearchResult from "./pages/searchResult/searchResult";
import SignIn from "./pages/authorization/signIn/signIn";
import RegistrationConfirmation from "./pages/authorization/registrationConfirmation/registrationConfirmation";
import ContentPage from "./pages/contentPage/contentPage";
import MainPage from "./pages/mainPage/mainPage";
import SignUp from "./pages/authorization/signUp/signUp";

const RoutesComponent = () => {

    return (
        <div>
            <Routes>
                <Route path={ROUTES.searchResult} element={<SearchResult/>}/>
                <Route path={ROUTES.signIn} element={<SignIn/>}/>
                <Route path={ROUTES.signUp} element={<SignUp/>}/>
                <Route path={ROUTES.registrationConfirmation} element={<RegistrationConfirmation/>}/>
                <Route path={ROUTES.contentPage} element={<ContentPage/>}/>
                <Route path={ROUTES.main} element={<MainPage/>}/>

            </Routes>
        </div>
    )
}

export default RoutesComponent