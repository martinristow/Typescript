import Navigation from "./Components/Navigation.tsx";
import PeopleToFollow from "./Components/PeopleToFollow.tsx";
import TrendsList from "./Components/TrendsList.tsx";
import TopicsList from "./Components/TopicsList.tsx";
import {BlogProvider} from "./shared/BlogContext.tsx";
// import {IoMdAddCircle} from "react-icons/io";
import {useState} from "react";
// import {Blog} from "./types.ts";
import Modal from "./Components/Modal.tsx";
import BlogForm from "./Components/BlogForm.tsx";

const App = () => {

    const [isModalOpen, setModelOpen] = useState(false);
    // const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

    // const openModalForNewBlog = () => {
    //     setEditingBlog(null);
    //     setModelOpen(true);
    // }

    // const openModalForEdit = () => {
    //     setEditingBlog(blog);
    //     setModelOpen(true);
    // }


    return (
        <div>
            <BlogProvider>
                <Navigation/>

                <div className='flex justify-center'>

                    <section className="mx-auto p-6">
                        <div>
                            {/*<button onClick={openModalForNewBlog}*/}
                            {/*        className='ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4'>*/}
                            {/*    Add New Blog <IoMdAddCircle className='ml-[0.5rem]'/>*/}
                            {/*</button>*/}

                            {/* Article List */}

                            {isModalOpen && <Modal onClose={() => setModelOpen(false)}>
                                <BlogForm/>
                            </Modal>}


                        </div>
                    </section>

                    <div className="w-[30%">
                        <PeopleToFollow/>
                        <TrendsList/>
                        <TopicsList/>
                    </div>
                </div>
            </BlogProvider>
        </div>
    )
}
export default App
