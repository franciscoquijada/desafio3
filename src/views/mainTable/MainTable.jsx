import React, {Component} from 'react';
import Table from '../../components/table/Table';
import Tbody from '../../components/table/Tbody';
import Td from '../../components/table/Td';
import Th from '../../components/table/Th';
import Tr from '../../components/table/Tr';
import ButtonCustom from '../../components/button/Button';
import Strikethrough from '../../components/strikethrough/Strikethrough';
import Context from '../../Context';


class MainTable extends Component {

    static contextType = Context;

    constructor(props, context){
        super(props, context);
        this.state = { 
            data : this.context.data,  
            buttonRingClass : 'danger',
            buttonRingChar : '💍 Use Ring',
            buttonKillClass : 'warning',
            buttonKillChar : '☠ Kill',
            useRing : true
        };
    }

    handleClickUseRing = (event) => {
        let data = this.state.data;
        const {useRing} = this.state;
        data = data.filter(function(value, index, arr){
            return index !== event.target.value;
        });
        this.setState({ data, useRing : !useRing });
    };

    handleClickKill = (row) => {
        let {data} = this.state;
        let dataElement = row;
        dataElement['kill'] = true;
        data = data.filter(function(value, index, arr){
            return value !== row;
        });
        data = data.concat(dataElement);
        this.setState({ data });
    };

    makeTable() {
        const classTr= 'character-row';
        const { data, buttonRingClass, buttonRingChar, buttonKillClass, buttonKillChar, useRing} = this.state;
        return data.map((data, i) => {
           const { name, race, age, weapon, kill } = data
           const buttonKill = <ButtonCustom handleClick={() => (this.handleClickKill(data))} class={buttonKillClass} name={buttonKillChar} value={i}/>;
           let buttonRing = <ButtonCustom handleClick={this.handleClickUseRing} class={buttonRingClass} name={buttonRingChar} value={i}/>;
           buttonRing = kill ? <Strikethrough>{buttonRing}</Strikethrough> : buttonRing;
           return (
              <Tr key={i} class={classTr}>
                 <Td>{kill ? <Strikethrough>{name}</Strikethrough> : name}</Td>
                 <Td>{kill ? <Strikethrough>{race}</Strikethrough> : race}</Td>
                 <Td>{kill ? <Strikethrough>{age}</Strikethrough> : age}</Td>
                 <Td>{kill ? <Strikethrough>{weapon}</Strikethrough> : weapon}</Td>
                 <Td>
                    <div className="controls">
                        { useRing ? buttonRing : null }
                        { kill ? <Strikethrough>{buttonKill}</Strikethrough> : buttonKill}
                    </div>
                 </Td>
              </Tr>
           )
        })
     }

    render() {
        const classTr = 'character-row';
        const classTable = 'characters-table bordered';
        return (
            <Table class={classTable}>
                <Tbody>
                    <Tr class={classTr}>
                        <Th>Name</Th>
                        <Th>Race</Th>
                        <Th>Age</Th>
                        <Th>Weapon</Th>
                        <Th></Th>
                    </Tr>
                        {this.makeTable()}
                </Tbody>
            </Table>
        )
    }        
}

export default MainTable;