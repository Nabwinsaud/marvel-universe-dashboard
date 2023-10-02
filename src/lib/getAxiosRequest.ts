import axiosInstance from "./axios";
import md5 from "md5";
import { ResponseType } from "../../typing";
export default async function getAxiosRequest<T>(
  name: string,
  limit?: number,
  offset?: number
): Promise<ResponseType<T>> {
  //* as no need of post so only one get request
  const privateHashedKey = import.meta.env.VITE_MARVEL_PRIVATE_API;
  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_API;

  const hash = md5("1" + privateHashedKey + publicKey);

  const res = await axiosInstance.get(
    `${name}&limit=${limit ?? 20}&offset=${
      offset ?? 1
    }&ts=1&apikey=${publicKey}&hash=${hash}`
  );
  return res;
}
