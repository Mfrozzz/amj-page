import { Countdown } from "./components/Countdown";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import bg from "/wallpaperAmjPage.png";
import logo from "/amjLogo.png";
import oque from "/AMJ_oque.jpg";
import cidade from "/cidade.png";
import salesianos from "/salesianos.jpg";
import ajsAMJ from "/ajsAMJ.jpg";
import emBreve from "/cropped-em_breve.png";

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
            Contagem regressiva para a<br/>AMJ-PR 2026
          </h1>

          <Countdown targetDate={eventDate} />

          <Section
            id="oque"
            title="O que é?"
            text="A Animação Missionária Juvenil (AMJ) é uma das principais propostas pastorais da 
              Inspetoria Salesiana São Pio X, organizada anualmente pela equipe inspetorial de Pastoral 
              Juvenil Salesiana (e-PJS). Destinada a adolescentes de 14 a 17 anos das presenças salesianas, 
              a AMJ é muito mais do que uma semana missionária: é um verdadeiro itinerário formativo que 
              integra fé, missão e vida. Ao longo de mais de 15 anos de história, a AMJ consolidou-se como 
              uma expressão concreta do espírito missionário que marca nossa Inspetoria. Inspirada no 
              carisma de Dom Bosco, a proposta busca formar jovens protagonistas, capazes de viver e 
              testemunhar o Evangelho com alegria, compromisso e espírito de serviço. Mais do que um evento 
              pontual, a AMJ é uma experiência transformadora. Ela favorece o amadurecimento da fé, 
              fortalece o senso de pertença à comunidade e à Igreja, e desperta nos jovens o compromisso 
              com a construção de uma sociedade mais justa, fraterna e solidária. Afinal, como recorda 
              nosso Padre Inspetor, somos uma inspetoria missionária — e a AMJ é um dos caminhos 
              privilegiados para viver essa identidade."
            image={oque}
          />

          <Section
            id="cidade"
            title="Cidade"
            text="Neste ano, a AMJ acontece na cidade de Ponta Grossa, localizada na região dos Campos Gerais do Paraná. Cidade marcada pela 
              diversidade cultural, pela força da fé de seu povo e por uma rica história de desenvolvimento, 
              Ponta Grossa é também um importante polo educacional, social e religioso do estado. A missão será realizada 
              na Paróquia Nossa Senhora Auxiliadora, presença salesiana na cidade e espaço vivo do carisma 
              de Dom Bosco. Como paróquia confiada aos Salesianos, ela carrega a espiritualidade juvenil 
              salesiana, promovendo uma pastoral dinâmica, próxima dos jovens e comprometida com a 
              evangelização e a promoção humana. É nesse solo fecundo, sob o olhar materno de Nossa Senhora 
              Auxiliadora, que nossos jovens missionários serão enviados a testemunhar a alegria do 
              Evangelho, fortalecendo laços de fé, fraternidade e serviço."
            image={cidade}
            reverse
          />

          <Section
            id="checklist"
            title="Checklist"
            text="Aguarde, em breve divulgaremos a checklist para os missionários e missionárias que 
              participarão da AMJ 2026. Ela conterá todas as informações necessárias para a preparação, 
              incluindo itens essenciais para levar, orientações sobre a programação, dicas de convivência 
              e tudo o que os jovens precisam saber para viver essa experiência de forma plena e segura."
            image={emBreve}
          />

          <Section
            id="salesianos"
            title="Salesianos"
            text="Os Salesianos são membros da congregação religiosa fundada por Dom Bosco em 1859, 
              oficialmente chamada de Congregação Salesiana (Sociedade de São Francisco de Sales). 
              Nascida em Turim, na Itália, a congregação surgiu com a missão de cuidar, educar e 
              evangelizar os jovens, especialmente os mais pobres e em situação de vulnerabilidade. 
              Hoje, os Salesianos estão presentes em mais de 130 países, atuando em escolas, paróquias, 
              oratórios, centros juvenis, obras sociais e missões. Sua missão é clara: ser sinais e 
              portadores do amor de Deus aos jovens, caminhando ao lado deles, formando bons cristãos e 
              honestos cidadãos."
            image={salesianos}
            reverse
          />

          <Section
            id="ajs"
            title="AJS"
            text="A AJS, Articulação da Juventude Salesiana, é a rede que reúne grupos, pastorais e 
              movimentos juvenis que vivem a espiritualidade e o carisma de Dom Bosco e de Santa Maria 
              Domingas Mazzarello. Mais do que uma estrutura organizativa, a AJS é um movimento de comunhão 
              e protagonismo juvenil, onde os próprios jovens são chamados a ser sujeitos ativos da 
              evangelização e da transformação social. Sua identidade está profundamente ligada à 
              Espiritualidade Juvenil Salesiana, marcada pela alegria, pela amizade com Cristo, pela vida 
              em grupo, pelo serviço aos mais necessitados e pelo compromisso com a Igreja. Assim, a AJS 
              não é apenas “um grupo de grupos”, mas uma grande família juvenil que caminha unida, 
              fortalecendo o senso de pertença, o protagonismo e a missão de cada jovem no mundo e na Igreja."
            image={ajsAMJ}
          />

        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;