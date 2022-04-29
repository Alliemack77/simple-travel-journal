import {BiWorld} from 'react-icons/bi'

const Header = () => {

    return (
        <header className="header flex align-center justify-center" style={{gap: ".25rem"}}>
            <BiWorld/>
            <h1 className="fs-400 fw-500 text-white">my travel journal</h1>
        </header>
    )
}

export default Header