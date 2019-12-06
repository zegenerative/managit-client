import React from "react";

export default function SearchBar(props) {
  const { onSubmit, onChange, values } = props;

  return (
    <div className="search-bar">
      <h1>Search GitHub Repositories</h1>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="repositories"
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
