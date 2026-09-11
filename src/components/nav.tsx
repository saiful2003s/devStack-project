import logo from '../assets/logo.png'


const Nav = () => {
    return (
        <nav className='sticky z-50 top-0 mx-10 my-4'>
            <div className='flex justify-between items-center container mx-auto'>
                <div className='flex gap-2 items-center'>
                    <img src={logo} alt="dev stack logo" className='' />
                    <p className='text-[#0F172A] font-bold text-[20px]'>Dev <span className='text-[#DB2777]'>Stack</span></p>
                </div>

                <ul className='flex gap-7 font-semibold items-center'>
                    <li className="text-[#DB2777] ">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='flex gap-3 items-center'>
                    <button className="btn btn-ghost">Sign In</button>
                    <button className="btn bg-[#D91B7E] rounded-full text-white">Sign Up</button>

                </div>
            </div>
        </nav>
    );
};

export default Nav;