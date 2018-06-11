import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import './PropertyModal.css';

class PropertyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryValue: this.props.categories[0].name,
            issueValue: this.props.issues[0].name
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit() {
        let categoryIndex = this.props.categories.findIndex(category => category.name === this.state.categoryValue);
        let issueIndex = this.props.issues.findIndex(issue => issue.name === this.state.issueValue);
        let catID = categoryIndex >= 0 ? this.props.categories[categoryIndex].id : null;
        let issueID = issueIndex >= 0 ? this.props.issues[issueIndex].id : null;

        this.props.changeAPI(catID, issueID);
    }

    render() {
        let categories = this.props.categories.map((category, i) => {
            return (
                <option key={"category-" + i}>{category.name}</option>
            )});
        let issues = this.props.issues.map((issue, i) => {
            return (
                <option key={"issue-" + i}>{issue.name}</option>
            )});
        return (
            <div>
                <Modal
                    center
                    open={true}
                    onClose={this.props.onCloseModal}
                >
                    <div className={"property-modal"}>
                        <h5>Change property</h5>
                        <div className="form-group">
                            <label htmlFor="sel1">Category</label>
                            <select className="form-control"
                                    id="categoryValue"
                                    value={this.state.categoryValue}
                                    onChange={this.handleChange}
                            >
                                {categories}
                            </select>

                            <label htmlFor="sel2">Issue</label>
                            <select
                                className="form-control"
                                id="issueValue"
                                value={this.state.issueValue}
                                onChange={this.handleChange}
                            >
                                {issues}
                            </select>
                            <button
                                className={"btn save-property-btn"}
                                onClick={this.handleSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

PropertyModal.propTypes = {
    open: PropTypes.bool,
    onCloseModal: PropTypes.func,
    issues: PropTypes.array,
    categories: PropTypes.array,
    changeAPI: PropTypes.func,
};

export default PropertyModal;
