import "./cards.scss"
function Cards(prop) {
    return ( 
        <>
        <div className="card">
            <div className="pb"><h1>BCA</h1></div>
            <div className="info">
                <h1>name</h1>
                <h2>Hover me</h2>
            </div>
            <div className="buttons">
                <button id="detailed" href="/   ">Click</button>
            </div>
        </div>
        </>
     );
}

export default Cards;