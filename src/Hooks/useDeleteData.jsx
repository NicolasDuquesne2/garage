import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

function useDeleteData() {

    const queryClient = useQueryClient()
    const api = axios.create({
        baseURL: "http://localhost:8080/"
    })

    const mutation = useMutation((address) => {
        return api.delete(address)
    },  {
        onSuccess: () => {
            queryClient.invalidateQueries()
        },
    })
    return [(address) => mutation.mutate(address), mutation]
}

export default useDeleteData