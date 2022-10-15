import axios from "axios";
import {
  API_CONSTANT,
  BASE_URL,
} from "../../common/utils/constants/api.constant";
import { DreamDetailsProps } from "../types/dream-details";

export class DreamDetailsServices {
  static async getDreamDetails(id: string): Promise<DreamDetailsProps> {
    return await axios
      .get(`${API_CONSTANT.DREAM}`, {
        params: {
          id: id,
        },
      })
      .then((res) => res.data.data);
  }
}
