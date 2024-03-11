import { Box } from "@mui/material";
import "./header.scss";

import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <Box
            component="header"
            className="header">

            <Box className="header__group">
                <h1 className="header__group__title">
                    Seba
                    <span className="header__group__title header__group__title--color">Burger</span>
                </h1>
            </Box>
            <Navbar/>
        </Box>
    );
};

export default Header;