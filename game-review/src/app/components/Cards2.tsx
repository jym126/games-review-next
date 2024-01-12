"use client"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Modal from "react-modal";

export default function Cards2({game}) {

  const [showModal, setShowModal] = useState(false);
  const customStyles = {
    content: {
      width: "50%",
      margin: "auto",
      backgroundColor: "#2E4053"
    }
  };

  return (
    <Card key={game.id} className="m-2 rounded-xl max-h-svh" sx={{ maxWidth: 250 }}>
    <CardMedia
      component="img"
      alt='game cards'
      height="140"
      image ={game.background_image}
    />
    <CardContent>
      <Typography component={'span'} gutterBottom variant="h5" component="div">
        {game.name}
      </Typography>
      <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Release Date:</text> {game.released}
      </Typography>
    </CardContent>

    <button onClick={() => setShowModal(true)} className='text-blue-400 ml-4'>Screenshots</button>
  <Modal style={customStyles}  isOpen={showModal}>
    <button onClick={() => setShowModal(false)} className='text-blue-100 text-xl'>Cerrar</button>

    <Card className="m-2 rounded-xl">
    <CardMedia
      component="img"
      alt='game cards'
      height="140"
      image ={game.background_image}
    />

    <CardContent>
      <Typography component={'span'} gutterBottom variant="h5" component="div">
        {game.name}
      </Typography>
      <Typography component={'span'} variant="body2" color="text.secondary">
        {game.description_raw}
      </Typography>
      <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
        <parent className="font-bold mr-2">Platform:</parent> {game.parent_platforms[0].platform.name}
      </Typography>
      <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
        <parent className="font-bold mr-2">Rating:</parent> {game.rating}
      </Typography>
      <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
        <parent className="font-bold mr-2">Release Date:</parent> {game.released}
      </Typography>
    </CardContent>
  </Card>
  </Modal>
  </Card>
  )
}
