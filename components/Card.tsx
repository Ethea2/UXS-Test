"use client"
import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { BsEmojiSmile } from "react-icons/bs"

const Card = ({
    imgSrc,
    title,
    description,
    source_url
}: {
    imgSrc: string
    title: string
    description: string
    source_url: string
}) => {
    return (
        <motion.div whileHover="hover" className="w-full h-[500px] relative">
            <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
                <h3 className="text-xl mb-2 font-semibold text-white">
                    Artist/Anime: {title}
                </h3>
                <p className="text-sm font-light text-slate-300">
                    {description}
                </p>
            </div>
            <motion.div
                variants={{
                    hover: {
                        top: "50%",
                        right: "50%"
                    }
                }}
                className="absolute inset-0 bg-slate-200 z-20"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat"
                }}
            />
            {source_url ? (
                <a
                    href={source_url}
                    rel="nofollow"
                    className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-indigo-500 transition-colors"
                >
                    <div className="flex items-center">
                        <span className="text-xs">MORE</span>
                        <FiArrowUpRight className="text-lg" />
                    </div>
                </a>
            ) : (
                <div
                    rel="nofollow"
                    className="w-1/2 h-1/2 absolute bottom-0 right-0 z-10 grid place-content-center bg-white text-black hover:text-indigo-500 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xs">no extra info</span>
                        <BsEmojiSmile className="text-lg" />
                    </div>
                </div>
            )}
        </motion.div>
    )
}

export default Card
