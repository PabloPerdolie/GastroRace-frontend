import React, { useEffect } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../app_state/store/actionCreators/itemActions";
import { selectItems } from "../../../app_state/store/reducers/itemSlice";

function Catalog(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItems())
    }, []);

    const itemsSel = useSelector(selectItems)

    return(
        <div className="catalog">
            <ul className="items-list">
                {itemsSel.map((item) => (
                    <li key={item.id}>
                        <Item item={item}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Catalog;