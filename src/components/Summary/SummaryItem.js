import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./SummaryItem.css";
import moment from 'moment';

class SummaryItem extends Component {
    render() {
        const formattedTime = moment(this.props.item.publicationTime).startOf('day').fromNow();
        return (
            <div className={"summary-item"}>
                <div className="row no-gutters">
                    <div className="col-12">
                        <div className={"summary-item-text"}>
                            {this.props.item.title}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-6 summary-property">
                        {this.props.item.sourceName}
                    </div>
                    <div className="col-4 summary-property">
                        {formattedTime}
                    </div>
                </div>
            </div>
        );
    }
}

SummaryItem.propTypes = {
    item: PropTypes.object,
};

export default SummaryItem;
