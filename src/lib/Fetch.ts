import { ApiResponse } from "@/types";

// Backend URL based on the node environment 
const backendUrl = process.env.NODE_ENV === "development"
? "http://localhost:8081/api/crypto"
: import.meta.env.BACKENDURL;

const headers = new Headers();
headers.append("Accept", "application/json");

/**
 * Fetches data from the backend API.
 * @returns A promise that resolves to an ApiResponse object.
 * @throws An error if the fetch operation fails.
 */
export async function fetchData(): Promise<ApiResponse> {
  try {
    const response = await fetch(backendUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const parsedResponse = await response.json();
    return parsedResponse;

  } catch (error) {
    throw new Error("Failed to fetch data from the API");
  }
}