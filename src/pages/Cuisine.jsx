import React from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { AbortedDeferredError, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Cuisine() {
const [cuisine, setCuisine] = useState([]);
let params = useParams();

  const getCuisine = async (name)=>{
    //const csn = name.toString();
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6820604bd3a44f849de0112f112d822e&cuisine=${name.type}`
    );
    
    const recipes = await data.json();
    setCuisine(recipes.results);
    console.log(name.type)

  };

  useEffect(() => {
    getCuisine(params)
  }, [params.type]);

  return (
  <Grid>
  {cuisine.map((item =>{
    return(
      <Card key={item.id}>
        <img src={item.image} alt=''></img>
        <h4>{item.title}</h4>
      </Card>
    )
  }))}
  </Grid>
  )
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
export default Cuisine