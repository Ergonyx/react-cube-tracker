import React, { Component } from 'react';

import posts from './ItemData.json';

class DiabloItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: posts.Items
        };
    }

    render() {
        const {posts} = this.state;
        return(
            <div>
                <table className="item" border="1" width="60%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Sub Type</th>
                            <th>Description</th>
                            <th>Classes</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            posts.map(post => (
                                <tr>
                                    <td>{post.Name}</td>
                                    <td>{post.Type}</td>
                                    <td>{post.SubType}</td>
                                    <td>{post.Description}</td>
                                    <td>{post.Class}</td>
                                </tr>
                                
                            ))
                        }
                    </tbody>
                    
                
                </table>
            </div>
        );
    }
}



export default DiabloItems;