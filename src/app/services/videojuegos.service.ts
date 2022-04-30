@Injectable()
export class VideojuegosService {
  private videojuegos: Videojuego[]=[
    {
      nombre: 'Fornite',
      descripcion: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games,' +
        ' lanzado como diferentes paquetes de software que presentan diferentes modos de juego,' +
        ' pero que comparten el mismo motor de juego y mecánicas.' +
        ' Fue anunciado en los Spike Video Game Awards en 2011.',
      img: 'assets/img/ps4/fortnite1.jpg',
      lanzamiento: '2017',
      consola: 'PS4',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'Fifa 22',
      descripcion: 'FIFA 22 es un videojuego de futbol desarrollado por EA Vancouver y EA Romania, ' +
        'siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, ' +
        'Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch.' +
        ' Es la vigésimo novena entrega en la serie FIFA y fue lanzado el 1 de octubre de manera global.',
      img: 'assets/img/xbox/fifa22.jpg',
      lanzamiento: '2021',
      consola: 'Xbox',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'Red Dead Redemption 2',
      descripcion: 'Red Dead Redemption 2 es la secuela del aclamado Red Dead Redemption de 2010' +
        ' y tercera parte de la saga Red Dead, que se inició en 2004 con Red Dead Revolver.' +
        ' De nuevo nos lleva al salvaje oeste para proponernos convertirnos en un pistolero' +
        ' forajido en un gran escenario de juego.',
      img: 'assets/img/xbox/rdr2.jpg',
      lanzamiento: '2018',
      consola: 'Xbox',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'Persona 5 Royal',
      descripcion: 'Royal es la versión extendida y mejorada del exitoso videojuego del rol japonés producido por ATLUS para consolas. La quinta entrega tiene ahora una nueva edición que, si bien nos sigue contando una épica historia en la que un grupo de estudiantes adolescentes tendrán que enfrentarse a una amenaza sobrenatural gracias a sus Persona, unos alter ego especiales, añadirá nuevas zonas, personajes y características jugables.',
      img: 'assets/img/ps4/persona5royal.jpg',
      lanzamiento: '2019',
      consola: 'PS4',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'The Last of Us Remasterizado',
      descripcion: 'The Last of Us Remastered para PS4 es una adaptación a la consola de Sony de uno de los mejores juegos de PS3. Esta versión remasterizada contará con mejoras gráficas respecto al original y con todo el contenido descargable extra lanzado, como la campaña Left Behind.',
      img: 'assets/img/ps4/tlou.jpg',
      lanzamiento: '2014',
      consola: 'PS4',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'Grand Theft Auto V',
      descripcion: 'Grand Theft Auto V para PS4 es una versión mejorada y ampliada del GTA V original aparecido en PS3 en 2013. Contará con nuevos gráficos y nuevo contenido como armas, vehículos o misiones, además de una banda sonora ampliada y más jugadores en el modo online. Nos cuenta la épica historia de Michael, Franklin y Trevor en la ciudad de Los Santos y sus alrededores.',
      img: 'assets/img/ps4/gtav.jpg',
      lanzamiento: '2014',
      consola: 'PS4',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'Forza Horizon 4',
      descripcion: 'Forza Horizon 4 es la cuarta parte de la saga de conducción en mundo abierto de Microsoft y PlayGround Games. Trasladándonos a un enorme mapeado que recrea Reino Unido casi en su totalidad, la nueva entrega apuesta por incluir más coches, más eventos y competiciones, mejorar los gráficos y ofrecer un sistema de estaciones en tiempo real que nos ofrece la posibilidad de pilotar en verano, otoño, invierno y primavera. Está disponible en Xbox One y PC.',
      img: 'assets/img/xbox/forza4.jpg',
      lanzamiento: '2014',
      consola: 'Xbox',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'God of War',
      descripcion: 'God of War es la vuelta de Kratos a los videojuegos tras la trilogía original. Esta nueva entrega para PlayStation 4, si bien mantendrá varios de los ingredientes indivisibles de su jugabilidad, apostará por un nuevo comienzo para el personaje y una ambientación nórdica, ofreciéndonos una perspectiva más madura y realista de la mitología de dioses y monstruos milenarios habitual en la serie de títulos. En God of War, Kratos será un guerrero más curtido y pasivo, pues tendrá que desempeñar el rol de padre en un frío y hostil escenario, al que parece haberse retirado para olvidar su pasado.',
      img: 'assets/img/ps4/gow.jpg',
      lanzamiento: '2018',
      consola: 'PS4',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'Sekiro: Shadows Die Twice',
      descripcion: 'Sekiro: Shadows Die Twice es un juego de acción y rol con ambientación asiático-ninja y con los toques habituales del estudio hacedor de sagas como Bloodborne y Dark Souls. Dirigido por Hidetaka Miyazaki, creador de la saga Souls, nos invitará a rescatar a nuestro secuestrado maestro a través del uso de las más variadas armas asiáticas. Ambientado a finales de 1500, en la época Sengoku, el protagonista usará herramientas prostéticas, y habilidades ninja de sigilo y escalada. La exploración será mucho mayor que en pasados juegos del estudio, ofreciendo más contexto y posibilidades de juego.',
      img: 'assets/img/xbox/sekiro.jpg',
      lanzamiento: '2019',
      consola: 'Xbox',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    },{
      nombre: 'Uncharted 4: El Desenlace del Ladrón',
      descripcion: 'Uncharted 4: El Desenlace del Ladrón es la llegada de Nathan Drake a la nueva generación de videojuegos, en una cuarta parte de la serie desarrollada por Naughty Dog que nos llevará de nuevo a vivir aventuras en los lugares más recónditos del mundo.',
      img: 'assets/img/ps4/un4.jpg',
      lanzamiento: '2016',
      consola: 'PS4',
      like: 0,
      dislike: 0,
      porLike: 0,
      porDislike: 0
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse');
  }
  getVideoJuegos(): Videojuego[]{
    return this.videojuegos;
  }
  getVideojuego(idx:number){
    return this.videojuegos[idx]
  }
  getLikes(){
    var likesAux=[];
    for (var i=0;i<this.videojuegos.length;i++){
       var likes = localStorage.getItem(i.toString());
       if (likes != null){
          likesAux.push(parseInt(likes))
      }else{
         likesAux.push(0)
       }
    }

    return likesAux;
  }
  getDislikes(){
    var dislikesAux=[];


    for (var i=0;i<this.videojuegos.length;i++){
      var dislikes = localStorage.getItem(i.toString()+"a");
      if (dislikes != null){
        dislikesAux.push(parseInt(dislikes))
      }else{
        dislikesAux.push(0)
      }
    }

    return dislikesAux;
  }

  buscarVideoJuegos(termino: string):Videojuego[]{
    let videojuegosArr: Videojuego[] = [];
    termino = termino.toLowerCase();
    for (let videojuego of this.videojuegos){
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0){
        videojuegosArr.push(videojuego);
      }
    }
    return videojuegosArr;
  }


