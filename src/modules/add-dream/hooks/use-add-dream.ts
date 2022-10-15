import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "react-query";
import { AddDreamServices } from "../services/add-dream.services";
import { AddDreamServieProps } from "../types/add-dream.types";

export const useAddDream = (): UseMutationResult<void, Error, AddDreamServieProps> => {
    return useMutation(AddDreamServices.addDreamDetails);
  };