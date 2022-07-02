import * as React from "react"
import {Link} from "gatsby";

export const Contain = ({children, className}) => (
    <div className={'w-full max-w-6xl mx-auto px-5 ' + className}>
        {children}
    </div>
)

const Header = () => (
    <div className="flex items-center justify-between">
        <Link to='/' className='py-1'>
            <div className='italic text-lg'>Mojtabaa H.N.</div>
        </Link>
        <div className="flex space-x-4 lg:space-x-12">
            <Link to='/cv' className=''>
                <i className="bx bx-user text-xl relative bottom-[-2px]"></i>
                <span className='hidden lg:inline ml-2'>Porfolio</span>
            </Link>
            <a className='' href='https://github.com/mojtabaahn'>
                <i className="bx bxl-github text-xl relative bottom-[-2px]"></i>
                <span className='hidden lg:inline
                 ml-2'>Github</span>
            </a>
        </div>
    </div>
)
export const Layout = ({children}) => (
    <div className='bg-white w-full min-h-screen mx-auto'>
        <Contain className='mb-5 border-b border-gray-100 py-6 px-6 rounded'>
            <Header />
        </Contain>
        {children}
    </div>
)
