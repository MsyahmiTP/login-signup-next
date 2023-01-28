import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React from 'react'

export default function signup () {
    return (
        <>
        <div className="justify-center h-screen  w-80">
            <form className='flex flex-col justify-center shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className="max-w-md font-bold mb-4">
                    <h1 className='text-center'>Masuk</h1>
                </div>
                <div className="max-w-xs p-1">
                    <label className=" text-violet-700 text-sm font-bold mb-2"> Nama </label>
                    <input className=" shadow appearance-none border rounded w-full py-2 px-3 max-w-xs text-violet-700 leading-tight focus:outline-none focus:shadow-outline"  id="username" type="text" placeholder="Masukan Nama" required></input>
                </div>
                <div className="max-w-xs p-1">
                    <label className=' text-violet-700 text-sm font-bold mb-2'>Sandi</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 max-w-xs text-violet-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Masukan Sandi" required></input>
                </div>
                <div className="max-w-xs p-2">
                    <button class="bg-violet-700 transition transform hover:-translate-y-1  w-full py-2 px-4  hover:bg-violet-900 text-white font-bold rounded">Masuk</button>
                </div>
            </form>
        </div>
        </>
    );
}