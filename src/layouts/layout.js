import * as React from "react"
import {Link} from "gatsby";

export const Contain = ({children, className}) => (
    <div className={'w-full max-w-6xl mx-auto ' + className}>
        {children}
    </div>
)

export const Layout = ({children}) => (
    <div className='bg-white w-full min-h-screen mx-auto'>
        <Contain className='mb-5 border-b border-gray-100 py-6 px-6 rounded'>
            <div className="flex items-center justify-between">
                <Link to='/' className='py-1'>
                    <div className='italic text-lg'>Mojtabaa H.N.</div>
                </Link>
                <div className="flex space-x-12">
                    <Link to='/cv' className=''>
                        <i className="bx bx-user text-xl mr-2 relative bottom-[-2px]"></i>
                        <span>Porfolio</span>
                    </Link>
                    <a className='' href='https://github.com/mojtabaahn'>
                        <i className="bx bxl-github text-xl mr-2 relative bottom-[-2px]"></i>
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </Contain>
        {children}
        {/*<Contain className='my-5 border border-gray-100 py-2 px-6 rounded text-center text-gray-600 italic'>*/}
        {/*    Good Game Well Played!*/}
        {/*</Contain>*/}
    </div>
)
