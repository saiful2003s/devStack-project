import logo from '../assets/logo.png'
import hamburgur from '../assets/hamburger.png'


const Nav = () => {
    return (

        <div className="sticky top-0 z-50 max-lg:collapse bg-white md:mx-10 mx-3 my-4 md:mb-48 shadow-sm rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <img src={hamburgur} alt="" />
                    </label>
                    <div className='flex gap-2 items-center lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto'>
                        <img src={logo} alt="dev stack logo" className='' />
                        <p className='text-[#0F172A] font-bold text-[20px]'>Dev <span className='text-[#DB2777]'>Stack</span></p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-[#DB2777] "><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost">Sign In</button>
                    <button className="btn bg-[#D91B7E] rounded-full text-white">Sign Up</button>
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    <li className="text-[#DB2777] "><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>

    );
};

export default Nav;