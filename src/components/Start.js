import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import styles from '../components/Start.css'
import bg from '../img/stbg.png'


function Start() {
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
                    <div className='join'>123142명 참여</div>
                    <div className='copy'>&copy;2022 LUNA. All rights reserved.</div>
                </div>
                

                <img src={bg} alt="실패" className='img'/>
                
            </form>
        </div>
    )
}

export default Start