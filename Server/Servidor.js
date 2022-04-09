//importo el framework express
//const express = require('express') //version vieja
import express from 'express' //version nueva

export class Servidor {
    constructor(){
        this.app = express() //atributo app garda a express
        this.atenderPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log(`SERVIDOR ECENDIDO EN ${process.env.PORT}`)
        })
    }

    atenderPeticiones(){

        //servicios de mi api 
        this.app.get('/api/v1/sabado', function (req, res) {
            res.send('hola soy un GET')
          })

          this.app.get('/api/v1/sabado/:id', function (req, res) {
            res.send('hola soy un GET')
          })

          this.app.POST('/api/v1/sabado', function (req, res) {
            res.send('hola soy un POST')
          })

          this.app.PUT('/api/v1/sabado', function (req, res) {
            res.send('hola soy un PUT')
          })

          this.app.DELETE('/api/v1/sabado', function (req, res) {
            res.send('hola soy un DELETE')
          })
    }
}