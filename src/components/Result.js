import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './result.css'
import data from '../common/result.json'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactGA from "react-ga";

function Result() {
    const [searchMbti] = useSearchParams();
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

    console.log(data[index].img)

    ReactGA.event({
        category: "페이지 이동",
        action: "위인 결과 페이지",
        label: data[index].name
    });

    return (
        <div className="result">
            <div className="titleC">
                <div>당신과 닮은 위인은</div>
                <div className="name">{data[index].name}</div>
            </div>
            <div className="cont"> 
                <div className="img"><img src={data[index].img} alt="" /></div>
                <div className="phrase">"{data[index].phrase}"</div>
                <div className="quote">
                    {data[index].content.quote.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </div>
                <hr />
                <div className="char-header">'{data[index].name}'을(를) 닮은 당신은? </div>
                <ul className="char">{infoList()}</ul>
                <hr />
                <div className="info">
                    {data[index].content.info.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </div>
                <hr />
                <div className="promotion">
                    <div className="pro-title">루나의 프로젝트, 한글을 세계로.</div>
                    <div className="pro-cont">
                        한국디지털미디어고등학교의 IT소셜벤처 동아리, 루나는 현재 <span>한글의 소중함</span>을 세상에 더욱 알리기 위한 프로젝트를 진행중입니다.
                        나와 닮은 한글 위인 찾기 테스트를 재밌게 진행하셨다면, <span>저희 프로젝트에 참여하여 함께 한글을 알려보아요!</span>
                    </div>
                    <div className="pro-sub">루나의 프로젝트에 관심이 있다면?</div>
                    <div className="funding">
                        <div className="btn" onClick={() => {
                            ReactGA.event({
                                category: "버튼 클릭",
                                action: "펀딩 사이트 이동",
                            });                            

                            window.open('https://tumblbug.com/luna_hangeul_2022', '_blank')
                        }}>펀딩하러 가기</div>
                    </div>
                </div>

                <hr />

                <Link to='/'><div className="btn _1">다시하기</div></Link>
                <CopyToClipboard text={url}><div className="btn _2" onClick={popUp}>링크복사</div></CopyToClipboard>
                
            </div>

            <div className="logo">세상을 여는 문, 루나</div>
        </div>
    );
}

export default Result;
