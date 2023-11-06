import { useEffect, useState, useRef } from "react"
import { Id, toast } from "react-toastify"

const useFetch = (category: string) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [images, setImages] = useState<any | null>()
    const toastID = useRef<Id>()
    useEffect(() => {
        const getImages = async () => {
            if (category === "") return
            toastID.current = toast.loading("Loading images...")
            const response = await fetch(
                "https://nekos.best/api/v2/" + category + "?amount=20"
            )
            if (!response.ok) {
                setLoading(false)
                setError(true)
                toast.update(toastID.current ?? "", {
                    render: "Something went wrong",
                    autoClose: 3000,
                    closeButton: true,
                    isLoading: false,
                    type: "error"
                })
                return
            }
            const consumed = await response.json()
            setLoading(false)
            setImages(consumed)
            toast.update(toastID.current ?? "", {
                render: "Images fetched!",
                autoClose: 3000,
                closeButton: true,
                type: "success",
                isLoading: false
            })
        }
        getImages()
    }, [category])
    return { images, loading, error }
}

export default useFetch
