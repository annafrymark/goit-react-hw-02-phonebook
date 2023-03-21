import { Component } from 'react';
import css from './app.module.css';

class Filter extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <label className={css.filter} >
                Find contact by name
                <input type="text" value={value} onChange={onChange} />
            </label >
        )
    }
}

export default Filter