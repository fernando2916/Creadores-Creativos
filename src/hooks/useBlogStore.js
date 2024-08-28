import creadoresApi from "@/api/CreadoresApi";
import { onCheckPost, onGetPost, onGetPosts } from "@/store";
import { useDispatch, useSelector } from "react-redux"

export const useBlogStore = () => {
    const { loading, posts, post} =  useSelector(state => state.blog)
    const dispatch = useDispatch();

    const startGetPost = async() => {
        dispatch(onCheckPost())

        try {
            const {data} = await creadoresApi.get('/blog')
            dispatch(onGetPosts(data.data))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getPost = async({identifier}) => {
        dispatch(onCheckPost())
        try {
            const {data} = await creadoresApi.get(`/blog/${identifier}`)
            dispatch(onGetPost(data.data))
        } catch (error) {
            console.log(error)
        }
    }

    return {
        //* Propiedades
        loading,
        posts,
        post,



        //* Métodos
        startGetPost,
        getPost        
    }
}