import 'core-js';
import 'regenerator-runtime';
import Spaceship from './spaceship.js';
import SpaceshipEngine from './spaceship_engine.js';

const Sophia = new Spaceship('Sophia', 10, 5);
const Amsterda = new Spaceship('Amsterdã', 14, 10);
const dwarfStar = new Spaceship('Estrela anã', 20, 4);

const SophiaEngine = new SpaceshipEngine(Sophia)
const AmsterdaEngine = new SpaceshipEngine(Amsterda)
const dwarfStarEngine = new SpaceshipEngine(dwarfStar)

SophiaEngine.turnOn()
AmsterdaEngine.turnOn()
dwarfStarEngine.turnOn()