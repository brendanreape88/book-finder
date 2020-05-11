import React from 'react'
import './Filter.css'

class Filter extends React.Component {
    render() {
        return (
            <div className="filter-div">
                <form>
                    <label>Print Type:</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Book Type:</label>
                    <select>
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Filter