import React from "react";
import './Homepage.scss';
import Directory from '../../components/directory-menu/DirectoryMenu'

const HomePage = () => {

    return(
        <div className="homepage">
            <Directory/>
        </div>
    ); 
}

export default HomePage;