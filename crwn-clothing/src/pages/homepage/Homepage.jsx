import React from "react";
import './Homepage.scss';
import Directory from '../../components/directory-menu/DirectoryMenu'
import { HomePageContainer } from "./homepage-styles";

const HomePage = () => {

    return(
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
    ); 
}

export default HomePage;