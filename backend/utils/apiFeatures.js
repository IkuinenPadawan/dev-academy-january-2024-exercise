class APIFeatures {
  constructor(query, queryString, searchColumn) {
    this.query = query;
    this.queryString = queryString;
    this.searchColumn = searchColumn;
  }

  search() {
    if (this.queryString.search) {
      this.query += ` WHERE ${this.searchColumn} ILIKE $3`;
    }

    // return this for chaining
    return this;
  }

  sort() {
    // Sort by field
    if (this.queryString.sortBy) {
      this.query += ` ORDER BY ${this.queryString.sortBy}`;

      // Determine order (ASC or DESC)
      if (
        this.queryString.order &&
        (this.queryString.order.toUpperCase() === 'ASC' ||
          this.queryString.order.toUpperCase() === 'DESC')
      ) {
        this.query += ` ${this.queryString.order.toUpperCase()}`;
      }
    }
    // return this for chaining
    return this;
  }

  paginate() {
    this.query += ` LIMIT $2 OFFSET (($1 - 1) * $2)`;

    // return this for chaining
    return this;
  }
}

module.exports = APIFeatures;
