"use client"
import { NekoType } from "@/app/page"
import Card from "./Card"
import useFetch from "@/hooks/useFetch"

const ImageContainer = ({ category }: { category: string }) => {
    const { images } = useFetch(category)
    return (
        <>
            {category !== "" ? (
                <div className=" w-full flex flex-col items-center justify-center gap-4 py-4">
                    <div className=" w-full flex justify-center items-center text-white bg-white/20 p-4 rounded-md">
                        <p className="font-bold">
                            Category:{" "}
                            <span className="text-lg font-black uppercase">
                                {category}
                            </span>
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2 ">
                        {images?.results?.map(
                            (image: NekoType, key: number) => (
                                <Card
                                    imgSrc={image.url}
                                    title={
                                        image.artist_name ??
                                        image.anime_name ??
                                        ""
                                    }
                                    description={image.artist_ref}
                                    source_url={image.source_url}
                                    key={key}
                                />
                            )
                        )}
                    </div>
                </div>
            ) : (
                <div className="w-full h-screen flex flex-col justify-center items-center">
                    <p className="text-white text-4xl font-bold">Select a category!</p>
                </div>
            )}
        </>
    )
}

export default ImageContainer
