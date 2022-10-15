import getConfig from "next/config";
import { Users } from "../../dream-list/types/dream-list.types";
import axios from "axios";
import { API_CONSTANT } from "../../common/utils/constants/api.constant";

export class UserListServices {
  static async getUserList(): Promise<Users[]> {
    return await axios.get(API_CONSTANT.USERS).then((res) => res.data.data);
  }

  static async addUser(payload: Users): Promise<void> {
    return await axios
      .post(API_CONSTANT.USERS, payload)
      .then((res) => res.data.data);
  }
}
