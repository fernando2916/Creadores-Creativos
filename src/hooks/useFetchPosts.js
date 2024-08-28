import creadoresApi from '@/api/CreadoresApi'
import useSWR from 'swr'


const fetcher = () => creadoresApi('/blog').then((data) => data.data)
export const useFetchPosts = () => {
    const {data, error} = useSWR('/blog', fetcher)
    
    return { data, error, loading: !data && !error} 
}

