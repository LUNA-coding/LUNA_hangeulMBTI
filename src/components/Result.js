import { useLocation, useSearchParams } from "react-router-dom";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import styles from './result.css'
import data from '../common/result.json'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Result() {
    const location = useLocation();
    const [searchMbti, setSearchMbti] = useSearchParams();
    const mbti = searchMbti.get('yourMBTIis');
    let index;

    for(let i = 0; i < 16; i++){
        if(data[i].mbti === mbti){
            index = i;
            break
        }
    }

    const infoList = () => {
        const list = [];
        for (let i = 0; i < data[index].content.charac.length; i++){
            list.push(<li>{data[index].content.charac[i]}</li>);
        }
        return list;
    }

    const url = window.location.href;

    const popUp = () => {
        alert('링크가 복사되었습니다.')
    }

    

    return (
        <div className="result">
            <div className="titleC">
                <div>당신과 닮은 위인은</div>
                <div className="name">{data[index].name}</div>
            </div>
            <div className="cont"> 
                <div className="img"></div>
                <div className="phrase">"{data[index].phrase}"</div>
                <div className="quote">
                    {data[index].content.quote.split('\n').map((line) => {
                        return (
                            <span>
                                {line}
                                <br />
                            </span>
                        )
                    })}
                </div>
                <hr />
                <div className="char-header">'{data[index].name}'을(를) 닮은 당신은? </div>
                <ul className="char">{infoList()}</ul>
                <hr />
                <div className="info">
                    {data[index].content.info.split('\n').map((line) => {
                        return (
                            <span>
                                {line}
                                <br />
                            </span>
                        )
                    })}
                </div>

                <Link to='/'><div className="btn _1">다시하기</div></Link>
                <CopyToClipboard text={url}><div className="btn _2" onClick={popUp}>링크복사</div></CopyToClipboard>
                
            </div>

            <div className="logo">세상을 여는 문, 루나</div>
        </div>
    )
}

export default Result;