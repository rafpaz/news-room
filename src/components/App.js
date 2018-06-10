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
        }
    }

    componentWillMount() {
        let myData = [];
        if(externalData){
            for(let i= 0; i < externalData.categories.length; i++){
                let categoryData = {};
                let currCat = externalData.categories[i];
                categoryData.name = currCat.name;
                categoryData.articles = externalData.articles.filter(article => article.categoryID === currCat.id)
                                                             .sort((a,b) => {return new Date(b.publicationTime) - new Date(a.publicationTime)});
                myData.push(categoryData)
            }
        }
        this.setState({
            myData: myData
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
