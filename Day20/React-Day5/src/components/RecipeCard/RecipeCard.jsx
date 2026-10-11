export default function RecipeCard({ recipe }) {
    return (
        <>
            <div className='col-md-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={recipe.image_url} alt={recipe.title} style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="card-body">
                        <h5 className="card-title">{recipe.title}</h5>
                        <p className="card-text">{recipe.title}</p>
                    </div>
                </div>
            </div >
        </>
    )
}