import React from "react";
import Color from "../../../../common/environment/Color";
import {FaSearch} from "react-icons/fa"
import {css, StyleSheet} from 'aphrodite';
import Select from 'react-select';
import {SearchType} from "../../const/SearchType";

const SearchBox = (props) => {

    const ArtistTypeOption = [
        {label: SearchType.ARTIST, value: SearchType.ARTIST},
        {label: SearchType.ALBUM, value: SearchType.ALBUM},
        {label: SearchType.PLAYLIST, value: SearchType.PLAYLIST},
        {label: SearchType.TRACK, value: SearchType.TRACK}
    ]

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
                ) : (
                    <div className={css(style.typeSearchContainer)}>
                        <Select
                            defaultValue={props.selectedSearchType.split(",").map(
                                selectedType => {
                                    return {value: selectedType.toString(), label: selectedType.toString()}
                                }
                            )}
                            isMulti
                            name="types"
                            options={ArtistTypeOption}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={props.onTypeChanged}
                        />
                    </div>
                )
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
    typeSearchContainer: {
        marginTop: "10px",
        height: "40px"
    },
    errorMessage: {
        color: Color.error
    }

});


export default SearchBox;