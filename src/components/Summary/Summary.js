import React, {Component} from 'react';
import "./Sumary.css";
import PropTypes from 'prop-types';
import SummaryList from "./SummaryList";

class Summary extends Component {
    render() {
        let listByCategory = this.props.data.map((item, i) => {
            return (
                <SummaryList
                    articles={item.articles}
                    catName={item.name}
                    key={"list-group-" + i}
                />
            )
        });
        return (
            <div>
                <div id="header" className="row justify-content-center align-items-center no-gutters"
                     style={{backgroundColor: "#dddddd"}}>
                    <div className="col-2 text-center">
                        <button className={"btn btn-md"}>
                            <i className="fas fa-bars"/>
                        </button>
                    </div>
                    <div className="col-8 text-center">
                        Title
                    </div>
                    <div className="col-2">
                        <button className={"btn btn-md"}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="summary-list-container">
                    <div className="col-12">
                        {listByCategory}
                    </div>
                </div>
            </div>
        );
    }
}

Summary.propTypes = {
    data: PropTypes.array,
};

export default Summary;
