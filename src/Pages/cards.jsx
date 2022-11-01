import "../shared/cards/cards.scss"
import Section from "../shared/cards/Cards"
import Header from "../shared/header/Navbar"
import Footer from "../shared/footer/Footer"
function Cards() {
    return (
        <>
            <Header />
            <div className="card-container">
                <div className="row">
                    <div className="col-sm">
                        <Section />
                    </div>
                    <div className="col-sm">
                        <Section />
                    </div>
                    <div className="col-sm">
                        <Section />
                    </div>
                    <div className="col-sm">
                        <Section />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cards;