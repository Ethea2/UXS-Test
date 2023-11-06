"use client"
import { Suspense, useEffect, useState } from "react"
import ImageContainer from "@/components/ImageContainer"

export interface NekoType {
    artist_ref: string
    artist_name?: string
    anime_name?: string
    source_url: string
    url: string
}

const getCategories = async () => {
    const response = await fetch("https://nekos.best/api/v2/endpoints")
    const consumed = await response.json()
    const consumedArray = Object.keys(consumed)
    return consumedArray
}

const Home = () => {
    const [category, setCategory] = useState<string>("")
    const [categories, setCategories] = useState<any>()
    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])
    return (
        <main className="min-h-screen w-full p-10 flex justify-center items-start gap-8">
            <div className="w-[50%]">
                <Suspense fallback={<div>Loading...</div>}>
                    <ImageContainer category={category} />
                </Suspense>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-[#C0EEF2]/40 to-[#E9F8F9]/40 p-2 rounded-lg">
                <div className="w-full text-center">
                    <p className="text-xl font-bold uppercase text-white drop-shadow-md">
                        Categories
                    </p>
                </div>
                <div className="w-fit flex flex-wrap justify-center items-center gap-2">
                    {categories?.map((category: string, index: number) => (
                        <p
                            className="w-[100px] p-2 text-center bg-[#E9F8F9]/50 rounded-sm cursor-pointer"
                            onClick={() => setCategory(category)}
                            key={index}
                        >
                            {category}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Home
