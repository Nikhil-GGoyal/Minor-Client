import "../shared/cards/cards.scss"
import Section from "../shared/cards/Cards"
import Header from "../shared/header/Navbar"
import Footer from "../shared/footer/Footer"
function Cards() {
    const data = JSON.parse(localStorage.getItem("token") || "[]")
    const record = data.userlogin.courses;

    return (
        <>
            <Header />
            {
                data.userlogin.courses ?
                    <div className="card-container">
                        <div className="row">
                            {
                                record.map((data, index) =>
                                    <div key={index} className="col-sm">
                                        <Section link="/attendance-data" header={data} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    : <div class="p-5 rounded" style={{ background: 'rgba(255, 0, 0, 0.195)',margin:'20px' }}>
                        <h1 style={{ color: 'rgba(225, 109, 109, 0.779)' }}>Data Not Found</h1>
                        <p class="lead">Faculty that logged in either he/she is not valid or hasn't any course alloted. Contact to over team</p>
                        <a class="btn btn-light" style={{background:'rgb(255,0,0,0.200)'}} href="/Contact" role="button">Contact Us</a>
                    </div>
            }
            <Footer />
        </>
    );
}

export default Cards;