import { useEffect } from "react";
import { API_URL } from "../constants";

const useRestraunt = (
  setAllRestaurants,
  setFilteredRestaurants,
  setLoading
) => {
  useEffect(() => {
    getRestaurants();
    // eslint-disable-next-line
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(API_URL);
      const { data } = await response.json();
      setAllRestaurants(data);
      setFilteredRestaurants(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setLoading(false);
    }
  };
};

export default useRestraunt;
