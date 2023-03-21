import { Component } from 'react';
import css from './app.module.css';

class Filter extends Component {
  render() {
    const { value, onChange, filtredContacts } = this.props;

      return (
        <div className={css.filterContainer}>
          <label className={css.filter}>
            Find contact by name
            <input
              className={css.inputFilter}
              id="filter"
              type="search"
              value={value}
              onChange={onChange}
            />
          </label>
          <ul>{filtredContacts}</ul>
        </div>
      );
  }
}

export default Filter;
