import { getUserData } from "@/utils/cookies";
import Cookies from "react-cookies";
const BASE_URL = process.env.NEXT_PUBLIC_SERVICE_URL;

// common api method
export const callAPI = async (url, request_body = {}) => {
  try {
    // const authToken = Cookies.load("data");

    const HEADERS = {
      "Content-Type": "application/json",
    };

    const requestOptions = {
      method: "POST",
      headers: new Headers(HEADERS),
      body: JSON.stringify(request_body),
      redirect: "follow",
    };

    const response = await fetch(`${BASE_URL}${url}`, requestOptions);

    if (response?.status === 401) {
      Cookies.remove("data");
      window.location.href = "/session-expired";
    } else {
      const result = await response.json(); // Assuming the API returns JSON
      return result;
    }
  } catch (error) {
    throw error; // Propagate error to the caller
  }
};

// dashboard api
export const getWasteManagementDashboard = async () => {
  try {
    const user_details = getUserData();

    const response = await callAPI(
      "wasteCollection/getWasteManagementDashboard",
      {
        StateID: user_details?.StateID ?? 0,
        DistrictID: user_details?.DistrictID ?? 0,
        BlockID: user_details?.BlockID ?? 0,
        GPID: user_details?.GPID ?? 0,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// getEmployeeAttendance api
export const getEmployeeAttendance = async (status = "") => {
  try {
    const response = await callAPI("wasteCollection/getEmployeeAttendance", {
      Status: status ?? "",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// getPropertiesWithWasteCollection api
export const getPropertiesWithWasteCollection = async (StartDate, EndDate) => {
  try {
    const user_details = getUserData();

    const response = await callAPI(
      "wasteCollection/getPropertiesWithWasteCollection",
      {
        StateID: user_details?.StateID ?? 0,
        DistrictID: user_details?.DistrictID ?? 0,
        BlockID: user_details?.BlockID ?? 0,
        GPID: user_details?.GPID ?? 0,
        StartDate: StartDate,
        EndDate: EndDate,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};


export const getProperties = async () => {
  try {
    const user_details = getUserData(); // Assuming you have a function to fetch user details

    const response = await callAPI("property/getProperties", {
      StateID: user_details?.StateID ?? 1,
      DistrictID: user_details?.DistrictID ?? 0,
      BlockID: user_details?.BlockID ?? 0,
      GPID: user_details?.GPID ?? 0,
    });

    return response;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
