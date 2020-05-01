import React, { Component } from 'react';

import posts from './ItemData.json';

const strongOpen = "<strong>";
const strongClose = "</strong>";

class DiabloItems extends Component {
        state = {
            posts: posts.Items,
            formattedPosts: posts.Items,
            currentSelection: "all"
        };
    
    render() {
        // const {posts} = this.state;
        const formatText = text => {
            let desc;
            if (text.includes("<strong>")) {
                let openTag = text.search("<strong>");
                let closeTag = text.search("</strong>");
                let bold = text.substring(openTag + strongOpen.length, closeTag);
                let leadingText = text.substring(0, openTag);
                let trailingText = text.substring(closeTag+ strongClose.length, text.length);
                desc = <p>{leadingText}<font color='blue' className='text-info'><strong>{bold}</strong></font>{trailingText}</p>;
            }
            else {
                return text;
            }
            return desc;
        }

        // Add search box to search by item name
        const findClassItems = (selectedClass) => {
            const newArray = this.state.posts.filter(current => {
                return current["Class"].includes(selectedClass);
            })
            this.setState({
                formattedPosts: [...newArray],
                currentSelection: selectedClass
            })
        }
        const clearClassSelection = () => {
            const newArray = [...this.state.posts]
            this.setState({
                formattedPosts: newArray,
                currentSelection: "all"
            })
        }

        return(
            <div>
                {/* Give button function to prevent it running on first load */}
                <div className="classButtons">
                    <button style={this.state.currentSelection === "Barbarian" ? {backgroundColor:"#ec5f5f"} : {backgroundColor:"white"}} onClick={() => findClassItems("Barbarian")}>Barbarian</button>
                    <button style={this.state.currentSelection === "Crusader" ? {backgroundColor:"#f3e22b"} : {backgroundColor:"white"}} onClick={() => findClassItems("Crusader")}>Crusader</button>
                    <button style={this.state.currentSelection === "Demon Hunter" ? {backgroundColor:"#fa7af6"} : {backgroundColor:"white"}} onClick={() => findClassItems("Demon Hunter")}>Demon Hunter</button>
                    <button style={this.state.currentSelection === "Monk" ? {backgroundColor:"#fa9200"} : {backgroundColor:"white"}} onClick={() => findClassItems("Monk")}>Monk</button>
                    <button style={this.state.currentSelection === "Necromancer" ? {backgroundColor:"#00b2d1"} : {backgroundColor:"white"}} onClick={() => findClassItems("Necromancer")}>Necromancer</button>
                    <button style={this.state.currentSelection === "Witch Doctor" ? {backgroundColor:"#2acb52"} : {backgroundColor:"white"}} onClick={() => findClassItems("Witch Doctor")}>Witch Doctor</button>
                    <button style={this.state.currentSelection === "Wizard" ? {backgroundColor:"#666bff"} : {backgroundColor:"white"}} onClick={() => findClassItems("Wizard")}>Wizard</button>
                    <button onClick={clearClassSelection}>All Items</button>
                </div>
                
                <div className="AppTwo">
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
                                this.state.formattedPosts.map(item => (
                                    <tr key={item.ID}>
                                        <td>{item.Name}</td>
                                        <td>{item.Type}</td>
                                        <td>{item.SubType}</td>
                                        <td>{formatText(item.Description)}</td>
                                        <td>{item.Class}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



export default DiabloItems;