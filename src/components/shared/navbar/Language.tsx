"use client"
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2';

interface ILanguage {
    id:string,
    label:string
}

const LANGUAGES:ILanguage[]=[
    {id:"EN",label:"English"},
    {id:"HN",label:"Hindi"},
    {id:"MA",label:"Malayalam"}
]



function Language() {
    const [isOpen,setIsOpen]=useState<boolean>(false)
    const [selected,setSelected]=useState<ILanguage>(LANGUAGES[0])

    const handleSelect =(id:string)=>{
        const language = LANGUAGES.find((item: ILanguage) => item.id === id)
        if(language){
            setSelected(language)
            setIsOpen(false)
        }else{
            alert("Invalid Language")
        }
    }
  return (
    <div className='relative'>
        <div className='flex items-center'>
            <p>{selected.id}</p>
            <button className={`${isOpen?'rotate-180':null} text-xl hover:cursor-pointer transition-all`} onClick={()=>setIsOpen((prev:boolean)=>!prev)}><HiChevronDown/></button>
        </div>
      {
        isOpen&&(
            <div className='absolute top-7 shadow-md shadow-gray-300 rounded-md p-2 left-0'>
                {LANGUAGES.map((item)=>{
                    return <p className='hover:cursor-pointer' onClick={()=>handleSelect(item.id)} key={item.id}>{item.label}</p>
                })}
            </div>
        )
      }
    </div>
  )
}

export default Language
