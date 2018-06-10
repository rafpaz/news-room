import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./SummaryItem.css";
import moment from 'moment';
import ItemModal from "./ItemModal";

class SummaryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }


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
                <span>
                    <button className={"btn btn-sm"}>
                        <i className="fas fa-cogs"/>
                    </button>
                    <button className={"btn btn-sm"} data-toggle="modal" data-target="#myModal">
                        <i className="fas fa-search-plus"/>
                    </button>
                </span>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Heading</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                Modal body..
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
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
