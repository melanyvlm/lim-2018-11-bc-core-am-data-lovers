require('../src/data.js');

const input = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/095.png', name: 'Onix', type: ['Rock', 'Ground'], weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'], egg: '10 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/046.png', name: 'Paras', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/048.png', name: 'Venonat', type: ['Bug Poison'], weaknesses: ['Fire', 'Flying', 'Psychic', 'Rock'], egg: '5 km'},
    
];

const output2 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/095.png', name: 'Onix', type: ['Rock', 'Ground'], weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'], egg: '10 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/046.png', name: 'Paras', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/048.png', name: 'Venonat', type: ['Bug', 'Poison'], weaknesses: ['Fire', 'Flying', 'Psychic', 'Rock'], egg: '5 km'},
    
];
const output3 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/048.png', name: 'Venonat', type: ['Bug', 'Poison'], weaknesses: ['Fire', 'Flying', 'Psychic', 'Rock'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/046.png', name: 'Paras', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/095.png', name: 'Onix', type: ['Rock', 'Ground'], weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Ground', 'Steel'], egg: '10 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/096.png', name: 'Drowzee', type: ['Psychic'], weaknesses: ['Bug', 'Ghost', 'Dark'], egg: '5 km'},
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},
    
];
const output4 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/001.png', name: 'Bulbasour', type: [ 'Grass', 'Poison'], weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], egg: '2 km'},

];

const output5 = [
  {img: 'http://www.serebii.net/pokemongo/pokemon/046.png', name: 'Paras', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], egg: '5 km'},

];

describe('pokemonData', () => {
  it('debería ser un objeto', () => {
    expect(typeof pokemonData).toBe('object');
  });
  describe('pokemonData.sortData', () => {
    it('debería ser una funcion', () => {
      expect(typeof pokemonData.sortData).toBe('function');
    });
    it('debería retornar orden de A-Z', () => {
      expect(pokemonData.sortData(input, 'order', 'ascendente')).toEqual(output2);
    });
    it('debería retornar orden de inverso Z-A', () => {
      expect(pokemonData.sortData(input, 'order-reverse', 'descendente')).toEqual(output3);
    });
  });
  describe('pokemonData.filterType', () => {
    it('debería ser una funcion', () => {
      expect(typeof pokemonData.filterType).toBe('function');
    });
    it('debería retornar los tipos de Pokemon', () => {
      expect(pokemonData.filterType(input, 'type', 'Grass')).toEqual(output4);
    });
  });
  describe('pokemonData.filterWeak', () => {
    it('debería ser una funcion', () => {
      expect(typeof pokemonData.filterWeak).toBe('function');
    });
    it('debería retornar las debilidades por tipo de Pokemon', () => {
      expect(pokemonData.filterType(input, 'weak', 'Fire')).toEqual(output5);
    });
  });
});
