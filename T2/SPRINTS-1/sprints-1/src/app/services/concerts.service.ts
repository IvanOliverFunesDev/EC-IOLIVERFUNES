import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {
  private conciertos = [
    {
      title: "Meteora",
      image: "https://tse4.mm.bing.net/th?id=OIP.CkVSativ_3X5C9zcWbSY8QHaF7&w=379&h=379&c=7",
      author: "Linkin Park",
      date: "2003-03-25",
      description: "El segundo álbum de estudio de Linkin Park, conocido por sus éxitos como 'Numb' y 'Somewhere I Belong'."
    },
    {
      title: "Hybrid Theory",
      image: "https://tse2.mm.bing.net/th?id=OIP.Tz5RnqiG3P7gX_CweLsTlAHaHa&w=474&h=474&c=7",
      author: "Linkin Park",
      date: "2000-10-24",
      description: "Álbum debut de Linkin Park que los catapultó a la fama con canciones como 'In the End' y 'Crawling'."
    },
    {
      title: "System of a Down",
      image: "https://www.thexboxhub.com/wp-content/uploads/2014/01/system-of-a-down-header.jpg",
      author: "System of a Down",
      date: "1998-06-30",
      description: "El álbum debut homónimo de System of a Down que mezcla metal alternativo y temas políticos."
    },
    {
      title: "Metallica - Master of Puppets",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg",
      author: "Metallica",
      date: "1986-03-03",
      description: "Uno de los álbumes más influyentes del thrash metal, incluye el clásico 'Master of Puppets'."
    },
    {
      title: "Iron Maiden - The Number of the Beast",
      image: "https://tse3.mm.bing.net/th?id=OIP.g5wcsd5dYlIxDCzS2JESGAHaHa&w=474&h=474&c=7",
      author: "Iron Maiden",
      date: "1982-03-22",
      description: "Un clásico del heavy metal que marcó el debut de Bruce Dickinson como vocalista de Iron Maiden."
    },
    {
      title: "Slipknot - Iowa",
      image: "https://tse1.mm.bing.net/th?id=OIP.pyhJDIrey_oyAjtRU8Z0DgHaHa&w=474&h=474&c=7",
      author: "Slipknot",
      date: "2001-08-28",
      description: "El segundo álbum de Slipknot, conocido por su intensidad y su enfoque más oscuro y pesado."
    },
    {
      title: "Pantera - Vulgar Display of Power",
      image: "https://tse2.mm.bing.net/th?id=OIP.29PNXE0gJtV5ScLjGZSW5wHaE8&w=316&h=316&c=7",
      author: "Pantera",
      date: "1992-02-25",
      description: "Un álbum icónico del groove metal con temas como 'Walk' y 'Mouth for War'."
    },
    {
      title: "Avenged Sevenfold - City of Evil",
      image: "https://tse2.mm.bing.net/th?id=OIP.vZ1Z98CdF7tmh2Qc04ET-AHaHb&w=474&h=474&c=7",
      author: "Avenged Sevenfold",
      date: "2005-06-07",
      description: "El tercer álbum de Avenged Sevenfold, marcó un cambio hacia un sonido más melódico."
    },
    {
      title: "Megadeth - Rust in Peace",
      image: "https://tse1.mm.bing.net/th?id=OIP.HUiQSaxvpQMOWDMKhbL7rwHaHX&w=471&h=471&c=7",
      author: "Megadeth",
      date: "1990-09-24",
      description: "Considerado uno de los mejores álbumes de thrash metal, incluye temas como 'Holy Wars... The Punishment Due'."
    },
    {
      title: "Judas Priest - Painkiller",
      image: "https://tse1.mm.bing.net/th?id=OIP.1jljSJEkp6xYJDWO3edFRwHaHa&w=474&h=474&c=7",
      author: "Judas Priest",
      date: "1990-09-03",
      description: "Un álbum icónico del heavy metal, conocido por la canción que da título al disco, 'Painkiller'."
    },
    {
      title: "Lamb of God - Ashes of the Wake",
      image: "https://tse1.mm.bing.net/th?id=OIP.L_upcw6_xbyJQJCYu2bTCgHaHa&w=474&h=474&c=7",
      author: "Lamb of God",
      date: "2004-08-31",
      description: "Un álbum fundamental del metal moderno, incluye temas como 'Laid to Rest' y 'Now You've Got Something to Die For'."
    },
    {
      title: "Korn - Follow the Leader",
      image: "https://tse3.mm.bing.net/th?id=OIP.lMvSA5Pke0JfA9_VhGkYCgHaHa&w=474&h=474&c=7",
      author: "Korn",
      date: "1998-08-18",
      description: "Un álbum clave del nu metal, con éxitos como 'Freak on a Leash' y 'Got the Life'."
    },
    {
      title: "Rammstein - Mutter",
      image: "https://tse1.mm.bing.net/th?id=OIP.N0spQ8U9TSLSPeaFE5AJ7QHaEK&w=266&h=266&c=7",
      author: "Rammstein",
      date: "2001-04-02",
      description: "Un álbum destacado de Rammstein, con canciones como 'Sonne' y 'Ich Will'."
    }
  ];

  constructor() { }

  getConcertsAll() {
    return [...this.conciertos];
  }

  getConcertsFeatured(count: number) {
    const shuffled = [...this.conciertos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  getConcertsRecent(count: number) {
    const shuffled = [...this.conciertos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }
}
