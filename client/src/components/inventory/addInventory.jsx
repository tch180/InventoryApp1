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
            }
       
            
        ///////////////
        // Handle Submit Works, Handle Change works and is capturing data, I believe this is because the form needed to have the ID and Name Fields set to each one.  
        ///////////////

    

            handleSubmit = async (event) => {
                event.preventDefault();
                await  axios.post(`/api/items`, { items: this.state.items });
               
                console.log("Submitting", this.state.items)
                // console.log(this.inputNode.value)
            };

            handleChange = (event)=>{
                const newState = {...this.state.items}
                newState[event.target.name] = event.target.value
                this.setState({items: newState})
            }

          

           
                 
            



    render() {
        return (
            <div className="card bg-light" style={{color:"black", width:"18rem",margin: "0 auto"}}>

                <form onSubmit={this.handleSubmit}  >

                      <label htmlFor="inputItemname" >Item Name</label>
                      <input
                        placeholder="Item Name" 
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"  
                        required
                        value={this.state.name}
                       />
                        <label htmlFor="inputItemname" >Price </label>
                      <input
                        placeholder="Item Price" 
                        onChange={this.handleChange}
                        type="text"
                        name="price"
                        id="price"
                        className="form-control"  
                        required
                         value={this.state.price}
                       />
                         <label htmlFor="inputItemname" >sku </label>
                      <input
                        placeholder="Item Sku" 
                        onChange={this.handleChange}
                        type="number"
                        name="sku"
                        id="sku"
                        className="form-control"  
                        required
                         value={this.state.sku}
                       />
                         <label htmlFor="inputItemname" >description </label>
                      <input
                        placeholder="Item description" 
                        onChange={this.handleChange}
                        type="text"
                        name="description"
                        id="description"
                        className="form-control"  
                        required
                         value={this.state.sku}
                       />
                        <label htmlFor="inputItemname" >Photo Url </label>
                      <input
                        placeholder="Item Photo" 
                        onChange={this.handleChange}
                        type="text"
                        name="photo"
                        id="photo"
                        className="form-control"  
                        required
                         value={this.state.photo}
                       />
                        <label htmlFor="inputItemname" ># available </label>
                      <input
                        placeholder="Item available" 
                        onChange={this.handleChange}
                        type="number"
                        name="available"
                        id="available"
                        className="form-control"  
                        required
                         value={this.state.available}
                       />













                    <button type="submit" className="btn btn-success">Add to inventory</button>

                </form>

               

            </div>
            
        );
    }
}

export default addInventory;