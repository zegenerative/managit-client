import React from "react";

export default function SearchBar(props) {
  const { onSubmit, onChange, values } = props;

  return (
    <div className="search-bar">
      <h3>Search for a repository</h3>
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
        <input type="submit" value="go!"/>
      </form>
    </div>
  );
}
