import React from "react";
import Color from "../../environment/Color"
import {css, StyleSheet} from 'aphrodite';

const Header = () => {

    return (
        <div className={css(style.header)}>
            Spotify Artist Search
        </div>
    );
}

const style = StyleSheet.create({
    header:
        {
            backgroundColor: Color.primary,
            borderBottom: "1px solid " + Color.darkPrimary,
            padding: "20px 40px",
            fontSize: "20px",
        }
})

export default Header;
