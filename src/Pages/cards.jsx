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
            <Footer />
        </>
    );
}

export default Cards;