import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import WeatherApp from "./components/WeatherApp";


export default function App() {
  return (
    <>
    <Header />
    <Main>
      <WeatherApp />

    </Main>
    <Footer />

    </>
  )
}