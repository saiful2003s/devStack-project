// import React from 'react';
import type { Itechnology } from "../../types/technologyType";
import { CiSquareRemove } from "react-icons/ci";

interface stackProps {
    stack: Itechnology[]
}

const Stack = ({ stack }: stackProps) => {
    return (
        <div className="card card-border bg-base-100">
            <div className="card-body">
                <h2 className="card-title font-bold">
                    Your Stack
                </h2>
                {stack.length === 0 ? (
                    <div>
                        <p className="text-[#94A3B8]">
                            No technologies selected yet.
                        </p>

                        <div className="card card-dash bg-base-100">
                            <div className="card-body">
                                <p className="text-[#94A3B8]">
                                    Your stack is empty.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-[#94A3B8] mb-2">
                            {stack.length} Technology Selected
                        </p>
                        {stack.map((technology) => (

                            <div className="card bg-base-100 card-xs shadow-sm mb-2">
                                <div className="flex justify-between p-2 items-center">
                                    <div key={technology.id} className="flex gap-2">
                                        <img src={technology.icon} alt={technology.name} className="w-10" />

                                        <div>
                                            <p className="font-bold">{technology.name}</p>
                                            <p className="text-[#94A3B8]"> {technology.category} </p>
                                        </div>
                                    </div>

                                    <div><button className=""><CiSquareRemove className="text-2xl" /></button></div>

                                    

                                </div>
                            </div>
                        ))}

                        <div className="card-actions justify-end">
                            <button className="btn btn-border w-full mt-3 text-red-500 font-bold text-[15px]">
                                Remove All
                            </button>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default Stack;