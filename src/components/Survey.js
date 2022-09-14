import Page from "./Page";
import styles from './Survey.css';
import questions from '../common/Qlist.json';
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Survey() {
    
    let [searchParams, setSearchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    const res = searchParams.get('res');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(res);
        if(res.length == 12){
            navigate('/result', { 
                state: { 
                    result: res
                } 
            });
        };
    }, [res])
    
    const next = (e) => {
        let temp
        if (id == 11){
            temp = id
            console.log('ogod')
            setSearchParams({ id: temp, res: res + e.target.value })
        }else{
            temp = id + 1
            setSearchParams({ id: temp, res: res + e.target.value })
        }
    }

    
    
    
    return (
        <div className="Survey">
            <div className='C'>
                <div className='header'>
                    <div className='title'>루나</div>
                    <div className='m_title'>한글 엠비티아이</div>
                </div>
                <div className='question'>
                    <div className='numbering'>질문 {questions[id].id + 1}.</div>
                    <div className='content'>
                        {questions[id].question}
                    </div>
                </div>
                <div className="img_test"></div>
                <div className='ch'>
                    <button onClick={next} value={questions[id].answers[0].type}>{questions[id].answers[0].content}</button>
                    <button onClick={next} value={questions[id].answers[0].type}>{questions[id].answers[1].content}</button>
                </div>
                <Page />
            </div>
        </div>
        
    )
}

export default Survey;