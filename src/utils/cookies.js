import Cookies from "react-cookies";

// Decode Base64 safely using window.atob
export const getUserData = () => {
  try {
    const encryptedData = Cookies.load("userData");
    
    return encryptedData ?? null;
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return null;
  }
};

  
  export const removeUserData = () => {
    Cookies.remove("userData", { path: "/" });
  };