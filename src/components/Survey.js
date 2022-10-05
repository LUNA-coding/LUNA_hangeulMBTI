import Page from "./Page";
import styles from './Survey.css';
import questions from '../common/Qlist.json';
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function calResult(params) {
    const resData = [...params.get('res')];

    let ee = 0, nn = 0, tt = 0, jj = 0;

    let resTemp = '';

    
    resData.forEach((item) => {
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
    console.log(mbti)

    return mbti;
}

function Survey() {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    const res = searchParams.get('res');
    const navigate = useNavigate();

    useEffect(() => {

        if(res.length == 12){
            navigate(`/result?yourMBTIis=${calResult(searchParams)}`);
        };
    }, [res])
    
    const next = (e) => {
        
        let temp
        if (id == 11){
            temp = id
            setSearchParams({ id: temp, res: res + e.target.value })
        }else{
            temp = id + 1
            setSearchParams({ id: temp, res: res + e.target.value })
        }
    }
    
    
    
    return (
        <div className="Root">
            <div className="Survey">
                <div className='C'>
                    <div className='header'>
                        <div className='title'>루나</div>
                        <div className='m_title'>한글 엠비티아이</div>
                    </div>
                    <div className='question'>
                        <div className='numbering'>질문 {questions[id].id + 1}.</div>
                        <div className='content'>
                            {questions[id].question.split('\n').map((line) => {
                                return (
                                    <span>
                                        {line}
                                        <br />
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="img_test">
                        <img src={questions[id].imgSrc} alt="" />
                    </div>
                    <div className='ch'>
                        <button onClick={next} value={questions[id].answers[0].type}>{questions[id].answers[0].content}</button>
                        <button onClick={next} value={questions[id].answers[1].type}>{questions[id].answers[1].content}</button>
                    </div>
                    <Page />
                </div>
            </div>
        </div>
        
        
    )
}

export default Survey;