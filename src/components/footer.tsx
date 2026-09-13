// import React from 'react';
import logo from "../assets/logo.png"
import { GoDotFill } from "react-icons/go";

const Footer = () => {
    return (
        <>

            <div className="divider"></div>
            <div className="container mx-auto">
                <div className='my-10 mx-5 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-3'>

                    <div className="text-center md:text-left">
                        <div className='flex gap-2 items-center justify-center md:justify-start mb-3'>
                            <img src={logo} alt="dev stack logo" className='' />
                            <p className='text-[#0F172A] font-bold text-[30px] md:text-[20px]'>Dev <span className='text-[#DB2777]'>Stack</span></p>
                        </div>
                        <p className="text-[#64748B] mb-3">Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <div className="text-[#4B5563] md:text-black md:font-semibold flex items-center justify-center md:justify-start">
                            <a className="mr-3" href="#">GitHub</a><GoDotFill className="mx-3 md:hidden text-black" />
                            <a className="mr-3" href="#">Twitter</a><GoDotFill className="mx-3 md:hidden text-black" />
                            <a className="mr-3" href="#">LinkedIn</a>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <h4 className="mb-3 text-[#0F172A] font-bold">PRODUCTS</h4>
                        <ul className="text-[#64748B]">
                            <li className="mb-1.5"><a href="#">Home</a></li>
                            <li className="mb-1.5"><a href="#">Technologies</a></li>
                            <li className="mb-1.5"><a href="#">Projects</a></li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h4 className="mb-3 text-[#0F172A] font-bold">COMPANY</h4>
                        <ul className="text-[#64748B]">
                            <li className="mb-1.5"><a href="#">About</a></li>
                            <li className="mb-1.5"><a href="#">Contact</a></li>
                            <li className="mb-1.5"><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h4 className="mb-3 text-[#0F172A] font-bold">LEGAL</h4>
                        <ul className="text-[#64748B]">
                            <li className="mb-1.5"><a href="#">Privacy Policy</a></li>
                            <li className="mb-1.5"><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>
                <div className="divider"></div>

                <div className="flex justify-between items-center m-5">
                    <div className="text-[#94A3B8]">© 2026 Dev Stack. All rights reserved.</div>
                    <div className="text-[#94A3B8]">
                        <a href="#" className="mr-10">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Footer;