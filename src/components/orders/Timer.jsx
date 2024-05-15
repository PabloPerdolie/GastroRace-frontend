import { useEffect } from "react";
import { useState } from "react";

export const Timer = ({deliveryDate}) => {

    const [timer, setTimer] = useState(deliveryDate.getTime() - new Date().getTime())

    useEffect(() => {
        console.log(timer, deliveryDate, new Date());
        setTimeout(() => {
            setTimer(deliveryDate.getTime() - new Date().getTime())
        }, 1000*10)
    }, [timer])


    return(
        <div>
            {timer > 0 
            ?  <span> {Math.floor(timer / 60000)} мин. </span> 
            : <span>Опаздываем...</span>
            }
        </div>
    )
}