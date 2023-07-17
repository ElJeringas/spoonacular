import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

function Searched() {
    const [searchRecipes, setSearchRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name)=>{
    //const csn = name.toString();
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6820604bd3a44f849de0112f112d822e&query=${name}`
    );

    const recipes = await data.json();
    setSearchRecipes(recipes.results);
    console.log(recipes)

  };

  useEffect(() => {
    getSearched(params.search);
    console.log(params.search);
  }, [params.search]);

  
  return (
    <Grid>
        {searchRecipes.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt=""></img>
                    <h4>{item.title}</h4>
                </Card>
            );
        })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
  grid-grap:3rem;
`

const Card= styled.div`
  img {
    width:100%;
    border-radius:2rem;
  }
  a{
    text-decoration:none;
  }
  h4{
    text-align:center;
    padding:1rem;
  }
`
export default Searched