import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import './ItemModal.css';

class ItemModal extends Component {
    render() {
        const { open } = this.props;
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
                    <h2>Simple centered modal</h2>
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
