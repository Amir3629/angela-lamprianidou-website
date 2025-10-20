import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";

export default function CollaborationsPage() {
  const collaborationsMedia = [];

  const description = `Dancers: 
Maria Ferrara, Andreas Rama, Irineu Marcovecchio, Ming Poon, Maria Focaraccio, Rachell Bo Clarck, Paqiro Lopéz, Eli Ruiz Fernandez, Chriztina Gazi, Selina Thüring, Antonia Cruz, Mireia de Querol Duran, Gerard Cabaroccas, Rocco Vermijs, Julia Maria Koch, Jana Vrana, Eli Pulkinnen, Susanna Vilella, Boris Lisowski

Collaborations:
Sarah Grether, Karolyn Strys, Tomeu Verges, Santiago Sempere, Achim Wieland, Montserat Colome, Roger Bernat, Carol Brown, Alexandra Rauh, Moreno Bernardi, Phoebe Killdeer, Mirjam Dumont, Yiannis Kolios, Christos Karageorgoudis, Marie Séférian, Institut Fatima, Antic Teatre Barcelona, Tanec Theater Prag, Mercat de les Flors Barcelona, Ballahus Ost Berlin, Schwankhalle Bremen, Marameo Berlin, Felix Ruckert, Schwelle Wien, Musarara Festival, IKSK Berlin`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={collaborationsMedia}
        title="Collaborations"
        description={description}
        additionalInfo=""
      />
    </div>
  );
}