import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './ReaderItem.css';

class ReaderItem extends Component {
    render() {
        const formattedTime = moment(this.props.item.publicationTime).startOf('day').fromNow();
        return (
            <div className={"reader-item"}>
                <h6>{this.props.item.sourceName}</h6>
                <div className={"reader-item-title"}>{this.props.item.title}</div>
                <div className={"reader-item-date"}>{formattedTime}</div>
                <div className={"reader-item-text"}>{this.props.item.text}</div>
                <a href={this.props.item.URL} target={"_blank"}>
                    <div className={"reader-item-url"}>Original Article ></div>
                </a>
                <hr/>
            </div>
        );
    }
}

ReaderItem.propTypes = {};

export default ReaderItem;
