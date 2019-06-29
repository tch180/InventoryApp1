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
                   
                
            
                      
        
              
         
        

      


            // handleChange = (event) => {
            //     const updateItems = {
            //         ...this.state.items
            //     }
            //     updateItems[event.target.name] = event.target.value
            //     this.setState({ items: updateItems })
            //   }


          
            
        ///////////////
        // Handle Submit Works, handle Change is not capturing the data from the form. 
        ///////////////

             handleSubmit = async (event) => {
                event.preventDefault();
                    await axios.post(`/api/items`,{items: this.state.items});
                    console.log("payload is as Follows")
                    console.log("clicked")
                    console.log(this.state,"State")
                    };


             handleChange = async (event) => {
                const attribute = event.target.name
            //     const price = event.target.price
            //     const sku = event.target.sku
            //     const dscript = event.target.description
            //     const photo = event.target.photo

                 const updateItems = {...this.state.items.name}
            //     const updatePrice = {...this.state.price}
            //     const updateSku = {...this.state.price}
            //     const updateDscript = {...this.state.description}
            //     const updatePhoto = {...this.state.photo}

                updateItems[attribute]= event.target.value
            //     updatePrice[price] = event.target.value
            //     updateSku[sku] = event.target.value
            //     updateDscript[dscript ] = event.target.value
            //     updatePrice[price] = event.target.value
            //     updatePhoto[photo] = event.target.value
                 this.setState({items: updateItems})
            }

           
                    // handleChange = event => {
                    //     this.setState({
                            
                    //         [event.target.name]: event.target.value,
                        
                    //     })
                    //     console.log(this.state)
                    // }

                // handleSubmit = async(event)=> {
                //     event.preventDefault();
                //     await axios.post(`/api/items`, {items: this.state.items});
                // }




    render() {
        return (
            <div className="card bg-light" style={{color:"black", width:"18rem",margin: "0 auto"}}>

                <div className="form" onSubmit={this.handleSubmit} >

                     <div className="">
                      <label htmlFor="inputItemname" >Item Name</label>
                      <input type="text" className="form-control"     placeholder="Item Name" onChange={this.handleChange}/>
                     </div>
                </div>
                <button type="submit" onClick={this.handleSubmit}  className="btn btn-success">Add to inventory</button>

            </div>
            
        );
    }
}

export default addInventory;