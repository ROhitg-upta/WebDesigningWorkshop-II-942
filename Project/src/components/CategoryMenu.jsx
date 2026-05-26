import React from "react";

function CategoryMenu({
  categories,
  selectedCategory,
  onCategorySelect,
  isMenuOpen
}) {
  return (
    <section className={isMenuOpen ? "category-menu open" : "category-menu"}>
      <div className="category-menu-inner">
        <span className="category-label">Shop by category</span>
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryMenu;
