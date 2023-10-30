import React from "react";
import style from './pagination.module.css'

export const Pagination = (props) => {
    return (
        <ul className={style.pagination}>
            {createLiElemByTotal(props.totalPages).map(liElem => {
                return <li key={liElem} onClick={() => props.toPage(liElem)}>{liElem}</li>
            })}
        </ul>);
}


function createLiElemByTotal(total) {
    let liArray = [];
    if (total <= 10) {
        for (let i = 0; i < total; i++) {
            liArray.push(i + 1)
        }
    } else {
        liArray = [1, 2, 3, "...", total - 2, total - 1, total]
    }

    return liArray;
}