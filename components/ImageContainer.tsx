"use client"
import { NekoType } from "@/app/page"
import Card from "./Card"
import useFetch from "@/hooks/useFetch"

const ImageContainer = ({ category }: { category: string }) => {
    const { images } = useFetch(category)
    return (
        <>
            {category !== "" ? (
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex justify-center items-center">
                        <p className="text-white font-bold">
                            Category:{" "}
                            <span className="text-white text-lg font-black uppercase">
                                {category}
                            </span>
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        {images?.results?.map((image: NekoType) => (
                            <Card
                                imgSrc={image.url}
                                title={
                                    image.artist_name ?? image.anime_name ?? ""
                                }
                                description={image.artist_ref}
                                source_url={image.source_url}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="w-2/3 flex flex-col justify-center items-center border-2">
                    Select a category!
                </div>
            )}
        </>
    )
}

export default ImageContainer
