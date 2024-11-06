import useFetchMeals from "../../hooks/useFetchMeals.js";

import Article from "./Article.jsx";

export default function Main() {
  const { fetching: isFetching, error, meals } = useFetchMeals([]);

  return (
    <main>
      <ul id="meals">
        {isFetching && !error.status && <p>Fetching for meals</p>}
        {!isFetching && error.status && <p>{error.message}</p>}
        {!isFetching &&
          !error.status &&
          meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <Article
                name={meal.name}
                price={meal.price}
                description={meal.description}
                src={meal.image}
                id={meal.id}
              />
            </li>
          ))}
      </ul>
    </main>
  );
}
