import React from 'react';

import {Link} from 'react-router-dom';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" >
          
         <div className="btn btn-light dropdown-toggle dropdown-toggle-split" onClick={this.showDropdownMenu}> Activities </div>

          { this.state.displayMenu ? (
          <ul>
         <li className="dropdown-item">
               <Link className="nav-link" to={"/Indoor"}>Indoor Activities</Link>
             </li>

             <li className="dropdown-item">
               <Link className="nav-link" to={"/Outdoor"}>Outdoor Activities</Link>
             </li>
          </ul>
        ):
        (
          null
        )
        }
    
       </div>

    );
  }
}

export default Dropdown;