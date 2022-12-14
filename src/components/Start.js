import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../components/Start.css';

function Start() {
    const [, setCount] = useState(0);

    useEffect(() => {
        let visitCount = localStorage.getItem('page_view');
        visitCount = 1;
        localStorage.setItem('page_view', 1);
        visitCount = Number(visitCount) + 1;

        localStorage.setItem('page_view', visitCount);

        let current = 0;
        const counter = setInterval(() => {
        current += 1;
        setCount(current);
        if (current > visitCount) {
            // 나중에 실제 참여사용자 수로 대체
            clearInterval(counter);
        }
        }, 500);
    }, []);

    return (
        <div className="Root">
            <div className="Start">
                <form>
                <div className="titleCont">
                    <div className="title">
                    나와 닮은 위인은 <br /> 누구일까?{' '}
                    </div>
                    <div>한글편</div>
                </div>

                <div className="deco"></div>

                <div className="btnCont">
                    <Link to="/test?id=0">
                    <button className="startBtn" type="submit">
                        시작하기
                    </button>
                    </Link>
                    {/* <div className='join'>{count}명 참여</div> */}
                    <div className="copy">
                    &copy;이 테스트의 저작권은 2022 루나에게 있습니다.
                    </div>
                </div>

                <img src="/img/bk_h.png" alt="" className="bkimg" />
                </form>
            </div>
        </div>
    );
}

export default Start;
