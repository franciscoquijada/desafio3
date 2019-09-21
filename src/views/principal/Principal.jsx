import React, { Component }  from 'react';
import {getAll} from '../../services/hero.services';
import Table from '../mainTable/MainTable';
import './Principal.css';
import AddForm from '../../components/AddForm';
import Context from '../../Context';

class Principal extends Component{
    constructor(props){
        super(props);
        this.state =
        {
            lista: getAll,
            contador: getAll
        }
        console.log('estado ', this.state.lista);
    }

    handleAddHero = (elemento) => { 
        const lista = this.state.lista;
        const id = this.state.contador;
        lista.push({
           ...elemento,
           id: id
        });
        this.setState({
            lista: this.state.lista,
            contador: id+1
        });
      }

      

    render() {
        return (
            <div className="index">
                <h2>Fellowship of the Ring</h2>
                <div>
                    <div className="search-input">
                        <input type="text" placeholder="search hero"/>
                    </div>
                    
                    {<Context.Provider 
                        value={{
                            data: this.state.lista,
                            handleAddHero: this.handleAddHero
                        }}>
                        <Table/>
                        <AddForm />
                      </Context.Provider>}
                </div>
            </div>
        );
    }
}
export default Principal;