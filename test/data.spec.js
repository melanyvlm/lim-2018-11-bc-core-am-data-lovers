require('../src/data.js');

const input = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/095.png', name: 'Onix', type: ['Rock', 'Ground'], weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'], egg: '10 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/046.png', name: 'Paras', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/048.png', name: 'Venonat', type: ['Bug Poison'], weaknesses: ['Fire', 'Flying', 'Psychic', 'Rock'], egg: '5 km'},
];
const input2 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/095.png', name: 'Onix', type: ['Rock', 'Ground'], weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'], egg: '10 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
];

const output1 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'}    
];

const output2 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/046.png', name: 'Paras', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/048.png', name: 'Venonat', type: ['Bug Poison'], weaknesses: ['Fire', 'Flying', 'Psychic', 'Rock'], egg: '5 km'},
];

const output3 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/095.png', name: 'Onix', type: ['Rock', 'Ground'], weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'], egg: '10 km'},

];
const output4 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/095.png', name: 'Onix', type: ['Rock', 'Ground'], weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'], egg: '10 km'},
];

const output5 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/095.png', name: 'Onix', type: ['Rock', 'Ground'], weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'], egg: '10 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},
];

const output6 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/046.png', name: 'Paras', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], egg: '5 km'},
];

const output7 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/046.png', name: 'Paras', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], egg: '5 km'},
];


describe('pokemonData', () => {
  describe('pokemonFunciones', () => {
    it('pokemonFunciones debería ser una objecto', () => {
      expect(typeof pokemonFunciones).toBe('object');
    });    
    it('pokemonFunciones.filtrar debería ser una funcion', () => {
      expect(typeof pokemonFunciones.filtrar).toBe('function');
    });
    it('pokemonFunciones.ordenarPoke debería ser una funcion', () => {
      expect(typeof pokemonFunciones.ordenarPoke).toBe('function');
    });    
    it('pokemonFunciones.filterType debería ser una funcion', () => {
      expect(typeof pokemonFunciones.filterType).toBe('function');
    });
    it('pokemonFunciones.filterWeaknesses debería ser una funcion', () => {
      expect(typeof pokemonFunciones.filterWeaknesses).toBe('function');
    });
  });

  describe('pokemonFunciones.filtrar', () => {
    it('entrada = 2, deberia retornar ', () => {
      expect(pokemonFunciones.filtrar(input, 2)).toEqual(output1);
    });
    it('entrada = 5, deberia retornar ', () => {
      expect(pokemonFunciones.filtrar(input, 5)).toEqual(output2);
    });     
    it('entrada = 10, deberia retornar ', () => {
      expect(pokemonFunciones.filtrar(input, 10)).toEqual(output3);
    });
  });

  describe('pokemonFunciones.ordenarPoke', () => {
    it('debería retornar orden de A-Z', () => {
      expect(pokemonFunciones.ordenarPoke(input2, 1)).toEqual(output4);
    });
    it('debería retornar orden de Z-A', () => {
      expect(pokemonFunciones.ordenarPoke(input2, 2)).toEqual(output5);
    });
  });

  describe('pokemonFunciones.filterType', () => {
    it('debería retornar los tipos de Pokemon', () => {
      expect(pokemonFunciones.filterType(input, 'Grass')).toEqual(output6);
    });
  });

  describe('pokemonFunciones.filterWeaknesses', () => {
    it('debería retornar las debilidades de los Pokemon', () => {
      expect(pokemonFunciones.filterWeaknesses(input, 'Bug')).toEqual(output7);
    });
  });

  describe('pokemonFunciones.numPorTipo', () => {
    it('debería retornar la cantidad de Pokemon por tipo', () => {
      expect(pokemonFunciones.numPorTipo(input, 'Grass')).toEqual(2);
    });
  });
});
