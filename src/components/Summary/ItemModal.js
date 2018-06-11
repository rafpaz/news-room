import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import './ItemModal.css';
import moment from 'moment';

class ItemModal extends Component {
    render() {
        const { open } = this.props;
        const formattedTime = moment(this.props.modalData.publicationTime).startOf('day').fromNow();
        return (
            <div>
                <Modal
                    open={open}
                    onClose={this.props.onCloseModal}
                    center
                    classNames={{
                        transitionEnter: 'transition-enter',
                        transitionEnterActive: 'transition-enter-active',
                        transitionExit: 'transition-exit-active',
                        transitionExitActive: 'transition-exit-active',
                    }}
                    animationDuration={1000}
                >
                    <h6 className={"modal-source"}>{this.props.modalData.sourceName}</h6>
                    <h3 className={"modal-title"}>{this.props.modalData.title}</h3>
                    <div className={"modal-text"}>{this.props.modalData.text}</div>
                    <div className="row justify-content-between">
                        <div className={"modal-date col-2"}>{formattedTime}</div>
                        <div className="col-3">
                            <a href={this.props.modalData.URL} target={"_blank"}>
                                <div className={"modal-url"}>Original Article ></div>
                            </a>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

ItemModal.propTypes = {
    open: PropTypes.bool,
    onCloseModal: PropTypes.func,
    modalData: PropTypes.object
};

export default ItemModal;
