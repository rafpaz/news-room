import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from "./Summary/Summary";
import externalData from '../data.json';
import Reader from "./Reader/Reader";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: {}
        };
        this.convertExternalDataToMyData = this.convertExternalDataToMyData.bind(this);
        this.changeApiData = this.changeApiData.bind(this);
    }

    componentWillMount() {
        if(externalData)
            this.convertExternalDataToMyData(externalData);
    }

    convertExternalDataToMyData(data){
        let myData = [];
        for(let i= 0; i < data.categories.length; i++){
            let categoryData = {};
            let currCat = data.categories[i];
            categoryData.name = currCat.name;
            categoryData.articles = data.articles.filter(article => article.categoryID === currCat.id)
                .sort((a,b) => {return new Date(b.publicationTime) - new Date(a.publicationTime)});
            myData.push(categoryData)
        }
        this.setState({
            myData: myData
        });
    }

    changeApiData(reqArticleID, type, value){
        if(type) {
            let index = externalData.articles.findIndex(article => article.id === reqArticleID);
            let currArticle = externalData.articles[index];
            let propName = type + "ID";
            currArticle[propName] = value;
            this.convertExternalDataToMyData(externalData);
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row justify-content-around no-gutters">
                        <div className="col-2 mt-3">
                            <Summary
                                data={this.state.myData}
                                changeFunc={this.changeApiData}
                            />
                        </div>
                        <div className="col-8 mt-3" style={{overflowY: 'scroll', height: "98vh"}}>
                            <Reader
                                data={externalData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
