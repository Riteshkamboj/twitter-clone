import React from 'react'
import Image from "next/image";
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
const FeedCard: React.FC = () => {
    return (
    <div className='border border-l-0 border-r-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
        <div className="grid grid-cols-12 gap-3">
            <div className='col-span-1'>
                <Image src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="user-image" height={50} width={50} />
            </div>
            <div className='col-span-11'>
                <h5>Ritesh Kumar</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsum accusantium necessitatibus molestias unde tempore aut animi eius</p>
                <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%]'>
                    <div> <BiMessageRounded /> </div>
                    <div> <FaRetweet /> </div>
                    <div> <AiOutlineHeart /> </div>
                    <div> <BiUpload /> </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default FeedCard;