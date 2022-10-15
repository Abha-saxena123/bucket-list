import getConfig from "next/config";
import { Users } from "../../dream-list/types/dream-list.types";
import axios from "axios";
import { API_CONSTANT } from "../../common/utils/constants/api.constant";

interface LoginResponse {
    user: Users;
    access_token: string;
    refresh_token?: string;
    refresh_expires_in?: number;
    message?: string;
    accessTokenExpiry: number;
  }

export class AuthService {
    public static async login({ userName, password }: { userName: string; password: string }): Promise<LoginResponse> {
        return axios
          .post(`${API_CONSTANT.LOGIN}`, { userName:userName, password:password })
          .then((res) => res.data)
          .catch(() => {
            // This is a mock error for login error
            // TODO: it should be removed as it has to come from axios interceptor
            throw new Error();
          });
      }
}
