import axios, { AxiosResponse } from "axios"

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

  const getByID = async (id: number) => {
    const res: AxiosResponse = await axios.get(`${url}/${id}`)
    return res.data
  }

  const create = async (obj: Record<string, unknown>) => {
    const res: AxiosResponse = await axios.post(url, obj)
    return res.data
  }

  const update = async (id: number, obj: Record<string, unknown>) => {
    const res: AxiosResponse = await axios.put(`${url}/${id}`, obj)
    return res.data
  }

  const remove = async (id: number) => {
    const res: AxiosResponse = await axios.delete(`${url}/${id}`)
    return res.data
  }

  return { getAll, getByID, create, update, remove }
}

export default useResource
