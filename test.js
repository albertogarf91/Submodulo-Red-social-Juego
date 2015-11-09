'use strict';

var modulo = require('./ServidorJuego.js');
var assert = require("assert");

/*
//Probar que con Jupiter se optiene la respuesta correcta
assert.equal(modulo.calcular("Jupiter"),"Respuesta correcta");

//Probar que con Marte no de como resultado nulo
assert.notEqual(modulo.calcular("Marte"), null);

//Probar que con Tierra no de como resultado nulo
assert.notEqual(modulo.calcular("Tierra"), null);

//Probar que con Saturno no de como resultado nulo
assert.notEqual(modulo.calcular("Saturno"), null);


console.log("Aserciones pasadas con exito");
*/


describe('Tests', function() {
  it('Probar que con Jupiter se optiene la respuesta correcta', function(done) {
    assert.equal(modulo.calcular("Jupiter"),"Respuesta correcta");
    done();
  });

  it('Probar que con Marte no de como resultado nulo', function(done) {
    assert.notEqual(modulo.calcular("Marte"), null);
    done();
  });

  it('Probar que con Tierra no de como resultado nulo', function(done) {
    assert.notEqual(modulo.calcular("Tierra"), null);
    done();
  });

  it('Probar que con Saturno no de como resultado nulo', function(done) {
    assert.notEqual(modulo.calcular("Saturno"), null);
    done();
  });
});



