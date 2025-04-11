import {useState} from "react";
import {FaCamera} from "react-icons/fa";
import Tabs from "./Tabs";

export const Profile = () => {

    const [bannerUrl, setBannerUrl] = useState('https://placehold.co/1500x400');

    const [profileUrl, setProfileUrl] = useState('https://placehold.co/100');


    const handleBannerChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setBannerUrl(URL.createObjectURL(file));
        }
    }


    const handleProfileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setProfileUrl(URL.createObjectURL(file));
        }
    }

    return (
        <div className='relative w-[94%] ml-[5rem]'>
            <div className='relative'>
                <img
                    src={bannerUrl}
                    alt="Background"
                    className="w-full h-60 object-cover"
                />

                <button className='absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
                    <label htmlFor="banner-upload" className='cursor-pointer'>
                        <FaCamera size={24}/>
                    </label>

                    <input type="file" id='banner-upload' accept='image/*' className='hidden'
                           onChange={handleBannerChange}/>

                </button>
            </div>


            {/* Channel Logo */}
            <div className='flex items-center ml-4 mt-[2rem]'>
                <img src={profileUrl} alt="profile image"
                     className='w-40 h-40 object-cover rounded-full border-white relative'/>

                <button
                    className='absolute ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
                    <label htmlFor="profile-upload" className='cursor-pointer'>
                        <FaCamera size={24}/>
                    </label>

                    <input type="file" id='profile-upload' accept='image/*' className='hidden'
                           onChange={handleProfileChange}/>

                </button>
            </div>


            {/* Channel Details */}
            <div className="ml-4 mt-4">
                <h1 className="text-2xl font-bold">Martin Ristov</h1>
                <p>1M views</p>
                <p className="mt-2">
                    This is a short description of the YouTube channel. It gives an
                    overview of the content and what viewers can expect.
                </p>
                <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
                    Subscribe
                </button>
            </div>


        <Tabs/>
        </div>
    )
}
