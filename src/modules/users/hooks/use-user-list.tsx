import { useQuery, UseQueryResult } from "react-query";
import { UserListServices } from "../services/user-list.services";
import { Users } from "../../dream-list/types/dream-list.types";

export const useUserList = (): UseQueryResult<Users[], Error> => {
  return useQuery(["user-list"], UserListServices.getUserList);
};
