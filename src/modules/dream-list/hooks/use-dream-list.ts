import { useQuery, UseQueryResult } from "react-query";
import { Users, BucketListProps } from "../../dream-list/types/dream-list.types";
import { DreamListServices } from "../services/dream-list.services";

export const useDreamList = (user: string): UseQueryResult<BucketListProps[], Error> => {
  return useQuery(["user-dream-list", user], () =>
    DreamListServices.getDreamList(user)
  );
};
