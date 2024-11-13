import React from 'react'
import { useParams } from 'react-router-dom'
import { useRes } from '../../../Context/useContext'
const Lessonid = () => {
    const { res, setRes } = useRes();
    const { lessonId } = useParams()
    
    return (
        <>
            <h1 className='text-2xl pt-3'>  {res[lessonId ? lessonId : 1 - 1]?.title}</h1>
            <h1 className='text-2xl '>  {res[lessonId ? lessonId : 1 - 1]?.lessonName}</h1>
            <p className='text-slate-400'>{res[lessonId ? lessonId : 1 - 1]?.lessonDesk}</p>
            <div>{res[lessonId ? lessonId : 1 - 1]?.lessonLink}</div>
            {/* {res.lessonLink && <div dangerouslySetInnerHTML={{ __html: res.lessonLink }}></div>} */}
        </>
    )
}

export default Lessonid