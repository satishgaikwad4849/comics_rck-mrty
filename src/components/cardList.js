import React,{useState,useEffect}from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Cards from './cards';
import _ from 'lodash'

const CardList=(props)=>{

const [ selectedGenderOptions, setSelectedGenderOptions ] = useState("");
const [ searchName, setSearchName ] = useState('');
const [ characterStatus, setCharacterStatus ] = useState("");
const [ species, setSpecies]=useState("");
const [characterDataList, setCharacterDataList] = useState(null);

const dispatch = useDispatch();

const filterCharacterStatus = (array) => {
  if(characterStatus.length >=1){
    return _.filter(array,["status",characterStatus]);  
  }else{
    return array;
  }
};

const filterSelectedGenderOptions = (array) => {
  if(selectedGenderOptions.length >=1){
    return _.filter(array,["gender",selectedGenderOptions]);
   }else{
     return array;
   }
};

const filterSpeciesOptions = (array) => {
  if(species.length >=1){
    return _.filter(array,["species",species]);
   }else{
     return array;
   }
};

const filtersearchName = (array) => {
  if(searchName.length >=1){
    return array.filter((item) => item.name.toLowerCase().indexOf(searchName.toLowerCase()) != -1);
  }else{
    return array;
  }
};

useEffect(() => {
  //Filter options updated so apply all filters here
  let result = props.characterData
  result = filterCharacterStatus(result);
  result = filterSelectedGenderOptions(result);
  result = filtersearchName(result);
  result = filterSpeciesOptions(result);

  setCharacterDataList(result);

}, [props.characterData,characterStatus,selectedGenderOptions,searchName,species]);

const handleChange = value => {
  setSearchName(value);
};


  return (
    <div className='container mt-3'>
      <Stack direction="horizontal" gap={4}>
        <div className="bg-light border">   
         <Form.Control 
          type="name"
          value={searchName}
          onChange={e => handleChange(e.target.value)} 
          placeholder="search by name" />
        </div>
      <div className="bg-light border"> 
        <Form.Control as="select"  
          value={characterStatus}
          onChange={e => {
            setCharacterStatus(e.target.value);
          }}>
          <option value="">Select Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Form.Control>
      </div>
      <div className="bg-light border"> 
        <Form.Control as="select"  
            value={species}
            onChange={e => {
              setSpecies(e.target.value);
            }}>
            <option value="">Select Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
        </Form.Control>  
        </div>
      <div className="bg-light border">
        <Form.Control as="select"  
            value={selectedGenderOptions}
            onChange={e => {
              setSelectedGenderOptions(e.target.value);
            }}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
      </div>
      <div className="bg-light border">
      <Button variant="primary" onClick={()=>setCharacterDataList(props.characterData)}>Clear</Button>
      </div>
    </Stack>
      <div className="row d-flex justify-content-center align-items-center">
        {
          characterDataList !== null ? characterDataList.map((character) => {
            return (
              <>
                <Cards key={character.id} character={character} characterData={characterDataList} />
              </>
            )
          })
        :null}
      </div>
    </div>
  )
}

export default CardList