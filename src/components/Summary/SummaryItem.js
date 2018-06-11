import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./SummaryItem.css";
import moment from 'moment';
import ItemModal from "./ItemModal";

class SummaryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            open: false,
            showPropertiesModal: false,
            openProperties: false
        };
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onOpenPropertiesModal = this.onOpenPropertiesModal.bind(this);
        this.onClosePropertiesModal = this.onClosePropertiesModal.bind(this);
        this.onPropertyChangeClick = this.onPropertyChangeClick.bind(this);
    }

    onOpenModal(){
        this.setState({
            showModal: true,
            open: true
        });
    }

    onOpenPropertiesModal(){
        this.setState({
            showPropertiesModal: true,
            openProperties: true
        });
    }

    onCloseModal(){
        this.setState({
            open: false
        });
        setTimeout(() => {
            this.setState({
                showModal: false
            });
        }, 1000);
    }

    onClosePropertiesModal(){
        this.setState({
            openProperties: false
        });
        setTimeout(() => {
            this.setState({
                showPropertiesModal: false
            });
        }, 1000);
    }

    onPropertyChangeClick(){
        this.props.changeFunc(this.props.item.id);
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
                    <button className={"btn btn-sm"} onClick={this.onPropertyChangeClick}>
                        <i className="fas fa-cogs"/>
                    </button>
                    <button className={"btn btn-sm"} onClick={this.onOpenModal}>
                        <i className="fas fa-search-plus"/>
                    </button>
                </span>
                {this.state.showModal &&
                    <ItemModal
                        open={this.state.open}
                        onCloseModal={this.onCloseModal}
                        modalData={this.props.item}
                    />
                }
            </div>
        );
    }
}

SummaryItem.propTypes = {
    item: PropTypes.object,
    changeFunc: PropTypes.func,
};

export default SummaryItem;
