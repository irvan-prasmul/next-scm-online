import axios from "axios";
import { formatFormData } from "../global";

export function getUserDataReservationDetails(payload) {
  const form = formatFormData(payload);
  return axios.post("C_user/get_data_reservation_details", form);
}
