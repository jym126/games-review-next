"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { AccessAlarm, ThreeDRotation, Favorite, FavoriteBorder } from '@mui/icons-material';


export default function Cards({ game }) {
  const [showModal, setShowModal] = useState(false);

  const customStyles = {
    content: {
      width: "50%",
      margin: "auto",
      backgroundColor: "#2E4053",
    },
  };

  const addFavoriteGame = {
    id: "",
    name: "",
    image: "",
  };

  let check;
  //Array to save IDs of favorite's games to mark the favorite heart
  try {
    check = JSON.parse(localStorage.getItem("gamesId"));//En Next se debe poner localstorage en try catch o da error
  } catch (error) {
    
  }

  
  async function addToFavorite(fId, fName, fImage) {
    addFavoriteGame.id = fId;
    addFavoriteGame.name = fName;
    addFavoriteGame.image = fImage;
    
    
    try {
      let arrayOfGames = [];//arrays for games
      let arrayOfIds = [];//arrays for IDs
      const ls = await JSON.parse(localStorage.getItem("favoriteGames"));
      const id = await JSON.parse(localStorage.getItem("gamesId"));
      
      if (ls != null) {
        arrayOfGames = ls;

      if(id != null) {
        arrayOfIds = id;
      }
        
        //Evaluate if the game already exists in favorite
        const index = arrayOfGames.findIndex((x) => x.id === fId);
        
        if (index !== -1) {
          Swal.fire("The game already exists");
          return;
        }
      }
      //Save the games to favorite localstorage
      const cacaGame = [...arrayOfGames, addFavoriteGame];
      const myStorage = JSON.stringify(cacaGame);
      localStorage.setItem("favoriteGames", myStorage);

      //Save the IDs of the games in favorites
      const idGame = [...arrayOfIds, fId];
      const myIdStorage = JSON.stringify(idGame);
      localStorage.setItem("gamesId", myIdStorage);
      
      let timerInterval;
      Swal.fire({
        title: "Game saved to favorite",
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    } catch (error) {}
  }
  
  try {    
    if(check === null || check === undefined) {
      check = ['']
    }
  } catch (error) {
    
  }
  
  return (
    <Card key={game.id} className="m-2 rounded-xl" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="game cards"
        height="140"
        image={game.background_image}
        onClick={() => setShowModal(true)}
        />
      <CardContent>
        <Typography component={'span'} gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {game.description_raw}
        </Typography>
        <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
          <p className="font-bold mr-2">Genre:</p> {game.genres[0].name}
        </Typography>
        <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
          <p className="font-bold mr-2">Platform:</p>{" "}
          {game.parent_platforms[0].platform.name}
        </Typography>
        <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
          <p className="font-bold mr-2">Rating:</p> {game.rating}
        </Typography>
        <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
          <p className="font-bold mr-2">Release Date:</p> {game.released}
        </Typography>
      </CardContent>
      <div className="inline-flex space-x-24 m-4">
        <Favorite
        color={ check.includes(game.id)? 'secondary' : 'disabled'}
          className="fa fa-question-circle cursor-pointer"
          size={25}
          onClick={() => addToFavorite(game.id, game.name, game.background_image)}
        />
      </div>
      <Modal style={customStyles} isOpen={showModal}>
        <button
          onClick={() => setShowModal(false)}
          className="text-blue-100 text-xl"
        >
          Cerrar
        </button>

        <Card className="m-2 rounded-xl">
          <CardMedia
            component="img"
            alt="game cards"
            height="140"
            image={game.background_image}
          />
          <CardMedia
            component="img"
            alt="game cards"
            height="140"
            image={game.short_screenshots[1].image}
          />
          <CardMedia
            component="img"
            alt="game cards"
            height="140"
            image={game.short_screenshots[2].image}
          />
          <CardContent>
            <Typography component={'span'} gutterBottom variant="h5" component="div">
              {game.name}
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary">
              {game.description_raw}
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
              <p className="font-bold mr-2">Genre:</p>{" "}
              {game.genres[0].name}
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
              <p className="font-bold mr-2">Platform:</p>{" "}
              {game.parent_platforms[0].platform.name}
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
              <p className="font-bold mr-2">Rating:</p> {game.rating}
            </Typography>
            <Typography component={'span'} variant="body2" color="text.secondary" className="flex">
              <p className="font-bold mr-2">Release Date:</p>{" "}
              {game.released}
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </Card>
  );
}
