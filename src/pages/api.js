import { useQuery } from 'react-query';

// routes.js

// export const LOGIN_API_URL = "";

// export const REGIS_API_URL = "";



// const API_URL = 'https://api.okybook.com/vendor/v1/auth/register';

export const fetchPostmanCollection = async (formData, API_URL) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error during fetchPostmanCollection:', error.message);
    throw error; // Re-throw the error for the calling code to handle if needed
  }
};