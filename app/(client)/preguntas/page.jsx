import Principal from "./components/Principal";
import Pregunta from "./components/Pregunta";

export default function Page() {

  const data = [
    {
      question: "¿Cómo me ayuda una agencia de marketing digital a vender más?",
      answer: "Estamos convencidos que los principales propósitos de una agencia de marketing digital son: mejorar el posicionamiento de una marca y aumentar la rentabilidad, haciendo uso de diferentes herramientas y estrategias de comunicación, diseño y contenido eligiendo los canales correctos para su difusión y efectividad."
    },
    {
      question: "¿Cómo pueden ayudar a mi empresa a mejorar su presencia en línea?",
      answer: "Nuestros servicios de marketing digital están diseñados para ayudar a las empresas a mejorar su presencia en línea a través de estrategias efectivas de SEO, publicidad en línea, marketing de contenido, marketing de redes sociales y más."
    },
    {
      question: "¿Cuál es la diferencia entre diseño web y desarrollo web?",
      answer: "La diferencia entre diseño y desarrollo web puede ser confusa, pero en resumen, el desarrollo web se refiere a la creación de sitios y aplicaciones web, mientras el diseño web es responsable de la estética y la usabilidad del sitio, ambas se complementan para crear un sitio web exitoso que atraiga tráfico y generen conversiones."
    },
    {
      question: "¿Cuál es la diferencia entre una agencia de publicidad y agencia de marketing digital?",
      answer: "Una agencia de marketing digital ofrece un servicio más integral, así como la de producción en diferentes canales de comunicación digital. Entre los servicios que destacan están el diseño, branding, gestión de redes sociales, posicionamiento web, entre otros. Mientras una agencia de publicidad tiene como finalidad el desarrollo de una campaña de comunicación con un objetivo específico, marcando una ruta de acción que no solo indique la idea y mensaje creativo sino también los canales de comunicación para su correcta difusión y efectividad."
    },
    {
      question: "¿Por qué es importante la creación de tu marca?",
      answer: "Una marca te diferencia de la competencia, permite posicionarte en la mente de tus consumidores, refleja la personalidad de tu empresa y transmite tus valores."
    },
    {
      question: "¿Por qué refrescar mi marca?",
      answer: "Cuando queremos comunicar un nuevo mensaje y una renovación profunda es importante hacerlo desde las bases, un cambio en tu marca creará un pensamiento de transformación en la mente de tus clientes."
    },
    {
      question: "¿Cómo se mide el éxito de la marca corporativa?",
      answer: "Medir la marca corporativa es una tarea compleja. Se trata de evaluar la percepción que tienen los clientes potenciales y actuales de la marca, así como el impacto que tiene en el mercado. Para medir la marca corporativa de manera efectiva, es importante considerar una variedad de factores, desde las menciones en las redes sociales hasta la cantidad de tráfico web que genera la marca."
    },
    {
      question: "¿Con qué frecuencia debo publicar en redes sociales?",
      answer: "La frecuencia con la que debes publicar en las redes sociales depende de varios factores, incluyendo el tipo de red social, el objetivo de la campaña de marketing digital y el público objetivo, pero hay que tener en cuenta que publicar con demasiada frecuencia puede resultar en un alto nivel de engagement, mientras que publicar con poca frecuencia puede hacer que se pierda la oportunidad de llegar a un número significativo de personas."
    },
    {
      question: "¿Cuáles son las herramientas de Marketing en las redes sociales?",
      answer: "Existe una gran variedad de herramientas de marketing en redes sociales disponibles para ayudar a las empresas a maximizar su impacto. Algunas de las herramientas incluyen el marketing de contenido, el marketing de influencers, el marketing de anuncios y la analítica. Cada una de estas herramientas tiene sus propias ventajas y desventajas, por lo que es importante seleccionar las que mejor se adapten a las necesidades de la empresa."
    },
    {
      question: "¿Qué es SEO?",
      answer: "El SEO implica optimizar tanto el contenido como la estructura del sitio web para que coincida con las consultas de los usuarios. También puede incluir el marketing de contenidos orientado a atraer tráfico de calidad desde un motor de búsqueda (como Google, Bing o Yahoo) o desde fuentes externas, como las redes sociales."
    },
    {
      question: "¿Qué ventajas aporta la inversión publicitaria online?",
      answer: "La publicidad online ofrece una serie de ventajas sobre otros medios publicitarios convencionales, como la televisión, la radio o el periódico. Pero las principales son: Es más económica la publicidad online. Permite llegar a clientes potencialmente más eficientemente. Puedes medir el impacto de las campañas y ajustarlas en función de los resultados."
    }
  ]


  return (
    <>
      <Principal></Principal>
      <section className="p-4 py-8 grid grid-cols-1 lg:grid-cols-2 lg:max-w-[1500px] lg:gap-12 mx-auto gap-6">
        {data.map(({ question, answer }, index) => (
          <Pregunta question={question} answer={answer} key={index}/>
        ))}
      </section>
    </>
  );
}