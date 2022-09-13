import { useLocation } from "react-router-dom";

function Result() {
    const location = useLocation();
    const result = [...location.state.result];
    
    let E, N, T, J = 0

    result.forEach((item) => {
        console.log(item)
    })

    return (
        <div>
            <div> {result} </div>
        </div>
    )
}

export default Result