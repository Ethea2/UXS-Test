"use client"
import { Suspense, useEffect, useState } from "react"
import ImageContainer from "@/components/ImageContainer"
import GradientButton from "@/components/GradientButton"

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
        <main className="min-h-screen w-full flex items-start justify-between">
            <div
                className="fixed w-[20%] h-screen overflow-y-auto flex flex-col justify-start
         items-center gap-2 bg-[#F6C391]"
            >
                <div className="pt-4 w-full text-center">
                    <p className="text-xl font-bold uppercase text-white drop-shadow-md">
                        Categories
                    </p>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
                    {categories?.map((categoryItem: string, index: number) => (
                        <div
                            className={`w-[80%] transition ease-in duration-100 ${
                                categoryItem === category ? " ml-6" : ""
                            } `}
                            onClick={() => setCategory(categoryItem)}
                            key={index}
                        >
                            <GradientButton category={categoryItem} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute left-[500px]">
                <Suspense fallback={<div>Loading...</div>}>
                    <ImageContainer category={category} />
                </Suspense>
            </div>
        </main>
    )
}

export default Home
