import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import logo from '../LOGO FILE/HORIZONTAL.png'
import { navbarLogo } from '../jsonData/companyData'


function NavBar() {
    const url = useLocation()
    const [selected, setSelected] = useState('home')
    const navigate = useNavigate()

    function handleSelect(e) {
        const { name } = e.target;
        setSelected(name)
    }

    useEffect(() => {
        url.pathname === '/' ? setSelected('home') : setSelected(url?.pathname?.split('/')[1])
    }, [url])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div>
                        <Link to={'/home'}>
                            <img
                                src={navbarLogo}
                                alt="Logo"
                                width={300}
                                className='img-fluid'
                            />
                        </Link>
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ width: '30%' }}>
                        <Link className={`boxHeading ${selected === 'home' ? 'selectedNav' : ''}`} onClick={handleSelect} name='home' to={'/home'}>Home</Link>
                        <Link className={`boxHeading ${selected === 'services' ? 'selectedNav' : ''}`} onClick={handleSelect} name='services' to={'/services'} >Services</Link>
                        <Link className={`boxHeading ${selected === 'pricing' ? 'selectedNav' : ''}`} onClick={handleSelect} name='pricing' to={'/pricing'}>Pricing</Link>
                        <Link className={`boxHeading ${selected === 'about-us' ? 'selectedNav' : ''}`} onClick={handleSelect} name='about-us' to={'/about-us'}>About Us</Link>
                        <Link className={`boxHeading ${selected === 'contact' ? 'selectedNav' : ''}`} onClick={handleSelect} name='contact' to={'/contact'}>Contact</Link>
                    </div>
                    {/* <div className='d-flex gap-3 align-items-center'> */}
                    <div className='d-flex gap-3'>
                        <button className='btn btn-dark'>Login</button>
                        <button className='btn btn-success' onClick={() => navigate('/signUp')}>Sign Up</button>
                    </div>
                    {/* </div> */}
                </div>
            </nav>
        </div>
    )
}

export default NavBar