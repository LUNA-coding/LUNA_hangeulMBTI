import Page from "./Page";
import styles from './Survey.css';
import questions from '../common/Qlist.json';
import { useSearchParams } from "react-router-dom";
import { useEffect,useState } from "react";

function Survey() {
    
    let [searchParams, setSearchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    const res = searchParams.get('res')
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(data)
    }, [data])
    
    const next = (e) => {
        setData(data => {
            data = [...data, e.target.value]
            return data
        } )
        
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
                <button onClick={next} value={questions[id].answers[0].type}>{questions[id].answers[0].content}</button>
                <button onClick={next} value={questions[id].answers[0].type}>{questions[id].answers[1].content}</button>
            </div>
            <Page />
        </div>
    )
}

export default Survey;