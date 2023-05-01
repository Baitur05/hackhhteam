import { setCategoryId } from "../../redux/slices/filterSlice";

export const Categories = ({ onChangeCategory, value }) => {
  const category = ["All", "Bishkek", "Osh", "Issyk kul", "Talas"];

  return (
    <div className="categories">
      <ul>
        {category.map((c, i) => (
          <li
            key={c}
            className={value === i ? "active" : ""}
            onClick={() => onChangeCategory(i)}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};
