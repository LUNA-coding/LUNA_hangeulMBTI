import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './result.css'
import data from '../common/result.json'

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
    
    const mbti = resTemp;
    
    let index;

    for(let i = 0; i < 16; i++){
        if(data[i].mbti === mbti){
            index = i;
            break
        }
    }

    console.log(data[index].mbti)

    

    return (
        <div className="result">
            <div className="titleC">
                <div>당신과 닮은 위인은</div>
                <div>{data[index].name}</div>
            </div>
            <div className="cont"> 
                <div className="img"></div>
            </div>
        </div>
    )
}

export default Result;