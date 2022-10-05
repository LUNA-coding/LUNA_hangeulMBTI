import { useSearchParams } from "react-router-dom";



function Page() {
    let [searchParams, setSearchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    return (
        <div className="p_C">
            <div className="p_num">
                {id+1} / 12
            </div>
            <ul className="page">
                <li className={id == 0 ? 'selected' : 'unselected'}>ㄱ</li>
                <li>
                    <div className={id == 1 ? 'selected' : 'unselected'}>ㄴ</div>
                </li>
                <li>
                    <div className={id == 2 ? 'selected' : 'unselected'}>ㄷ</div>
                </li>
                <li>
                    <div className={id == 3 ? 'selected' : 'unselected'}>ㄹ</div>
                </li>
                <li>
                    <div className={id == 4 ? 'selected' : 'unselected'}>ㅁ</div>
                </li>
                <li>
                    <div className={id == 5 ? 'selected' : 'unselected'}>ㅂ</div>
                </li>
                <li>
                    <div className={id == 6 ? 'selected' : 'unselected'}>ㅅ</div>
                </li>
                <li>
                    <div className={id == 7 ? 'selected' : 'unselected'}>ㅇ</div>
                </li>
                <li>
                    <div className={id == 8 ? 'selected' : 'unselected'}>ㅈ</div>
                </li>
                <li>
                    <div className={id == 9 ? 'selected' : 'unselected'}>ㅊ</div>
                </li>
                <li>
                    <div className={id == 10 ? 'selected' : 'unselected'}>ㅋ</div>
                </li>
                <li>
                    <div className={id == 11 ? 'selected' : 'unselected'}>ㅌ</div>
                </li>
            </ul>
        </div>
    )
}

export default Page;