import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

function Start() {
    return (
        <div>
            <form>
                <input  
                    type="text" 
                    placeholder="이름을 입력해주세요" 
                    required 
                />
                <Link to='/test?id=0&res='>
                    <button className="startBtn" type="submit">테스트 시작하기~</button>
                </Link>
            </form>
            
        </div>
    )
}

export default Start