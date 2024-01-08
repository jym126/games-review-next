import { Nav } from "../components/Nav"
import Cards from "../components/Cards";

import { ClassNames } from "@emotion/react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default async function Page() {

  const res = await fetch('https://api.rawg.io/api/games?key=0f37c1fbe7294b1fa22d0a8742173d98', {
    next: {tags: ['collection']},
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },

  });

  const valor = {};
  const games = await res.json();
  const result = games.results.map((valor:any) => valor)

return (
  <>
  <div>
  <Nav/>
  <h1 className="flex justify-center text-3xl">Available Games</h1>
  </div>
  <div className="flex flex-wrap">
      {result.map(game => {
        return(
          <Cards game={game}/>
        )
      })
    }
      
  </div>
  </>
)

}
