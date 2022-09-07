import Page from "./Page";
import styles from './Survey.css';
import questions from '../common/Qlist/Qlist.json';
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Survey() {
    
    let [searchParams, setSearchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    const option = searchParams.get('option');
    

    
    const next = () => {
        let temp = id + 1
        setSearchParams({ id: temp, option: questions[temp].option })
    }
    
    
    return (
        <div className="C">
            <div className="header">
                <div className="title">루나</div>
                <div className="m_title">한글 엠비티아이</div>
            </div>
            <div className="question">
                <div className="numbering">질문 {questions[id].id + 1}.</div>
                <div className="content">
                    {questions[id].question}
                </div>
            </div>
            <div className="img">
                <div className="img_test"></div>
            </div>
            <div className="ch">
                <button onClick={next}>{questions[id].answers[0].content}</button>
                <button onClick={next}>{questions[id].answers[1].content}</button>
            </div>
            <Page />
        </div>
    )
}

export default Survey;