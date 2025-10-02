import Header from "../../components/Header";
import Link from "next/link";

export default function CollaborationsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url('/entire_website_background.jpg')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
        }}
      />

      {/* Dynamic Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-32 pl-6 md:pl-24 pr-6 md:pr-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl text-white mb-8 font-normal">Collaborations/Dancers</h1>

          <div className="space-y-6 website-text text-white/90 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mb-3">Dancers:</h2>
              <div className="space-y-1">
                <p>Maria Ferrara</p>
                <p>Andreas Rama</p>
                <p>Irineu Marcovecchio</p>
                <p>Ming Poon <a href="http://www.mingapur.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">mingapur.de</a></p>
                <p>Maria Focaraccio</p>
                <p>Rachell Bo Clarck</p>
                <p>Paqiro Lopéz</p>
                <p>Eli Ruiz Fernandez</p>
                <p>Chriztina Gazi,</p>
                <p>Selina Thüring</p>
                <p>Antonia Cruz</p>
                <p>Mireia de Querol Duran <a href="http://www.mireiadequerol.cat" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">mireiadequerol.cat</a></p>
                <p>Gerard Cabaroccas</p>
                <p>Rocco Vermijs</p>
                <p>Julia Maria Koch <a href="http://www.juliamariakoch.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">juliamariakoch.com</a></p>
                <p>Jana Vrana</p>
                <p>Eli Pulkinnen</p>
                <p>Susanna Vilella</p>
                <p>Boris Lisowski</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Collaborations:</h2>
              <div className="space-y-1">
                <p>Sarah Grether <a href="http://www.sarahgrether.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">sarahgrether.com</a></p>
                <p>Karolyn Strys <a href="https://www.karolinestrys.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">karolinestrys.com</a></p>
                <p>Tomeu Verges <a href="http://www.tomeovergesmandrake.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">tomeovergesmandrake.com</a></p>
                <p>Santiago Sempere</p>
                <p>Achim Wieland</p>
                <p>Montserat Colome</p>
                <p>Roger Bernat <a href="http://www.rogerbernat.info" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">rogerbernat.info</a></p>
                <p>Carol Brown <a href="http://www.carolbrowndances.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">carolbrowndances.com</a></p>
                <p>Alexandra Rauh <a href="http://www.arauh.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">arauh.de</a></p>
                <p>Moreno Bernardi <a href="http://www.morenobernardi.jimdo.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">morenobernardi.jimdo.com</a></p>
                <p>Phoebe Killdeer <a href="http://www.phoebekilldeer.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">phoebekilldeer.com</a></p>
                <p>Mirjam Dumont <a href="http://www.mirjamdumont.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">mirjamdumont.de</a></p>
                <p>Yiannis Kolios</p>
                <p>Christos Karageorgoudis</p>
                <p>Marie Séférian <a href="http://www.marie-seferian.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">marie-seferian.de</a></p>
                <p>Institut Fatima <a href="http://www.institutfatima.org" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">institutfatima.org</a></p>
                <p>Antic Teatre Barcelona <a href="http://www.anticteatre.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">anticteatre.com</a></p>
                <p>Tanec Theater Prag <a href="http://www.divadloponec.cz" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">divadloponec.cz</a></p>
                <p>Mercat de les Flors Barcelona <a href="http://www.mercatflors.cat" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">mercatflors.cat</a></p>
                <p>Ballahus Ost Berlin <a href="http://www.ballhausost.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">ballhausost.de</a></p>
                <p>Schwankhalle Bremen <a href="http://www.schwankhalle.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">schwankhalle.de</a></p>
                <p>Athen Cooperation Booze <a href="http://www.boozecooperativa.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">boozecooperativa.com</a></p>
                <p>No Ballett Ludwigshafen</p>
                <p>Dansa mes a prob Barcelona</p>
                <p>Nerja Danza Spain</p>
                <p>University for dance Malaga</p>
                <p>University for Film and Theater Erlangen</p>
                <p>Institut del teatre Barcelona <a href="https://www.institutdelteatre.cat" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">institutdelteatre.cat</a></p>
                <p>Marameo Berlin <a href="https://www.marameo.de/de/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">marameo.de</a></p>
                <p>Antic Teatre Barcelona <a href="https://www.anticteatre.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">anticteatre.com</a></p>
                <p>Tnaz Bremen <a href="https://www.tanz-bremen.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">tanz-bremen.com</a></p>
                <p>Roger Bernat <a href="https://rogerbernat.info/en/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">rogerbernat.info</a></p>
                <p>Musarara Festival Jerusalem <a href="https://www.musraramixfest.org.il" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">musraramixfest.org.il</a></p>
                <p>IKSK Berlin <a href="https://www.iksk-berlin.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">iksk-berlin.de</a></p>
                <p>Felix Ruckert <a href="http://felixruckert.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">felixruckert.de</a></p>
                <p>Schwelle Wien <a href="https://schwelle.at" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">schwelle.at</a></p>
              </div>
            </div>

            <div className="website-small mt-8 text-white/70">
              <p>Despite of careful revision, I'm not resposible for the contents of external linked pages. Resposible for the contents of linked pages are exclusilvely the authors of those pages.</p>
              <p className="mt-2">See also my <Link href="/contact" className="text-green-400 hover:text-green-300 underline font-semibold">imprint</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}