import React, { useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../../utils/actions";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            setCategory(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
