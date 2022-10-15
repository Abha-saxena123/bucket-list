import { UserListServices } from "../services/user-list.services";
import { Users } from "../../dream-list/types/dream-list.types";

import { useMutation, UseMutationResult } from "react-query";

export const useAddUser = (): UseMutationResult<void, Error, Users> => {
  return useMutation(UserListServices.addUser);
};
