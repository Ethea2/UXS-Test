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
        <main className="flex min-h-screen w-full justify-center items-start p-10">
            <Suspense fallback={<div>Loading...</div>}>
                <ImageContainer category={category} />
            </Suspense>
            <div className="w-1/3 flex flex-col justify-center items-center border-2">
                <div className="w-full border-2 border-red-500 flex justify-center items-center">
                    Categories
                </div>
                {categories?.map((category: string, index: number) => (
                    <p
                        className="w-full flex justify-center items-center text-purple-500 font-bold m-2 border-emerald-400 border-2 cursor-pointer"
                        onClick={() => setCategory(category)}
                        key={index}
                    >
                        {category}
                    </p>
                ))}
            </div>
        </main>
    )
}

export default Home
