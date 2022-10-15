import getConfig from "next/config";
import {
  BucketListProps,
  DreamUpdateProps,
  Users,
} from "../../dream-list/types/dream-list.types";
import axios from "axios";
import {
  API_CONSTANT,
  BASE_URL,
} from "../../common/utils/constants/api.constant";

export class DreamListServices {
  static async getDreamList(user: string): Promise<BucketListProps[]> {
    return await axios
      .get(`${API_CONSTANT.DREAM_LIST}`, {
        params: {
          user: user,
        },
      })
      .then((res) => res.data.data);
  }

  static async updateDream(payload: DreamUpdateProps): Promise<void> {
    return await axios
      .put(`${API_CONSTANT.DREAM}`, payload)
      .then((res) => res.data.data);
  }
}
