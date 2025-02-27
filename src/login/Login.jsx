import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import nammQi from '../assets/nammQi.mp4';
import loginHok from '../Hooks/loginHok';
import getNotify from '../Hooks/Notify';
function Login() {
    const [admin, setAdmin] = useState(true)

    const { notify } = getNotify()
    const nav = useNavigate();
    const { mutate } = loginHok(
        () => {
            if (admin) {
                nav('/admin')
            }
            else if(!admin) {
                nav('/profile')
            }
            document.location.reload()
        },
        (error) => {
            console.log(error);
            
            if (error?.response?.data?.error === "Foydalanuvchi topilmadi") {
                notify('err', "Hisob topilmadi")
            }
            else if (error?.response?.data?.error === "Noto'g'ri parol") {
                notify('err', "Parol xato")
            }
            // else {
            //     notify('err',
            //         `${error?.response?.data?.detail || "Qandeydur xatolik"}`
            //     )
            // }
        }
    );
    const [loginData, setLoginData] = useState({ username: "", password: "" })
    const onchange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const onsumbit = async (e) => {
        e.preventDefault()
        try {
            await mutate(loginData)
        } catch (error) {
            console.error('error', error);
        }
    }
    const [aye ,setAye] = useState(false)

    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <form onSubmit={onsumbit} className=' py-12 rgb lg:w-[40%] md:w-[60%]  w-full sm:mx-6 mx-4 max-sm:px-6 text-white p-8  rounded-lg  gap-6 relative animate-border-draw'>
                <NavLink to={'/'} className='text-2xl absolute top-6 '><i class="fa-solid fa-arrow-left"></i></NavLink>
                <h1 className='text-2xl text-center font-semibold'>Tizimga kirish O'tish</h1>
                <div className='flex flex-col gap-6 '>
                    <label>
                        <span>Foydalanuvchi nomi</span><br />
                        <input onChange={onchange} name='username' type="text" className='mt-1 bg-white text-slate-800 w-full py-1  px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Foydalanuvchi nomi' />
                    </label>
                    <label className='relative'>
                        <span>parol</span><br />
                        <input onChange={onchange} name='password' type={aye?"text":"password"} className='mt-1 bg-white text-slate-800 w-full py-1  px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='parolni kiriting' />
                        <span onClick={()=>setAye(!aye)} className='absolute top-[54%] right-2 cursor-pointer text-[#244760]'>{aye ? <i class="fa-solid fa-eye"> </i>:<i class="fa-solid fa-eye-slash"></i>}</span>

                    </label>

                </div>

                <button className='w-full bg-white mt-6 py-1 text-slate-800 font-semibold'>Yuborish</button>
            </form>
            <video autoPlay muted className='object-cover h-full w-full absolute top-0 left-0 -z-10'>
                <source src={nammQi} />
            </video>
        </div>
    )
}

export default Login
