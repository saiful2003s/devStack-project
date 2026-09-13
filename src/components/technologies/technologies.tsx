import { use, useState } from 'react';
import type { Itechnology } from '../../types/technologyType';
import AllTechnologies from './allTechnologies';
import Stack from './stack';
import { toast } from "react-toastify";


interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    // console.log(technologies);

    const [stack, setStack] = useState<Itechnology[]>([])

    const addToStack = (technology: Itechnology) => {
        const alreadyAdded = stack.some(
            (item) => item.id === technology.id
        )

        if (alreadyAdded === true) {
            return toast.warning(`${technology.name} is already added!`)
        }
        setStack([...stack, technology])

        toast.success(`${technology.name} is added successfully`)

    }

    const handleRemoveItem = (id: Itechnology['id']) => {

        const removedItem = stack.find(
            (technology) => technology.id === id
        )

        setStack((currentStack) => currentStack.filter(
            (technology) => technology.id !== id
        ))

        toast.error(`${removedItem?.name} has been removed`)

    }

    const handleRemoveAll = () => {
        setStack([])

        toast.error("All item removed from stack");
    }


    return (

        <div className='mx-10 my-20'>
            <div className='container mx-auto '>
                <div className='section-title'>
                    <h2 className='font-extrabold text-[36px] leading-10 tracking-[-0.9px] text-[#0F172A]'>Explore the
                        <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'> Technologies</span></h2>
                    <p className='text-[#64748B] text-[16px] leading-6 mb-6 mt-2'>Pick one technology per category to build your ideal stack.</p>
                </div>

                <div className='grid grid-cols-4 gap-5'>
                    <div className='col-span-3'>
                        <AllTechnologies technologies={technologies} addToStack={addToStack} stack={stack} />
                    </div>
                    <div>
                        <Stack stack={stack} handleRemoveItem={handleRemoveItem} handleRemoveAll={handleRemoveAll} />
                    </div>
                </div>


                <div>

                </div>
            </div>

        </div>




    );
};

export default Technologies;




