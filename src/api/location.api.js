import axios from "axios";
import { createToast } from "../components/Toast.component";

const API_KEY = "4ETKUW0L7hQbCL0cHaNPBgJKSbM9UhVd";

export const getSpeedLimitData = async (lat, long) => {
  try {
    const res = await axios.post(
      `https://www.mapquestapi.com/geocoding/v1/reverse?key=${API_KEY}`,
      {
        location: {
          latLng: {
            lat: lat,
            lng: long,
          },
        },
        includeRoadMetadata: "true",
      }
    );
    return res.data.results[0].locations[0].roadMetadata.speedLimit;
  } catch (error) {
    return null;
  }
};

export const addAccident = async (lat, long) => {
  try {
    const res = await axios.post("http://localhost:5001/location/save", {
      lat,
      long,
    });
    createToast("success", "Accident reported successfully");
    return res.data;
  } catch (error) {
    console.log("Did not work");
    return null;
  }
};

export const getAccidents = async () => {
  try {
    const res = await axios.get("http://localhost:5001/location");
    return res.data;
  } catch (error) {
    return null;
  }
};
