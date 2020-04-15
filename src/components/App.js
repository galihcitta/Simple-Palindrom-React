import React from 'react'

import SearchBar from './SearchBar'

class App extends React.Component {
   
    state = {
        palindrom: '',
        status: '',
        boolStat: null
    }

    palindromProcess = (p) => {
        let preWord = p.toLowerCase().trim()
        let postWord = preWord.split('').reverse().join('')

        if (preWord === postWord) {
            return this.setState({ status: 'Jenis Palindrom', boolStat:true })
        } else {
            return this.setState({ status: 'Bukan Merupakan Palindrom', boolStat:false })
        }
    }

    onSubmit = (p) => {
        this.setState({
            palindrom: p
        })

        this.palindromProcess(p)
    }

    initialRender = () => {
        return <h5>Anda Belum Input Angka</h5>
    }

   
   render() {

        return (
            <div>
                <h1>Cek Palindrom React</h1>
                <SearchBar onFormSubmit={this.onSubmit} />
                {
                    (this.state.boolStat === null) ? this.initialRender()
                    : (this.state.boolStat === true) ? <h5>Inputan adalah {this.state.status} yaitu {this.state.palindrom}</h5>
                    : <h5>Inputan {this.state.status}, silahkan coba input lagi</h5>
                }
               
            </div>
            
        )

   }
    
}

export default App