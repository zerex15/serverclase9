//importo las variables de entorno
//require('dotenv').config() //forma vieja
import 'dotenv/config' //forma nueva

//importo la clase servidor
import { Servidor }from'./Server/Servidor.js'

//crear un objeto de la clase servidor
let servidor = new Servidor()
    //despertar al servidor

    servidor.despertarServidor()


