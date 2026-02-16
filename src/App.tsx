import { Countdown } from "./components/Countdown";

function App() {
  const eventDate = new Date("2026-07-12T10:00:00");

  return (
    <div
      className="min-h-screen min-w-screen bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('../wallpaperAmjPage.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        
        <img
          src="../amjLogo.png"
          alt="Logo AMJ"
          className="w-40 md:w-60"
        />

        <h1 className="text-white text-3xl md:text-5xl font-light tracking-widest uppercase">
          Em breve
        </h1>

        <Countdown targetDate={eventDate} />
      </div>
    </div>
  );
}

export default App;