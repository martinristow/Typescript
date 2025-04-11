import {FaUserCircle} from "react-icons/fa";

interface UserCardPropsInterface {
    index: number;
    person: string;
}


const UserCard = ({index, person}: UserCardPropsInterface) => {


    return (
        <div className='flex items-center justify-between'>
            <section className='flex items-center'>
                <FaUserCircle className='text-3xl mr-3 text-gray-500'/>
                <span>{person.name}</span>
            </section>


            <button className='px-4 py-1 text-sm rounded-full'>{person.following ? 'Following' : 'Follow'}</button>
        </div>
    )
}
export default UserCard
