import Page from "./Page";
import styles from './Survey.css'

function Survey() {
    return (
        <div className="C">
            <div className="header">
                <div className="title">루나</div>
                <div className="m_title">한글 엠비티아이</div>
            </div>
            <div className="question">
                <div className="numbering">질문 1.</div>
                <div className="content">
                    두근두근 첫 등교날! <br />
                    처음보는 친구가 같이 학교를 가자고 한다면?
                </div>
            </div>
            <div className="img">
                <div className="img_test"></div>
            </div>
            <div className="ch">
                <button>잘됐다! 같이가자!</button>
                <button>조금 부담... 그래도 같이 가자</button>
            </div>
            <Page />
        </div>
    )
}

export default Survey;