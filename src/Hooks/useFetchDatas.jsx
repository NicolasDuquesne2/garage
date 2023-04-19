import axios from "axios";
import { useQuery } from "react-query";



function useFetchDatas(cacheName, serverRoute) {
    const api = axios.create({
        baseURL: "http://localhost:8080/"
    })
    return useQuery(cacheName, () => api.get(serverRoute).then((response) => response.data))
}

export default useFetchDatas