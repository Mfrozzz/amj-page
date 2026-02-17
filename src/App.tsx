import { Countdown } from "./components/Countdown";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import bg from "/wallpaperAmjPage.png";
import logo from "/amjLogo.png";

function App() {
  const eventDate = new Date("2026-07-12T10:00:00");

  return (
    <>
      <Navbar />

      <div
        id="home"
        className="min-h-screen min-w-screen bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('${bg}')
          `,
        }}
      >

        <div className="relative z-10 pt-20 flex flex-col items-center gap-8 px-4 text-center">

          <img
            src={logo}
            alt="Logo AMJ"
            className="w-40 md:w-60"
          />

          <h1 className="text-white text-3xl md:text-5xl font-light tracking-widest uppercase">
            Em breve
          </h1>

          <Countdown targetDate={eventDate} />

          <Section
            id="oque"
            title="O que é?"
            text="A AMJ é uma experiência missionária intensa que une juventude, espiritualidade e serviço, inspirada na vivência salesiana."
            image="oque.jpg"
          />

          <Section
            id="cidade"
            title="Cidade"
            text="A cidade que nos acolhe se torna campo de missão, encontro e transformação."
            image="cidade.jpg"
            reverse
          />

          <Section
            id="checklist"
            title="Checklist"
            text="Prepare seu coração e também sua mochila: documentos, itens pessoais e disposição para servir."
            image="checklist.jpg"
          />

          <Section
            id="salesianos"
            title="Salesianos"
            text="Inspirados no carisma de Dom Bosco, vivemos a missão com alegria, presença e amor educativo."
            image="salesianos.jpg"
            reverse
          />

          <Section
            id="ajs"
            title="AJS"
            text="A Articulação da Juventude Salesiana é o movimento que conecta jovens em missão no Brasil inteiro."
            image="ajs.jpg"
          />

        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;