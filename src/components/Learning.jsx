import { useState, useMemo, useTransition, lazy, Suspense } from 'react';
import roundUp, { timeout } from "../helper/util"
import { getDateOfBirth } from "../helper/util"
// const Admin = lazy(() => timeout(1000).then(() => import('./Admin')))  // export default

const Admin = lazy(() => timeout(2000).then(() => import('./Admin').then((module) => {
    return { default: module.Admin }
})))



export default function Learning() {
    const [open, setOpen] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [count, setCount] = useState(0)
    const [birthDate] = useState('1995-02-18')
    const [currentDate] = useState('2023-02-19');
    const [isPending, startTransition] = useTransition()
    const [students] = useState([
        {
            id: 1, name: 'Muller', email: 'robert@gmail.com', imageUrl: 'https://img.fcbayern.com/image/upload/t_cms-1x1-seo/v1629460334/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/thomas_mueller.png'
        },
        {
            id: 2, name: 'Kimmich', email: 'kimmich@gmail.com', imageUrl: 'https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_1600,c_fill/q_auto/v1656614911/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/joshua_kimmich.png'
        },
        {
            id: 3, name: 'Musiala', email: 'musiala@gmail.com', imageUrl: 'https://img.fcbayern.com/image/upload/t_cms-1x1-seo/v1627302821/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/jamal_musiala.png'
        },
        { id: 4, name: 'Lucas', email: 'musiala@gmail.com', imageUrl: 'https://i.bundesliga.com/player/dfl-obj-002g0i-dfl-clu-00000g-dfl-sea-0001k6.png' }

    ])


    const DateDifference = useMemo(() => {
        console.count('running')
        const diffTime = getDateOfBirth(birthDate, currentDate);
        return roundUp(diffTime);

    }, [birthDate, currentDate])

    // const DateDifference = () => {
    //     console.count('running')
    //     const diffTime = getDateOfBirth(birthDate, currentDate);
    //     return roundUp(diffTime);
    // }


    const handleChangeAdmin = () => {
        startTransition(() => {
            setIsAdmin(isAdmin => !isAdmin)
        });

    }



    const handleChangeCount = () => {
        setCount(count => count + 1)
    }


    return (
        < div className=' mx-auto w-full h-screen'>
            {/* <ul className='p-6 divide-y divide-slate-200 max-w-3xl mx-auto border border-slate-200 mt-10'>
            {students.map(student => (
                <li className='flex py-4 first:pt-0 last:pb-0 odd:bg-white even:bg-slate-50 hover:bg-slate-50' key={student.id}>
                    <img className="h-10 w-10 rounded-full ring-1 p-1" src={student.imageUrl} alt="" />
                    <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium text-slate-900">{student.name}</p>
                        <p className="text-sm text-slate-500 truncate">{student.email}</p>
                    </div>
                </li>

            ))}
        </ul> */}

            {/* <hr />
            <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-0.1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/> */}

            {/* <hr />

            <ul role="list">
                {students.map(student => (
                    <li className=" hover:bg-slate-100 ...">
                        <img src={student.imageUrl} alt="" className="h-10 w-10 rounded-full" />
                        <div>
                            <a href={student.url}>{student.name}</a>
                            <p>{student.email}</p>
                        </div>
                        <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href={`tel:${student.phone}`}>
                            <span className="group-hover/edit:text-gray-700 ...">Call</span>
                            <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">

                            </svg>
                        </a>
                    </li>
                ))}
            </ul> */}

            {/* <hr />

            <button onClick={() => setOpen(true)}>open</button>

            {
                open &&
                <dialog class="backdrop:bg-black flex justify-center h-screen w-full backdrop-blur">
                    <form method="dialog">
                        <input type='text' />
                    </form>
                    <button onClick={() => setOpen(false)}>close</button>
                </dialog>
            } */}

            {/* <div className="grid grid-cols-1 xxs:grid-cols-1 xs:grid-cols-2 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className='w-auto bg-green-500 h-32 flex justify-cente items-center rounded-sm'>Green</div>
                <div className='w-auto bg-blue-500 h-32 flex justify-cente items-center rounded-sm'>Blue</div>
                <div className='w-auto bg-cyan-500 h-32 flex justify-cente items-center rounded-sm'>Cyan</div>
                <div className='w-auto bg-teal-500 h-32 flex justify-cente items-center rounded-sm'>Teal</div>
                <div className='w-auto bg-yellow-500 h-32 flex justify-cente items-center rounded-sm'>Yellow</div>
                <div className='w-auto bg-red-500 h-32 flex justify-cente items-center rounded-sm'>Red</div>
            </div> */}

            {/* <hr />
            <div class="max-w-lg mx-auto p-8">
                <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
                    <summary class="text-sm leading-6 text-red-900 dark:text-white font-semibold select-none">
                        Why do they call it Ovaltine?
                    </summary>
                    <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p>The mug is round. The jar is round. They should call it Roundtine.</p>
                    </div>
                </details>
            </div> */}

            {/* <hr /> */}


            {/* <ul role="list" className='divide-y divide-slate-200 max-w-3xl mx-auto border border-slate-200 p-4'>
                {students.map(student => (
                    <li class="lg:[&:nth-child(3)]:hover:underline lg:[&:nth-child(3)]:hover:cursor-pointer flex py-4 first:pt-0 last:pb-0">
                        <img className="h-10 w-10 rounded-full ring-1 p-1" src={student.imageUrl} alt="" />
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-slate-900">{student.name}</p>
                            <p className="text-sm text-slate-500 truncate">{student.email}</p>
                        </div>
                    </li>
                ))}
            </ul> */}

            <hr />

            {/* <div class="focus-within:shadow-lg">
                <input type="text" className='border border-slate-300 focus:border-blue-500' />
            </div>

            <button class="bg-blue-200 active:bg-blue-600 rounded-sm px-2 active:cursor-pointer">
                Submit
            </button>

            <a href="https://seinfeldquotes.com" className="text-blue-500 visited:text-purple-700">
                Inspiration
            </a> */}

            {/* <input type="checkbox" class="appearance-non indeterminate:bg-gray-300 " /> */}

            {/* <input min="1" max="5" class="border border-slate-300 in-range:border-green-500 out-of-range:border-red-500 outline-none" /> */}


            {/* <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div>
                    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
                    </span>
                </div>
                <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div> */}

            {/* <div class="w-full h-screen mx-auto"> */}
            {/* <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className='w-full aspect-video hover:aspect-square' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            {/* <iframe src="https://www.youtube.com/embed/9jAAZWQRGQ8" className='w-[100%] h-[100%] object-cover' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* </div> */}

            {/* simplified React Practice */}


            <span>{DateDifference}</span> <br /> <br />
            {/* <span>{DateDifference()}</span> <br /> <br /> */}
            {/* <button className='border border-slate-300 px-1 py-1 w-20 text-xl' onClick={() => setCount(count + 1)}>{count}</button> */}

            <h1>Hello world</h1>

            <button onClick={handleChangeAdmin} className='border border-slate-400 px-1 py-1 rounded-md text-xl w-40 mr-4'>Toggle Admin</button>
            <div>{isPending && <span>Loading...</span>} </div>

            <Suspense fallback={<h1>loading</h1>}>
                {isAdmin ? <Admin /> : <span>Not Admin</span>}
            </Suspense>


        </div>
    )
}
// https://www.youtube.com/watch?v=p__JLP4ExQ4