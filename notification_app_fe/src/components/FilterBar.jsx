function FilterBar({ typeFilter, setTypeFilter, limit, setLimit }) {
  return (
    <div className="filter-bar">
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="All">All</option>

        <option value="Placement">Placement</option>

        <option value="Result">Result</option>

        <option value="Event">Event</option>
      </select>

      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={10}>Top 10</option>

        <option value={15}>Top 15</option>

        <option value={20}>Top 20</option>
      </select>
    </div>
  );
}

export default FilterBar;
