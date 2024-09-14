import {
  GetAllLocationRequest,
  GetAllLocationResponse,
} from "../types/locationServicesTypes";
import { rickmortyAPIinstanse } from "@/shared/api/rickmortyAPIinstanse";

class locationsServices {
  private locationEndPoint = "/location";

  async getAllLocations(params: GetAllLocationRequest) {
    return rickmortyAPIinstanse.get<GetAllLocationResponse>(
      this.locationEndPoint
    );
  }
}

export const locationsService = new locationsServices();
