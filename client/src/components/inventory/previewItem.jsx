import React, { Component } from 'react';

export default class previewItem extends Component {
  render() {
    return (
      <div> 

        <div className="card" style={{width: "", margin: "0 auto"}}>
          <img src="https://placekitten.com/640/360" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#PreviewInventoryAddition">
              Add To Inventory
            </button>
          </div>
        </div>




          <div className="modal fade" id="PreviewInventoryAddition" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Please Confirm Addition to Inventory</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    
                  <div className="card" style={{width: "18rem", margin: "0 auto"}}>
                    <img src="https://www.placecage.com/640/360
" className="card-img-top" alt="Item Photo"/>
                    <div className="card-body">
                      <h5 className="card-title">Item Name</h5>
                      <p className="card-text">Item Description</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Price:</li>
                      <li className="list-group-item"># available</li>
                    </ul>
                    <div className="card-body"  style={{display:"flex", justifyContent:"space-evenly"}}>
                      <button href="#" className="btn btn-warning">Edit</button>
                      <button href="#" className="btn btn-success">Confirm</button>                      
                    </div>
                  </div>








                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        








      </div>
    );
  }
}
