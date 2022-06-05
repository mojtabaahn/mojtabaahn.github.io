import "boxicons/css/boxicons.min.css"
import * as React from "react"
import {Helmet} from "react-helmet";

const Heading = ({className}) => (
    <div className={className}>
        <div className="text-3xl">Mojtabaa Habibian</div>
        <div className="text-md italic text-gray-500">Software Developer</div>
    </div>
)

const ContactInfoItem = ({label, iconClass, value, href = ''}) => {
    const El = href === '' ? 'div' : 'a'
    return (
        <El href={href}>
            <div>
                <i className={iconClass + ' bx text-xl top-[3px] relative pr-1'}></i>
                <span>{label}</span>
            </div>
            <div>{value}</div>
        </El>
    )
}

const ContactInfo = () => (
    <div>
        <div className="border-b-2 text-2xl border-black">Contact Info</div>
        <div className="grid md:grid-cols-2 gap-5 py-5">
            <ContactInfoItem label='Phone' iconClass='bx-phone' value='(+98) 933 462-6112'/>
            <ContactInfoItem label='Email' iconClass='bx-at' value='mojtabaa.hn@gmail.com'/>
            <ContactInfoItem label='Location' iconClass='bx-map' value='Qom, Iran'/>
            <ContactInfoItem label='Website' iconClass='bx-globe' value='mojtabaahn.github.io' href='https://mojtabaahn.github.io/'/>
            <ContactInfoItem label='Github' iconClass='bxl-github' value='github.com/mojtabaahn' href='https://github.com/mojtabaahn'/>
            <ContactInfoItem label='Linked in' iconClass='bxl-linkedin' value='linkedin.com/in/mojtabaahn' href='https://linkedin.com/in/mojtabaahn'/>
        </div>
    </div>
)


const EducationItem = ({span, school, location, details}) => (
    <div>
        <div className='text-gray-700'>{span}</div>
        <div className='text-xl'>{school} — {location}</div>
        <div className='italic text-gray-600'>{details}</div>
    </div>
)

const Education = () => (
    <div>
        <div className="border-b-2 text-2xl border-black">Education</div>
        <div className="grid gap-5 py-5">
            <EducationItem span='1387 — 1393' school='Shahid Qodosi' location='Qom, Iran' details='High School Diploma in Math'/>
            <EducationItem span='1393 — 1399' school='University Of Mazandaran' location='Babolsar, Iran' details='Bachelor Of Science In Computer Engineering'/>
        </div>
    </div>
)

const ExperienceItem = ({span, company, href, position, stack, children}) => (
    <div>
        <div className='text-gray-700'>{span}</div>
        <a href={href} className='text-xl'> {company}, {position}</a>
        <div className='italic text-gray-600 py-3'>{children}</div>
    </div>
)

const Experience = () => (
    <div>
        <div className="border-b-2 text-2xl border-black">Experience</div>
        <div className="grid gap-5 py-5">
            <ExperienceItem span='1397 — 1399' href='https://arcademy.ir' company='Arcademy.ir' position='Co-Founder & Software Developer'>
                Arcademy is an e-learning platform founded by Amirhosein Abdollahzadeh, Mohammad Fani and I. The website had 3 major releases, All backed by Laravel framework. Our front-end implementation started with SASS and custom styles on first and second version. Our final - current - version utilized Vue.js and Inertia.js for front-end and TailwindCSS for styling. Major technical challenges we faced these years were related to tech-stack selection, methods of maintenance and development of source code, data caching for better response time, implementing integrated CRM and CMS, and better UX.
            </ExperienceItem>
            <ExperienceItem span='1399 — 1400' href='https://citek.ir' company='Citek.ir' position='Software Developer'>
                Citek group is a software development company that works on client and its own projects. in about 6 months we worked together I developed a delivery startup software using Laravel, Livewire and tailwindcss.
            </ExperienceItem>
            <ExperienceItem span='1400 — Now' href='https://basalam.com' company='Basalam.com' position='Software Developer'>
                Basalam is an e-commerce platform in retail market. Migration from monolithic to microservices was a major challenge as I entered the company. the legacy project stack was PHP/Laravel with GraphQL interface. Initially I've migrated the authentication and authorization logics to a separate microservice with PHP/Laravel/Passport stack named Auth. Later I've migrated basket management logics to a new service with Python/FastAPI backed service named Order. Main challenges we faced was communication between services after migration to microservices, optimising response time, asynchronous programming, load tests, unit testings and developing a framework on top of FastAPI and 10+ packages for better maintainability and scalability concerns.
            </ExperienceItem>
        </div>
    </div>
)

const OpenSourceItem = ({description, href}) => (
    <a href={href} className='block'>
        <i className="bx bxl-github text-xl"></i>
        <div className='text-lg'>{href.replace('https://github.com/', '')}</div>
        <div className='text-gray-700 italic'>{description}</div>
    </a>
)

const OpenSource = () => (
    <div>
        <div className="border-b-2 text-2xl border-black">Open Source</div>
        <div className="grid md:grid-cols-2 gap-5 py-5">
            <OpenSourceItem name='PHP Persian Numbers' description='Number utilities for persian language' href='https://github.com/mojtabaahn/php-persian-number-to-words'/>
            <OpenSourceItem name='Laravel Web Logs' description='View Laravel logs in browser' href='https://github.com/mojtabaahn/laravel-web-logs'/>
            <OpenSourceItem name='Fast Validate' description='Easy Data Validation For Python & Pydantic' href='https://github.com/mojtabaahn/fast-validate'/>
        </div>
    </div>
)

const CvPage = () => (
    <div className='w-full min-h-screen md:bg-slate-100 print:bg-white py-4 font-sans'>
        <Helmet>
            <title>Mojtabaa Habibian — CV</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@100;200;300;400;500;700;900&display=swap" rel="stylesheet"/>
        </Helmet>
        <div className="bg-white max-w-4xl mx-auto md:shadow print:max-w-full print:shadow-none rounded p-8 space-y-8">
            <Heading/>
            <ContactInfo/>
            <Education/>
            <Experience/>
            <OpenSource/>
        </div>
    </div>
)

export default CvPage