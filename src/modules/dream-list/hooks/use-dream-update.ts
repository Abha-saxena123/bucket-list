import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import { DreamListServices } from "../services/dream-list.services";
import { DreamUpdateProps } from "../types/dream-list.types";



export const useUpdateDream = (): UseMutationResult<
  void,
  Error,
  DreamUpdateProps
> => {
  return useMutation(DreamListServices.updateDream);
};
