import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='mx-3 md:mx-10 mt-10 md:mt-20'>
            <div className='container mx-auto grid md:grid-cols-2 items-center text-center md:text-left'>
                <div>
                    <h2 className='font-extrabold text-[40px] md:text-[60px] leading-15 tracking-[-1.5px]'>Build Your Ideal <br />
                        <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span> </h2>
                    <p className='my-3 md:my-10'>Explore frontend, backend, database, and tooling options,<br className='hidden md:block' />
                        compare them side by side, and put together the stack that fits your <br className='hidden md:block' />
                        next project.</p>
                    <div className='flex items-center gap-3 justify-center md:justify-start'>
                        <button className="btn bg-linear-to-r from-[#F97316] to-[#EC4899] text-white ">Explore Technologies</button>
                        <button className="btn btn-outline">Learn More</button>
                        
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;