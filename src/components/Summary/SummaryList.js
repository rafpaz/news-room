import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SummaryItem from "./SummaryItem";
import './SummaryList.css';

class SummaryList extends Component {
    render() {
        var items = this.props.articles.map((item, i) => {
            return (
              <SummaryItem
                item={item}
                key={i}
              />
            );
        });
        return (
            <div>
                <div className={"category-group-title"}>{this.props.catName}</div>
                {items}
            </div>
        );
    }
}

SummaryList.propTypes = {
    articles: PropTypes.array,
    catName: PropTypes.string,
};

export default SummaryList;
