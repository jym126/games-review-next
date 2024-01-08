import { Nav } from "../components/Nav";

import { NextResponse } from "next/server";
import Cards from "../components/Cards";
import Form from "../Form/page";
import SearchForm from "../SearchForm/page";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


async function loadPosts(id) {

  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=0f37c1fbe7294b1fa22d0a8742173d98`);
  const data = await res.json();
  return data;
}

async function CreateForm (props) {

  const id = props.searchParams.id

  const valor = [];

  const posts = await loadPosts(id);
  valor.push(posts)

  return (
    <>
      <div>
        <Nav />
        <div className="flex justify-center text-3xl">
        <h1>Find Game</h1>
        </div>
        <div className="flex justify-center text-3xl">
        <SearchForm/>
        </div>

        <div className="flex justify-center">
          {valor.map(game => {
            return (
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
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CreateForm;
