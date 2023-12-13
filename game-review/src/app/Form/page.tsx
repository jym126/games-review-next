"use client"
import { useState } from 'react';

export default function Form() {

  const [name, setName] = useState(0)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/Search?name=${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        // Handle success
        console.log('Name added successfully');

      } else {
        // Handle errors
        console.error('Error adding name');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Search</label>
      <input className='text-black' id="name"
            name="name"
            type="number"
            value={name}
            onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    <h1 className='text-white'>{name}</h1>
  </div>
  
  )
}


// import { Nav } from "../components/Nav"

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Form from "./Form";



// export default async function CreateForm() {

//   async function loadGames(name) {
    
//     const res = await fetch(`https://api.rawg.io/api/games/${name}?key=0f37c1fbe7294b1fa22d0a8742173d98`, {
//       next: {tags: ['collection']},
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       },
  
//     });
//     const data = await res.json();
//     return data;
//   }
  

  
//     return (
//       <>
//       <div>
//       <Nav/>
//       <Form/>
//       <h1 className="flex justify-center text-3xl">Find Game</h1>

//       <Form/>
    
//           <div className="flex justify-center">
//           {valor.map(game => {
//             return(
//                 <Card key={game.id} className="m-2 rounded-xl" sx={{ maxWidth: 500 }}>
//                 <CardMedia
//                   component="img"
//                   alt='game cards'
//                   height="140"
//                   image ={game.background_image}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {game.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {game.description_raw}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" className="flex">
//                     <text className="font-bold mr-2">Genre:</text> {game.genres[0].name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" className="flex">
//                     <text className="font-bold mr-2">Platform:</text> {game.platforms[0].platform.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" className="flex">
//                     <text className="font-bold mr-2">Developer:</text> {game.developers[0].name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" className="flex">
//                     <text className="font-bold mr-2">Release Date:</text> {game.released}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">Share</Button>
//                   <Button size="small">Learn More</Button>
//                 </CardActions>
//               </Card>
//             )
//           })
//         }
          
//       </div>
    
//       </div>
    
//       </>
//     )
// }