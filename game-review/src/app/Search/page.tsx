"use client"
import { Nav } from "../components/Nav";
import { useState } from "react";

import { NextResponse } from "next/server";
import Cards from "../components/Cards";
import Form from "../Form/page";
import SearchForm from "../SearchForm/page";

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
          {valor.map((game) => {
            return (
              <Cards game = {game}  key={game.id}/>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CreateForm;
