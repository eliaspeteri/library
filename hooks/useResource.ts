import axios, { AxiosResponse } from "axios"
import { IBook } from "../types"
/**
 * A hook to help with talking to the API through axios.
 * @param url API url
 * @returns Object of methods
 */
const useResource = (url: string) => {
  const getAll = async () => {
    const res: AxiosResponse = await axios.get(url)
    return res.data
  }

  const getByID = async (id: string) => {
    const res: AxiosResponse<IBook> = await axios.get(`${url}/${id}`)
    return res.data
  }

  const create = async (obj: Record<string, unknown>) => {
    const res: AxiosResponse<IBook> = await axios.post(url, obj)
    return res.data
  }

  const update = async (id: string, obj: Record<string, unknown>) => {
    const res: AxiosResponse<IBook> = await axios.put(`${url}/${id}`, obj)
    return res.data
  }

  const remove = async (id: string) => {
    const res: AxiosResponse<IBook> = await axios.delete(`${url}/${id}`)
    return res.data
  }

  return { getAll, getByID, create, update, remove }
}

export default useResource