  sumarLikes(idx:number){
    if (localStorage.getItem(idx.toString())  ){
      let suma=localStorage.getItem(idx.toString())


      localStorage.setItem(idx.toString(),(1 + parseInt(String(suma))).toString());
    }else{

      localStorage.setItem(idx.toString(),(this.videojuegos[idx].like+1).toString());
    }
  }
  sumarDislikes(idx:number){
    if (localStorage.getItem(idx.toString()+"a")  ){
      let suma=localStorage.getItem(idx.toString()+"a")


      localStorage.setItem(idx.toString()+"a",(1 + parseInt(String(suma))).toString());
    }else{

      localStorage.setItem(idx.toString()+"a",(this.videojuegos[idx].dislike+1).toString());
    }
  }

  getSumaLikes(){
    let contador: number = 0;
    for (let i = 0; i<this.videojuegos.length;i++){
      var x=localStorage.getItem(i.toString());
      if(x != null){
        contador+=parseInt(x);

      }else{

      }
    }

    return contador;
  }

  getSumaDislikes(){
    let contador: number = 0;
    for (let i = 0; i<this.videojuegos.length;i++){
      var x=localStorage.getItem(i.toString()+"a");
      if(x != null){
        contador+=parseInt(x);

      }else{

      }
    }

    return contador;
  }



}
import {Injectable} from "@angular/core";
export interface Videojuego{
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
  like: number;
  dislike: number;
  porLike: number;
  porDislike: number;
}
