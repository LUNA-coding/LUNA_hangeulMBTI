import Page from './Page';
import questions from '../common/Qlist.json';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { mbtiState } from '../state/mbti';
import ReactGA from "react-ga";

import './Survey.css';

function calResult(mbti) {
    let ee = 0,
        nn = 0,
        tt = 0,
        jj = 0;

    let resTemp = '';

    mbti.forEach((item) => {
        if (item === 'E') {
            ee++;
        } else if (item === 'N') {
            nn++;
        } else if (item === 'T') {
            tt++;
        } else if (item === 'J') {
            jj++;
        }
    });

    ee >= 2 ? (resTemp = 'E') : (resTemp = 'I');
    nn >= 2 ? (resTemp = resTemp + 'N') : (resTemp = resTemp + 'S');
    tt >= 2 ? (resTemp = resTemp + 'T') : (resTemp = resTemp + 'F');
    jj >= 2 ? (resTemp = resTemp + 'J') : (resTemp = resTemp + 'P');

    const result = resTemp;
    console.log(result);

    return result;
}

function Survey() {
    const [mbti, setMbti] = useRecoilState(mbtiState);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    const navigate = useNavigate();

    useEffect(() => {
        if (id === 12) {
            navigate(`/result?yourMBTIis=${calResult(mbti)}`);
        }
    }, [id, mbti, navigate]);

    const next = (e) => {
        let temp;
        if (id > 11) {
            temp = id;
            setSearchParams({ id: temp });
        } else {
            temp = id + 1;
            setSearchParams({ id: temp });
            setMbti([...mbti, e.target.value]);
        }
    };

    ReactGA.event({
        category: "페이지 이동",
        action: "설문조사 페이지",
        label: id
    });

    return (
        <div className="Root">
            <div className="Survey">
                <div className="C">
                    <div className="header"></div>
                    <div className="question">
                        <div className="numbering">질문 {questions[id].id + 1}.</div>
                        <div className="content">
                        {questions[id].question.split('\n').map((line, idx) => {
                            return (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                            );
                        })}
                        </div>
                    </div>
                    <div className="img_test">
                        <img src={questions[id].imgSrc} alt="" />
                    </div>
                    <div className="ch">
                        <button onClick={next} value={questions[id].answers[0].type}>
                        {questions[id].answers[0].content}
                        </button>
                        <button onClick={next} value={questions[id].answers[1].type}>
                        {questions[id].answers[1].content}
                        </button>
                    </div>
                    <Page />
                </div>
            </div>
        </div>
    );
}

export default Survey;
