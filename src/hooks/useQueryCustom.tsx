import { useQuery } from "@tanstack/react-query";
import { buildHeaders } from "../utils/createHeaders";
import { PropsReactQuery } from "../interfaces/interfaces";

export default function useQueryCustom<R>({
  url,
  method,
  keys,
}: Omit<PropsReactQuery<undefined>, "payload">) {
  return useQuery({
    queryKey: (keys && [...keys]) || [""],
    queryFn: () =>
      fetch(url, {
        headers: buildHeaders(),
        method: method || "GET",
        credentials: "include",
      }).then((res) => res.json() as R),
  });
}
