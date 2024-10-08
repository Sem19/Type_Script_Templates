import { rickmortyAPIinstanse } from "@/shared/api/rickmortyAPIinstanse";
import {
  GetAllLocationRequest,
  GetAllLocationResponse,
  getSingleLocationRequest,
  getSingleLocationResponse,
} from "../types/locationServicesTypes";

class locationsServices {
  private locationEndPoint = "/location";

  async getAllLocations({ searchQuery }: GetAllLocationRequest) {
    return rickmortyAPIinstanse.get<GetAllLocationResponse>(
      `${this.locationEndPoint}?name=${searchQuery}`
    );
  }

  async getSingleLocation(id: getSingleLocationRequest) {
    return rickmortyAPIinstanse.get<getSingleLocationResponse>(
      `${this.locationEndPoint}/${id}`
    );
  }
}

export const locationsService = new locationsServices();
