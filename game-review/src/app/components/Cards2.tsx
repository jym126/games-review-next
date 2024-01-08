import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({game}) {
  return (
    <Card key={game.id} className="m-2 rounded-xl max-h-svh" sx={{ maxWidth: 250 }}>
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
