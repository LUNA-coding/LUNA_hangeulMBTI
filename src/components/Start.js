import { useState, useEffect } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import styles from '../components/Start.css';
import bg from '../img/stbg.png';


function Start() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0
        const counter = setInterval(() => {
            current += 3
            setCount(current)
            if (current > 205) { // 나중에 실제 참여사용자 수로 대체
                clearInterval(counter);
            }
        }, 30);
    }, [])
    

    return (
        <div className='Start'>
            <form>
                <div className='titleCont'>
                    <div className='title'>나와 닮은 위인은 <br /> 누구일까? </div>
                    <div>한글편</div>
                </div>
                
                <div className='btnCont'>
                    <Link to='/test?id=0&res='>
                        <button className="startBtn" type="submit">시작하기</button>
                    </Link>
                    <div className='join'>{count}명 참여</div>
                    <div className='copy'>&copy;2022 LUNA. All rights reserved.</div>
                </div>
                

                <img src={bg} alt="실패" className='img'/>
                
            </form>
        </div>
    )
}

export default Start