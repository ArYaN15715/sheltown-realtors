import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { Contact } from "../types";

export function useAddContact() {
  const { actor, isFetching } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<
    boolean,
    Error,
    { name: string; phone: string; requirement: string }
  >({
    mutationFn: async ({ name, phone, requirement }) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.addContact(name, phone, requirement);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    meta: { actorReady: !isFetching && !!actor },
  });
}

export function useGetContacts() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<Contact[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getContacts();
      return result;
    },
    enabled: !!actor && !isFetching,
  });
}
