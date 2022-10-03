import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './result.css'

function Result() {
    const location = useLocation();
    const result = [...location.state.result];
    
    let ee = 0, nn = 0, tt = 0, jj = 0;

    let resTemp = '';

    
    result.forEach((item) => {
        if (item === 'E'){
            ee++;
        }else if (item === 'N'){
            nn++;
        }else if (item === 'T'){
            tt++;
        }else if (item === 'J'){
            jj++;
        }
    });

    (ee >= 2) ? resTemp = 'E' : resTemp = 'I';
    (nn >= 2) ? resTemp = resTemp + 'N' : resTemp = resTemp + 'S';
    (tt >= 2) ? resTemp = resTemp + 'T' : resTemp = resTemp + 'F';
    (jj >= 2) ? resTemp = resTemp + 'J' : resTemp = resTemp + 'P';
    
    const mbti = resTemp

    console.log(mbti)
        
    

    

    return (
        <div className="result">
            <div className="cont"> 
                
            </div>
        </div>
    )
}

export default Result