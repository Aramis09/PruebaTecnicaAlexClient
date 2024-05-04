import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../utils/cookies";
import { PropsReactQuery } from "../interfaces/interfaces";
import { useQueryClient } from "@tanstack/react-query";

export function useMutationCustom<A, R>({
  url,
  payload,
  method,
  keys,
}: PropsReactQuery<A>) {
  const queryClient = useQueryClient();
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "auth-token",
    `${getCookie({ nameCookie: "jwt-auth" }).cookiesFound || null}`
  );
  myHeaders.append(
    "auth-secret-key",
    `${import.meta.env.VITE_SOME_KEY_SECRET}`
  );

  const mutation = useMutation({
    mutationFn: async (payloadMutate: A) => {
      return await fetch(url, {
        headers: myHeaders,
        method: method || "GET",
        body: JSON.stringify(payloadMutate || payload),
        credentials: "include",
      }).then((res) => res.json() as R);
    },
    onSuccess: () => {
      // @ts-expect-error Es muy dinamico para tiparlo, la primera vez utilizando react query y no tuve tiemp de ver si se podia solucionar
      queryClient.invalidateQueries([...keys]);
    },
  });

  return mutation;
}
