import Links from "../components/Links"
import Header from "../components/Header"
import './Home.css'


const Home = () => {
    return (
        <div>
            <Header />
            <h1 className="title">Laura PAVLOVA</h1>
            <p className="slogan">Made with love</p>
            <Links />
        </div>
    )
}

export default Home