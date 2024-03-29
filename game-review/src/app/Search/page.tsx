import { Nav } from "../components/Nav";

import Cards2 from "../components/Cards2";
import SearchForm from "../SearchForm/page";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


async function loadPosts(id) {

  const url = process.env.url;
  const key = process.env.apiKey;

  const res = await fetch(`${url}?key=${key}&search=${id}`);
  const data = await res.json();
  return data;

}

async function CreateForm (props) {

  let id = props.searchParams.id
  const valor = [];

  const posts = await loadPosts(id);
  valor.push(posts.results)
  

  return (
    <>
      <div>
        <Nav />
        <section className="bg-blue-500 text-white py-4">
        <div className="flex justify-center text-3xl">
        <h1>Find Game</h1>
        </div>
        <div className="flex justify-center text-3xl">
        <SearchForm/>
        </div>
        </section>

        <div className="flex flex-wrap">
          {valor[0].map(game => {
            return (
              <Cards2 key={game.id} game={game}/>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CreateForm;
