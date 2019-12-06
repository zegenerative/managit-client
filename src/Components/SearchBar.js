import React from "react";

export default function SearchBar(props) {
  const { onSubmit, onChange, values } = props;

  return (
    <div className="search-bar">
      <h4>Search for a repository</h4>
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
