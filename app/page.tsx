"use client"
import { Suspense, useEffect, useState } from "react"
import ImageContainer from "@/components/ImageContainer"
import GradientButton from "@/components/GradientButton"
import { AiFillCloseCircle } from "react-icons/ai"
import { PiListFill } from "react-icons/pi"

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
    const [showCategories, setShowCategories] = useState<boolean>(false)

    const handleSelectCategory = (category: string) => {
        setCategory(category)
        setShowCategories(false)
    }
    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])
    return (
        <main className="min-h-screen w-full flex items-start justify-center">
            <div className="nav-icon fixed left-2 top-2 p-2 bg-gradient-to-br from-[#97FEED] to-[#0B666A] via-[#35A29F] rounded-full drop-shadow-md hover:bg-[#D25380] transition ease-in duration-70">
                <PiListFill
                    className="text-white"
                    onClick={(e: EventListener) => setShowCategories(true)}
                />
            </div>
            {showCategories && (
                <div
                    className="custom-scrollbar fixed w-full md:w-[20%] h-screen overflow-y-auto overflow-x-hidden flex flex-col justify-start
         items-center gap-2 bg-gradient-to-br from-[#071952] to-[#35A29F] via-[#0B666A] z-40 inset-0 "
                >
                    <div className="pt-4 px-8 w-full flex justify-between items-center">
                        <p className="text-xl font-bold uppercase text-white drop-shadow-md">
                            Categories
                        </p>
                        <AiFillCloseCircle
                            className="text-white hover:text-[#D25380] transition ease-in duration-70"
                            onClick={(e: EventListener) =>
                                setShowCategories(false)
                            }
                        />
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
                        {categories?.map(
                            (categoryItem: string, index: number) => (
                                <button
                                    className="w-full p-2 bg-white/20 rounded-lg text-start text-white uppercase hover:bg-white/30 transition ease duration-70"
                                    onClick={(e) =>
                                        handleSelectCategory(categoryItem)
                                    }
                                    key={index}
                                >
                                    {categoryItem}
                                </button>
                            )
                        )}
                    </div>
                </div>
            )}

            <div className="w-[50%] flex justify-center md:absolute md:left-[500px]">
                <Suspense fallback={<div>Loading...</div>}>
                    <ImageContainer category={category} />
                </Suspense>
            </div>
        </main>
    )
}

export default Home
