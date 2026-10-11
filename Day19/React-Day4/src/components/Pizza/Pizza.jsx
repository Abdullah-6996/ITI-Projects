import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import Loader from '../Loader/Loader'

export default function Pizza() {

    const [recipesArray, setRecipesArray] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getRecipes();
    },[])

    async function getRecipes(searchTerm = `pizza`) {
        try {
            let {data} = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`);
            setRecipesArray(data.data.recipes);
            setIsLoading(false);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center my-3">Pizza Section</h1>
                <div className="row">
                    { recipesArray.length > 0 ? recipesArray.map( (recipe) => <RecipeCard key={recipe.id} recipe={recipe} /> ) : `Data Not Found!`}
                    { isLoading ? <Loader /> : recipesArray.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </div>
            </div>
        </>
    )


}