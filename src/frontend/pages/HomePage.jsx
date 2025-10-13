
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ContentInfo from '../components/ContentInfo'
import Degrees from '../components/Degrees'
import Banner from '../components/Banner'
import Info from '../components/Info'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


export default function HomePage() {
    return (
        <>
            {/* Top bar + Navbar */}
            <TopBar />
            <NavBar />

            {/* Sections */}
            <main>
                <Hero />
                <ContentInfo />
                <Degrees />
                <Banner />
                <Info />
                <NewsLetter />
            </main>

            <Footer />
        </>
    )
}
