import {useEffect} from "react"
import {navigate} from "gatsby";

const Redirect = () => {
    useEffect(() => {
        async function redirect() {
            return await navigate('/01-hello-world');
        }

        redirect()
    }, [])
    return null
}

export default Redirect
