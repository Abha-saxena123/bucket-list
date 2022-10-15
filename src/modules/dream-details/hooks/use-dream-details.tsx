import { useQuery, UseQueryResult } from "react-query";
import { DreamDetailsServices } from "../services/dream-details.services";
import { DreamDetailsProps } from "../types/dream-details";

export const useDreamDetails = (
  id: string
): UseQueryResult<DreamDetailsProps, Error> => {
  return useQuery(["dream-details", id], () =>
    DreamDetailsServices.getDreamDetails(id)
  );
};
