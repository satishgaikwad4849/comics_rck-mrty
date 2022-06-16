import React, { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { ADD_FAVORITES,REMOVE_FAVORITES } from '../redux/actions/action';
import { useDispatch,useSelector } from 'react-redux';
import _ from 'lodash'


const Cards=(props)=>{

const favorites=useSelector(state=>state.favorites_char)
const [isFavorites, setFavorites] = useState(_.includes(favorites,props.character.id))
const [show, setShow] = useState(false);

const handleClose = (id) => {dispatch(REMOVE_FAVORITES(id));console.log(id);setShow(false)}
const handleShow = () =>{ setShow(true);}


const dispatch = useDispatch();

const sendFav = (id)=>{

  if(isFavorites){
    handleShow()
    }else{
      dispatch(ADD_FAVORITES(id));
      setFavorites(true) 
    }
  }

useEffect(()=>{

 setFavorites(_.includes(favorites,props.character.id))

},[favorites,props.character.id])


  return (
    <>
      <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
        <Card.Img variant="top" src={props.character.image} style={{height:"16rem"}} className="mt-3" />
        
        <Card.Body>

          <Card.Title>{props.character.name}</Card.Title>

          <Card.Text>
            {props.character.status}
          </Card.Text>
          <Card.Text>
            Species: {props.character.species}
          </Card.Text>
          <Card.Text>
            Gender:{props.character.gender}
          </Card.Text>

          <div className="button_div d-flex justify-content-center">
            <Button 
              variant={isFavorites ?"danger":"primary"}  
              onClick={()=>sendFav(props.character.id)}
              className='col-lg-12'>
                {isFavorites?"Remove From Favorites":"Add to Favorites"}
            </Button>  
          </div>  
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to remove this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handleClose(props.character.id)}>
            {isFavorites?"Confirm Remove From Favorites":"Add to Favorites"}
          </Button>
        </Modal.Footer>
      </Modal>
        </Card.Body>
        
      </Card>
    </>
  )
}

export default Cards