import React, { Component } from 'react';
import axios from 'axios'

class addInventory extends Component {
        
            state = {
                items: {
                    name: '',
                    price:'',
                    sku:'',
                    description:'',
                    photo:'',
                    available:'',
                
                   } 
                };
                   
                
            
                      
        
              
         
        

      


            handleChange = (event) => {
                const updateItems = {
                    ...this.state.items
                }
                updateItems[event.target.name] = event.target.value
                this.setState({ items: updateItems })
              }


          
            
        ///////////////
        // Handle Submit Works, handle Change is not capturing the data from the form. 
        ///////////////

    

            handleSubmit = async (event) => {
                event.preventDefault();
                await axios.post(`/api/items`, {items: this.state.items});
            }




            //  handleChange = async (event) => {
            //     const name = event.target.name
            //     const updateItemsName = {...this.state.items}
            //     const updateItems = {...this.state.items}
            //     updateItemsName[name]= event.target.value
            //     this.setState({items: updateItems})
            // }

           
                    // handleChange = event => {
                    //     this.setState({
                            
                    //         [event.target.name]: event.target.value,
                        
                    //     })
                    //     console.log(this.state)
                    // }

            



    render() {
        return (
            <div className="card bg-light" style={{color:"black", width:"18rem",margin: "0 auto"}}>

                <div className="form"  >

                     <div className="">
                      <label htmlFor="inputItemname" >Item Name</label>
                      <input type="text" className="form-control"  
                         placeholder="Item Name" 
                         onChange={this.handleChange}
                       />
                     </div>
                </div>
                <button type="submit" onClick={this.handleSubmit}  className="btn btn-success">Add to inventory</button>

            </div>
            
        );
    }
}

export default addInventory;