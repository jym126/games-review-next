"use client"
import { Nav } from "../components/Nav";
import { useState } from "react";

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

const CreateForm = () => {

  const valor = [];
  const [result, setResult] = useState(null);

  const handleSubmit = async (id) => {
    try {
      const response = await fetch(`/Search?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        console.log(response);
        setResult(response);

      } else {
        console.error('Error fetching data from the API');
        setResult(null);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult(null);
    }
    

    const myId = Number(id);
    console.log(myId);
  const res = await fetch(
    `https://api.rawg.io/api/games/${myId}?key=0f37c1fbe7294b1fa22d0a8742173d98`,
    {
      next: { tags: ["collection"] },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
    );
    const games = await res.json();
    valor.push(games);
  }


  return (
    <>
      <div>
        <Nav />
        <h1 className="flex justify-center text-3xl">Find Game</h1>

        <SearchForm onSubmit={handleSubmit}/>

        <div className="flex justify-center">
          {valor.map((game: any) => {
            return (
              <Card key={game.id} game = {game} className="m-2 rounded-xl" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt='game cards'
                height="140"
                image ={game.background_image}
              />
              <CardContent key={game.id}>
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
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CreateForm;
