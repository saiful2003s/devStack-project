import React, { use } from 'react';
import type { Itechnology } from '../../types/technologyType';
import AllTechnologies from './allTechnologies';


interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    console.log(technologies);



    return (

        <div className='mx-10 mt-20'>
            <div className='container mx-auto '>
                <div className='section-title'>
                    <h2 className='font-extrabold text-[36px] leading-10 tracking-[-0.9px] text-[#0F172A]'>Explore the
                        <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'> Technologies</span></h2>
                    <p className='text-[#64748B] text-[16px] leading-6 mb-6 mt-2'>Pick one technology per category to build your ideal stack.</p>
                </div>

                <div>
                    <AllTechnologies technologies={technologies} />
                </div>
                <div>
                    
                </div>
            </div>

        </div>




    );
};

export default Technologies;