import React, { useRef } from "react";

const YoutubeSearch = ({ onSearch }) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    };

    const onClick = (e) => {
        e.preventDefault();
        //console.log("onClick");
        handleSearch()
    };
    
    const onkeyPress = (event) => {
        //console.log("onKeyPress");
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    
    return (
        <div className="search">
            <label className="sr-only">검색하기</label>
            <input ref={inputRef} type="search" placeholder="검색하기" onKeyPress={onkeyPress}/>
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    );
};

export default YoutubeSearch;