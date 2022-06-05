import * as React from "react"
import {useEffect} from "react";
import {navigate} from "gatsby";


export default () => {
    useEffect(async () => await navigate('/cv'), [])
    return null
}