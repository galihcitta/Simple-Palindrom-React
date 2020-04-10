import React from 'react'


class SearchBar extends React.Component {

    state = {
        term: ''
    }

    onTermSubmit = (e) => {
        e.preventDefault()
       this.props.onFormSubmit(this.state.term)
    }

    onFormChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }
    
    
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onTermSubmit}>
                    <label>Masukkan Kata </label> 
                    <input text="input" 
                    value={this.state.term}
                    onChange={this.onFormChange}
                    /> 
                </form>
            </div>
        )
    }
   
}

export default SearchBar