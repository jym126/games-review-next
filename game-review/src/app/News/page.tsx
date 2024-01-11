import { Nav } from "../components/Nav"
import Cards from "../components/Cards";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default async function Page() {

  const url = process.env.url;
  const key = process.env.apiKey;

  const res = await fetch(`${url}?key=${key}`, {
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
  <section className="bg-blue-500 text-white py-2">
  <h1 className="flex justify-center text-3xl">Available Games</h1>
  </section>
  </div>
  <div className="flex flex-wrap">
      {result.map(game => {
        return(
          <Cards key={game.id} game={game}/>
        )
      })
    }
      
  </div>
  </>
)

}
