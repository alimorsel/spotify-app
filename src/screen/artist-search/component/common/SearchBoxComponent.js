import React from "react";
import Color from "../../../../common/environment/Color";
import {FaSearch} from "react-icons/fa"
import {css, StyleSheet} from 'aphrodite';

const SearchBox = (props) => {
    return (
        <div>
            <div className={css(style.container, props.error ? style.errorContainer : "")}>
                <input defaultValue={props.defaultValue}
                       className={css(style.input)}
                       placeholder="Search for an artist..."
                       type="text"
                       onChange={props.onTextChanged}/>
                <div className={css(style.buttonContainer)}>
                    <button
                        onClick={props.onClick}
                        className={css(style.button)}>
                        <FaSearch
                            className={css(style.searchIcon, props.error ? style.errorMessage : "")}/>
                    </button>
                </div>

            </div>
            {
                props.error ? (
                    <p className={css(style.errorMessage)}>
                        {props.error}
                    </p>
                ) : (<div></div>)
            }
        </div>
    );
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        height: "30px",
        width: "400px",
        border: "1px solid " + Color.darkPrimary,
        borderRadius: "5px",
        padding: "9px",
        alignItems: "center",
        "@media only screen and (max-device-width: 480px)": {
            width: "220px",

        }

    },
    errorContainer: {
        border: "1px solid " + Color.error,
    },
    input: {
        padding: "10px",
        border: "0px",
        flexGrow: "1",
        justifyContent: "center",
        textAlign: "center",
        outline: "none",
        fontSize: 15,
        '::-webkit-input-placeholder': {
            color: "#000",
        }
    },
    buttonContainer: {
        height: "100%",
        width: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "transparent",
        border: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
        cursor: "pointer"
    },
    searchIcon: {
        fontSize: "20px",
        color: Color.darkPrimary
    },
    errorMessage: {
        color: Color.error
    }

});


export default SearchBox;