import axios from "axios";
import {
  API_CONSTANT,
  BASE_URL,
} from "../../common/utils/constants/api.constant";
import { DreamDetailsProps } from "../../dream-details/types/dream-details";
import { AddDreamServieProps } from "../types/add-dream.types";

export class AddDreamServices {
  static async addDreamDetails(payload: AddDreamServieProps): Promise<void> {

    return await axios.post(`${API_CONSTANT.DREAM}`, payload);
  }
}
