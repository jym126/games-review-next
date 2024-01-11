"use client"

import { Nav } from "../components/Nav"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 export default function Page() {


    const result = JSON.parse(localStorage.getItem("favoriteGames"))
    console.log(result);

     return (
        <>
        <div>
        <Nav/>
        <section className="bg-blue-500 text-white py-2">
        <h1 className="flex justify-center text-3xl">Favorites</h1>
        </section>
        </div>
        <div className="flex flex-wrap">
            {result.map(game => {
              return(
                <div>
            <Card key={game.id} className="m-2 rounded-xl">
            <CardMedia
              component="img"
              alt='game cards'
              height="140"
              image ={game.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {game.name}
              </Typography>
            </CardContent>
          </Card>

                </div>
              )
            })
          }
            
        </div>
        </>
)

}