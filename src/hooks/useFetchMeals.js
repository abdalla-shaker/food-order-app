import { useEffect, useState } from "react";

const useFetchMeals = (initialValue) => {
  const [isFetching, setIsFetching] = useState(false);
  const [mealItems, setMealItems] = useState(initialValue);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    async function fetchingMeals() {
      setIsFetching(true);

      const fetchedData = await fetch("http://localhost:3000/meals");
      const data = await fetchedData.json();

      if (!fetchedData.ok) {
        setError({
          status: true,
          message: "Failed to fetch meals",
        });
        setIsFetching(false);
        throw new Error("Failed to fetch meals");
      }

      setMealItems(data);

      setIsFetching(false);
    }

    fetchingMeals();
  }, []);

  return {
    fetching: isFetching,
    meals: mealItems,
    error,
  };
};

export default useFetchMeals;
