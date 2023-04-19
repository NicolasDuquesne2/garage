import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

function useAddDatas() {

    const queryClient = useQueryClient()

    const api = axios.create({
        baseURL: "http://localhost:8080/"
    })

    const mutation = useMutation((data) => {
        return api.post('/cars', data).then((response) => response)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries()
        },
    })
    return [(data) => mutation.mutate(data), mutation]
}

export default useAddDatas