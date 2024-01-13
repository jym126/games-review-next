"use client"

import { Nav } from "../components/Nav"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Delete } from '@mui/icons-material';
import { red } from "@mui/material/colors";
import Swal from "sweetalert2";

export default function Page() {

  let result = [{
    id: '',
    name: 'No games added yet',
    image: 'https://res.cloudinary.com/dmimages/image/upload/v1705048340/sad_e72dxj.png'
  }]

  let datos;
  let ids;
  try {
    datos = JSON.parse(localStorage.getItem("favoriteGames"));
    ids = JSON.parse(localStorage.getItem("gamesId"));
  } catch (error) {
    
  }
  if (datos) {
    result = datos
  }

  function deleteFavorite(id) {

    Swal.fire({
      title: "Do you want to delete the game?",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        const index = datos.findIndex((x) => x.id === id);
        //Once the element is found we delete the game and the id from both places in localstorage
        if (index !== -1) {
          datos.splice(index, 1)
          ids.splice(index, 1)
          localStorage.setItem("favoriteGames", JSON.stringify(datos))//New favorite view
          localStorage.setItem("gamesId", JSON.stringify(ids))//New hearts marked as favorite
        }
        Swal.fire("Game deleted!", "", "success");
      }
    });
  }

  return (
    <>
      <div>
        <Nav />
        <section className="bg-blue-500 text-white py-2">
          <h1 className="flex justify-center text-3xl">Favorites</h1>
        </section>
      </div>
      <div className="flex flex-wrap">
        {result.map(game => {
          return (
            <div className="flex flex-wrap">
              <Card key={game.id} className="m-2 rounded-xl" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt='game cards'
                  height="140"
                  image={game.image}
                />
                <CardContent>
                  <Typography component={'span'} gutterBottom variant="h5" component="div">
                    {game.name}
                  </Typography>
                </CardContent>
                <div className="inline-flex ml-72">
                <Delete
                  sx={{ color: "red", fontSize: 35 }}
                  onClick={() => deleteFavorite(game.id)}/>
                  </div>
              </Card>
            </div>

          )
        })
        }

      </div>
    </>
  )

}