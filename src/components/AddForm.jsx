import React, {useState, useContext} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Context from '../Context';

const AddForm = function (props) {
    
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState(0);
    const [weapon, setWeapon] = useState('');

    const { handleAddHero } = useContext(Context);

    return (
        <Form>
            <FormGroup className="text-center">
                <Label for="exampleEmail">Name</Label>
                <Input 
                    name="name" 
                    type='text' 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} />
            </FormGroup>
            <FormGroup className="text-center">
                <Label for="exampleEmail">Race</Label>
                <Input 
                     name="race" 
                     type='text' 
                     value={race} 
                     onChange={(event) => setRace(event.target.value)} />
            </FormGroup>
            <FormGroup className="text-center">
                <Label for="exampleEmail">Age</Label>
                <Input 
                     name="age" 
                     type='text' 
                     value={age} 
                     onChange={(event) => setAge(event.target.value)}/>
            </FormGroup>
            <FormGroup className="text-center">
                <Label for="exampleEmail">Weapon</Label>
                <Input 
                     name="weapon" 
                     type='text' 
                     value={weapon} 
                     onChange={(event) => setWeapon(event.target.value)} />
            </FormGroup>
            <div className="text-center">
                <Button color="success"
                    onClick={(event) => {
                        event.preventDefault();
                        const element = {
                            name: name,
                            age: age,
                            weapon: weapon,
                            race: race,
                        };

                        setName('');
                        setRace('');
                        setAge(0);
                        setWeapon('');

                        handleAddHero(element);
                    }}>Agregar</Button>
                </div>
        </Form>
    );  
}

export default AddForm;