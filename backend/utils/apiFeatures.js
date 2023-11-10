class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
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

  paginate() {}
}

module.exports = APIFeatures;
