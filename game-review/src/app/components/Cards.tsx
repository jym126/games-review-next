"use client"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Modal from "react-modal";
import AddToFavorite from './AddToFavorite';

export default function Cards({game}) {
  const [showModal, setShowModal] = useState(false);
  const customStyles = {
    content: {
      width: "50%",
      margin: "auto",
      backgroundColor: "#2E4053"
    }
  };


  return (
    <Card key={game.id} className="m-2 rounded-xl" sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt='game cards'
      height="140"
      image ={game.background_image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {game.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {game.description_raw}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Genre:</text> {game.genres[0].name}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Platform:</text> {game.parent_platforms[0].platform.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Rating:</text> {game.rating}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Release Date:</text> {game.released}
      </Typography>
    </CardContent>
    <div className='inline-flex space-x-2'>
  <button onClick={() => setShowModal(true)} className='text-blue-600 ml-4'>Screenshots</button>
  <AddToFavorite/>
  </div>
  <Modal style={customStyles}  isOpen={showModal}>
    <button onClick={() => setShowModal(false)} className='text-blue-100 text-xl'>Cerrar</button>


    <Card className="m-2 rounded-xl">
    <CardMedia
      component="img"
      alt='game cards'
      height="140"
      image ={game.background_image}
    />
        <CardMedia
      component="img"
      alt='game cards'
      height="140"
      image ={game.short_screenshots[1].image}
    />
            <CardMedia
      component="img"
      alt='game cards'
      height="140"
      image ={game.short_screenshots[2].image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {game.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {game.description_raw}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Genre:</text> {game.genres[0].name}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Platform:</text> {game.parent_platforms[0].platform.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Rating:</text> {game.rating}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Release Date:</text> {game.released}
      </Typography>
    </CardContent>
  </Card>
  </Modal>
  </Card>
  )
}
