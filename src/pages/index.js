import {useEffect} from "react"
import {navigate} from "gatsby";


const Index = () => {
    useEffect(() => {
        async function redirect() {
            return await navigate('/blog');
        }

        redirect()
    }, [])
    return null
}
export default Index