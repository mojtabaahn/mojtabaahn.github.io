import {useEffect} from "react"
import {navigate} from "gatsby";


const Index = () => {
    useEffect(() => {
        async function redirect() {
            return await navigate('/feed');
        }

        redirect()
    }, [])
    return null
}
export default Index