"use client"
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2';

interface ILanguage {
    id: string,
    label: string
}

const LANGUAGES: ILanguage[] = [
    { id: "EN", label: "English" },
    { id: "HN", label: "Hindi" },
    { id: "MA", label: "Malayalam" }
]



function Language() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<ILanguage>(LANGUAGES[0]);

    const handleSelect = (id: string) => {
        const language = LANGUAGES.find((item) => item.id === id);
        if (language) {
            setSelected(language);
            setIsOpen(false);
        } else {
            alert('Invalid Language');
        }
    };

    return (
        <div className="relative">
            <div className="flex items-center gap-1">
                <p className="text-sm md:text-base lg:text-lg">{selected.id}</p>
                <button
                    className={`${isOpen ? 'rotate-180' : ''
                        } text-base md:text-lg transition-all cursor-pointer`}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <HiChevronDown />
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-7 shadow-md shadow-gray-300 rounded-md p-2 left-0 bg-white z-10">
                    {LANGUAGES.map((item) => (
                        <p
                            className="hover:bg-gray-100 rounded px-2 py-1 text-sm md:text-base transition-colors duration-200"
                            onClick={() => handleSelect(item.id)}
                            key={item.id}
                        >
                            {item.label}
                        </p>

                    ))}
                </div>
            )}
        </div>
    );
}


export default Language
