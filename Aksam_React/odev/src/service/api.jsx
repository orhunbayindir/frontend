import axios from 'axios'

export const getResults = async () => {
    try {
        const response= await axios.get("http://localhost:3000/results")
        return response.data
    } catch (error) {
         console.error("hata oluştu",error)
        return []
    }
}