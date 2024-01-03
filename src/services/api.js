import { useQuery } from "react-query";

// routes.js

// export const LOGIN_API_URL = "";

// export const REGIS_API_URL = "";

// const API_URL = 'https://api.okybook.com/vendor/v1/auth/register';

// export const fetchPostmanCollection = async (formData, API_URL,setIsLoading) => {
//   try {
//     setIsLoading(true);
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),

//     });
//     //  console.log(response.message);
//     if (!response.ok) {
//       const errorData = await response.json();
//       // console.log(errorData);
//       if(errorData.message==="Sorry! Your account is not verified, Please verify your account."){
//         throw new Error ("Sorry! Your account is not verified, Please verify your account.")
//       }
//       else throw new Error(`Failed to fetch data. Status: ${response.status}`);
//     }
//     setIsLoading(false);
//     return response.json();
//   } catch (error) {
//     setIsLoading(false);
//     console.error('Error during fetchPostmanCollection:', error.message);
//     return Promise.reject(error); // Re-throw the error for the calling code to handle if needed
//   }
// };

const applyInterceptors = (API_URL, options) => {
  return {
    url: API_URL,
    options,
  };
};

export const fetchPostmanCollection = async (
  formData,
  API_URL,
  setIsLoading
) => {
  try {
    setIsLoading(true);

    const { url, options } = applyInterceptors(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      // console.log(errorData);
      if (
        errorData.message ===
        "Sorry! Your account is not verified, Please verify your account."
      ) {
        throw new Error(
          "Sorry! Your account is not verified, Please verify your account."
        );
      } else
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    setIsLoading(false);
    return response.json();
  } catch (error) {
    setIsLoading(false);
    console.error("Error during fetchPostmanCollection:", error.message);
    throw error; // Re-throw the error for the calling code to handle if needed
  }
};
