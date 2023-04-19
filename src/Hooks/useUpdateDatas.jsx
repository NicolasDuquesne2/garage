import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

function useUpdateDatas() {

    const queryClient = useQueryClient()

    const api = axios.create({
        baseURL: "http://localhost:8080/"
    })

    const mutation = useMutation((dataPackage) => {

        return api.put(dataPackage.address, dataPackage.data).then((response) => response)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries()
        },
    })
    return [(dataPackage) => mutation.mutate(dataPackage), mutation]
}

export default useUpdateDatas