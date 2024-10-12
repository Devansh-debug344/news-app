import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


  //  handleInputChange = (e) => {
  //    this.setState({ searchInput: e.target.value });
  //  };

  //  handleSubmit = (e) => {
  //    e.preventDefault();
  //    this.props.onSearch(this.state.searchInput); // Call the onSearch function passed from App
  //    this.setState({ searchInput: '' }); // Clear input after submit
  //  }


  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">DailyNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
          </div>
          {/* <form className="d-flex" onSubmit={this.handleSubmit}> {/* Add onSubmit here */}
          {/* <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={this.state.searchInput} // Bind input value
                onChange={this.handleInputChange} // Handle input changes
              /> */}
          {/* <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
        </div>
      </nav>
    </div>

  )
}

export default Navbar;
