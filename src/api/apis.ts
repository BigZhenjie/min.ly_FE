import axios from "axios"

const createShortLink = async (longUrl: String, shortUrl: String) => {
    const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/create", {
        url: longUrl,
        shortUrl: shortUrl
    })

    return res.data
}


// const redirect

export {
    createShortLink
}