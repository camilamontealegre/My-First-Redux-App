import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Franco Armani",
            foto: "https://d2yoo3qu6vrk5d.cloudfront.net/images/20190326163003/gettyimages-1132454543-900x485.jpg"
        },
        {
            id: 2,
            nombre: "Gianluigi Buffon",
            foto: "https://www.ecestaticos.com/imagestatic/clipping/c41/3e3/c413e3ae2eb8cb3e17895a7efcd45988/gigi-buffon-un-fumador-habitual-que-ha-renovado-con-la-juventus-hasta-los-43-anos.jpg"
        },
        {
            id: 3,
            nombre: "Edwin Cardona",
            foto: "https://i.pinimg.com/originals/49/f5/a0/49f5a0e51a0b96bec45e64a76ea18c3f.jpg"
        },
        {
            id: 4,
            nombre: "Juan G Cuadrado",
            foto: "https://as01.epimg.net/colombia/imagenes/2019/04/30/futbol/1556643995_049445_1556644192_noticia_normal.jpg"
        },
        {
            id: 5,
            nombre: "Santiago Arias",
            foto: "https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/06/10/15601698611887.jpg"
        },
        {
            id: 6,
            nombre: "Sebastián Pérez",
            foto: "https://gentepasionyfutbol.com.co/wp-content/uploads/2020/08/SEB.jpg"
        },
        {
            id: 7,
            nombre: "Lionel Messi",
            foto: "https://www.infobae.com/new-resizer/YWtT6KYnu2rzBjtagTxJTlkTosA=/420x236/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/EUK7IVT6BRGUDKIRRXJ7QZWXK4.jpg"
        },
        {
            id: 8,
            nombre: "Kylian Mbappé",
            foto: "https://static3.abc.es/media/deportes/2019/10/25/mbappe-criticas-kVSG--620x349@abc.jpg"
        },
        {
            id: 9,
            nombre: "Daniel Bocanegra",
            foto: "https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/01/13/15789268118906.jpg"
        },
        {
            id: 10,
            nombre: "Steffan Medina",
            foto: "https://fanonesport.com/wp-content/uploads/2020/08/stefan_medina.jpg"
        },
        {
            id: 11,
            nombre: "Davinson Sanchez",
            foto: "https://deportesimagenes.canalrcn.com/ImgDeportesNew/davinson_sanchez_central_colombiano_del_tottenham_spurs_afp.jpg"
        },
        {
            id: 12,
            nombre: "Alexis Henriquez",
            foto: "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/wp-content/uploads/2019/12/ALEXIS_HENRIQUEZ.jpg"
        },
        {
            id: 13,
            nombre: "Jonathan Copete",
            foto: "https://www.futbolred.com/files/article_main/uploads/2018/02/09/5a7d505d537a3.jpeg"
        }
    ],
    titulares: [],
    suplentes: []
}

//A continuación mi función reductora:
const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)