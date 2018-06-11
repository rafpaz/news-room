import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SummaryItem from "./SummaryItem";
import './SummaryList.css';

class SummaryList extends Component {
    render() {
        let items = this.props.articles.map((item, i) => {
            return (
              <SummaryItem
                item={item}
                changeFunc={this.props.changeFunc}
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
    changeFunc: PropTypes.func,
};

export default SummaryList;
