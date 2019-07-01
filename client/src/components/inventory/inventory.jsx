import React, { Component } from 'react';
import axios from 'axios';


class inventory extends Component {
    state = {
            error: '',
            items:[]
        }
    

    componentWillMount() {
        this.getAllItems();

    }
    


  
   

    getAllItems = async ()=> {
        try{ 
            const res = await axios.get(`/api/items/`);
            await this.setState({items: res.data});
            console.log(res.data)
            console.log("Port = ",process.env.PORT)
            return res.data;
            
        } 
        catch (err){
            console.log(err)
            await this.setState({ error: err.message})
            return err.message
        }
    }

    async deleteItem(id){
        try {
            const res = await axios.delete(`/api/items/${id}`)
            this.getAllItems()
            console.log(res.data)

        }catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <div>

            <h1 className='card bg-dark'>Items</h1>
                <div className="container-fluid row" style={{display:"flex", justifyContent:"space-around"}} >
                    {this.state.items.map((item, index) => {
                        return (
                            <div  key={index} >

                                 <div  className = "card mt-2 " style = {{width: "18rem", }} > 
                                        <img src={item.photo} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                        <h5 className="card-title">Item: {item.name}</h5>
                                        <h5 className="card-text">Sku: {item.sku}</h5>
                                        <h5 className="card-text">Price: ${item.price}</h5>
                                        <h5 className="card-text"># available: {item.available}</h5>
                                        <h5 className="card-text"> Product Description:  {item.description}</h5>
                                <hr/>
                                <button className="btn btn-success">Order</button>
                                <button type="submit" onClick={() => this.deleteItem(item.id)} className="btn btn-danger">Delete</button>




                                      </div>
                                 </div>
                            </div>
                        
                        ); 
                    })}
                    
                </div> 
                </div>

        );
    }
}

export default inventory;