import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from "./Summary/Summary";
import externalData from '../data.json';
import Reader from "./Reader/Reader";
import PropertyModal from "./Summary/PropertyModal";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: {},
            showModal: false,
            open: false,
            currID: null
        };
        this.convertExternalDataToMyData = this.convertExternalDataToMyData.bind(this);
        this.changeApiData = this.changeApiData.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.changeProperty = this.changeProperty.bind(this);
    }

    componentWillMount() {
        if (externalData)
            this.convertExternalDataToMyData(externalData);
    }

    convertExternalDataToMyData(data) {
        let myData = [];
        for (let i = 0; i < data.categories.length; i++) {
            let categoryData = {};
            let currCat = data.categories[i];
            categoryData.name = currCat.name;
            categoryData.articles = data.articles.filter(article => article.categoryID === currCat.id)
                .sort((a, b) => {
                    return new Date(b.publicationTime) - new Date(a.publicationTime)
                });
            myData.push(categoryData)
        }
        this.setState({
            myData: myData
        });
    }

    changeApiData(newCategoryID, newIssueID) {
        this.onCloseModal();
        let index = externalData.articles.findIndex(article => article.id === this.state.currID);
        let currArticle = externalData.articles[index];
        if (newCategoryID)
            currArticle["categoryID"] = newCategoryID;
        if (newIssueID)
            currArticle["issueID"] = newIssueID;
        this.convertExternalDataToMyData(externalData);
    }

    changeProperty(articleID) {
        this.setState({
            currID: articleID,
            open: true,
            showModal: true
        });
    }

    onCloseModal() {
        this.setState({
            open: false,
            showModal: false
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row justify-content-around no-gutters">
                        <div className="col-2 mt-3">
                            <Summary
                                data={this.state.myData}
                                changeFunc={this.changeProperty}
                            />
                        </div>
                        <div className="col-8 mt-3" style={{overflowY: 'scroll', height: "98vh"}}>
                            <Reader
                                data={externalData}
                            />
                        </div>
                    </div>
                </div>
                {this.state.showModal &&
                <PropertyModal
                    open={this.state.open}
                    onCloseModal={this.onCloseModal}
                    issues={externalData.issues}
                    categories={externalData.categories}
                    changeAPI={this.changeApiData}
                />
                }
            </div>
        );
    }
}

export default App;
