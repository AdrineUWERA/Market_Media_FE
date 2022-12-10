import { useMemo } from "react";
import {BsStarFill} from "react-icons/bs";

const count = 5;
const filled = "#DBA61F";
const unfilled = "#838383";




const Rate = (rate) =>{
    const getColor = index => {
        let int_rate = parseInt(rate);

        if (index<=rate.rate){
            return filled;
        }
        return unfilled;
    }
    const starRating = useMemo(()=>{
        return Array(count)
            .fill(0)
            .map((_, i) => i+1)
            .map(idx =>
                <BsStarFill
                    key={idx}
                    style={{color: getColor(idx)}}
                    className="pr-2 text-[24px]"
                />
            );
    },[rate])

    return(
        <div className="flex">
            {starRating }
        </div>
    )
}

export default Rate;