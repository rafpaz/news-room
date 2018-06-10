import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReaderItem from "./ReaderItem";

class Reader extends Component {
    render() {
        var items = this.props.data.articles.map((item, i) => {
            return (
                <ReaderItem
                    item={item}
                    key={i}
                />
            );
        });
        return (
            <div>
                {items}
            </div>
        );
    }
}

Reader.propTypes = {
    data: PropTypes.object
};

export default Reader;
