// import React from 'react';
import { FaStar } from "react-icons/fa";
import type { Itechnology } from '../../types/technologyType';
// import Stack from "./stack";

const badgeColors: Record<string, string> = {
    Popular: "bg-purple-100 text-purple-600",
    Easy: "bg-green-100 text-green-600",
    Fast: "bg-blue-100 text-blue-600",
    Essential: "bg-orange-100 text-orange-600",
    "Top SQL": "bg-indigo-100 text-indigo-600",
    Versatile: "bg-yellow-100 text-yellow-600",
    Containers: "bg-cyan-100 text-cyan-600",
    Design: "bg-pink-100 text-pink-600",
};

interface AllTechnologiesProps {
    technologies: Itechnology[];
    addToStack: (technology: Itechnology) => void;
    stack: Itechnology[];
}



const AllTechnologies = ({ technologies, addToStack, stack }: AllTechnologiesProps) => {
    // console.log(technologies, 'technologies from all technologies');
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                technologies.map((technology) => {

                    const isAdded = stack.some(
                        (item) => item.id === technology.id
                    )
                    return (
                        < div key={technology.id} className="card  bg-base-100 shadow-sm" >
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <img src={technology.icon} alt="" className='w-10' />
                                    <h2 className="md:hidden flex-1 text-xl font-bold my-2 text-left ml-3">{technology.name}</h2>
                                    <span className={`badge badge-xm px-3 py-1 rounded-4xl font-semibold ${badgeColors[technology.badge]}`}>{technology.badge}</span>
                                </div>
                                <h2 className="hidden md:block md:text-2xl lg:text-3xl font-bold lg:my-2">{technology.name}</h2>
                                <p className='text-[#64748B]'>{technology.description}</p>
                                <div className="divider"></div>
                                <div className='flex justify-between items-center'>
                                    <div className='px-3 py-2 bg-[#f1f5f9c1] rounded-md text-[#475569]'>{technology.category}</div>
                                    <div className='text-[#64748B]'>{technology.difficulty}</div>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-500' />
                                        <div>{technology.rating}</div>
                                    </div>
                                </div>


                                <div className="md:mt-4 lg:mt-6">
                                    <button onClick={() => addToStack(technology)}
                                        className={`btn ${isAdded ? 'bg-[#f1f5f9c1] text-[#475569]' : 'bg-[#0A0F1D] text-[#FFFFFF]'}  btn-block rounded-md`} > {isAdded ? '✓ Added to Stack' : 'Add to Stack'}</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >

    );
};

export default AllTechnologies;