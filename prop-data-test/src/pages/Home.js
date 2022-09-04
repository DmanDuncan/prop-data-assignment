import '../styles/home.scss';
import Nav from '../components/nav.js';
import Header from '../components/header.js';
import About from '../components/about.js';
import FeaturedProperty from '../components/featured-property';
import ContentAds from '../components/content-ads.js';
import Footer from '../components/footer';

function Home() {
  return (
    <main className="App">
      <title>Home</title>
        <Nav></Nav>
        <Header></Header>
        <About></About>
        <FeaturedProperty></FeaturedProperty>
        <ContentAds></ContentAds>
        <Footer></Footer>
    </main>
  );
}

export default Home;
