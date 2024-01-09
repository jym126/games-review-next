"use client"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewsModal from './Modal';

export default function Cards2({game}) {


  const modal = () => {

    return(
      <div className="App">
<h1>Hello Coders!</h1>
<NewsModal />
</div>
    )
  }


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
        <text className="font-bold mr-2">Platform:</text> {game.platform}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Developer:</text> {game.developer}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="flex">
        <text className="font-bold mr-2">Release Date:</text> {game.released}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}
