import { Nav } from "../components/Nav"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from "./Form";


export default async function CreateForm() {


  let id = 3412
  
  const handleSubmit = async (formData: FormData) => {
    "use server"

    
    id = formData.get('name')

  }
  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=0f37c1fbe7294b1fa22d0a8742173d98`, {
    next: {tags: ['collection']},
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },

  });
  

  const valor = [];
  const games = await res.json();
  valor.push(games)
  


return (
  <>
  <div>
  <Nav/>
  <h1 className="flex justify-center text-3xl">Find Game</h1>

  <div>
        <form action={handleSubmit}>
          <label htmlFor="name">Search</label>
          <input id="name"
          name="name"
                type="number"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="flex justify-center">
      {valor.map(game => {
        return(
            <Card key={game.id} className="m-2 rounded-xl" sx={{ maxWidth: 500 }}>
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
                <text className="font-bold mr-2">Platform:</text> {game.platforms[0].platform.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="flex">
                <text className="font-bold mr-2">Developer:</text> {game.developers[0].name}
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
      })
    }
      
  </div>

  </div>
  

  </>
)

}
