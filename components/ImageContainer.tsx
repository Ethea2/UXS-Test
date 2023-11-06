"use client"
import { NekoType } from "@/app/page"
import Card from "./Card"
import useFetch from "@/hooks/useFetch"

const ImageContainer = ({ category }: { category: string }) => {
    const { images } = useFetch(category)
    return (
        <>
            {category !== "" ? (
                <div className="w-2/3 flex flex-col justify-center items-center border-2">
                    <div className="flex justify-center items-center w-full">
                        {category}
                    </div>
                    {images?.results?.map((image: NekoType, index: number) => (
                        <Card
                            imgSrc={image.url}
                            title={image.artist_name ?? image.anime_name ?? ""}
                            description={image.artist_ref}
                            source_url={image.source_url}
                            key={index}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-2/3 flex flex-col justify-center items-center border-2">
                    No selected category
                </div>
            )}
        </>
    )
}

export default ImageContainer
