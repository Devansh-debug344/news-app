import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchQuery: '' // Initialize searchQuery correctly
  //   };
  // }

  // handleSearch = (query) => {
  //   this.setState({ searchQuery: query }); // Set the search query
  // };

  const pageSize = 15;
  //apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)
  
  
    return (
      <div>
        <Router>
          { <Navbar /*onSearch={handleSearch}*/ /> }
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general" /*searchQuery={searchQuery}*/ />} />
            <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="us" category="business"  />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general"  />} />
            <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="us" category="science"  />} />
            <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="us" category="sports"  />} />
            <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="us" category="technology"  />} />
          </Routes>
        </Router>
      </div>
    )
  
}
export default App;
