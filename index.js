// Animal sounds
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

const { moo, neigh, baa, oink, cluck } = animalSounds;

// Animal names
const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

const { bessie, dolly, babe, little } = animalNames;

// Animal colors
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

const { blackAndWhite, black, pink } = animalColors;

// Rainbow colors array
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const [red, orange, yellow, green, blue, indigo, violet] = rainbow;

// Destructure initials
const [r, o, y, g, b, , v] = rainbow; // skipping indigo here

// Separate variable for indigo
const [, , , , , indg] = rainbow;

// Muppet object
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { muppetName, color, song, job, partner } = muppet;

// Nested muppet object
const muppetSongs = {
  song1: "Rainbow Connection",
  song2: "Moving Right Along",
  song3: "Bein' Green",
  song4: "I Hope That Something Better Comes Along"
};

const { song2, song4 } = muppetSongs;

const kermit = {
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};

const { job: nestedJob, partner: nestedPartner } = kermit;

module.exports = {
  moo, neigh, baa, oink, cluck,
  bessie, dolly, babe, little,
  blackAndWhite, black, pink,
  red, orange, yellow, green, blue, indigo, violet,
  r, o, y, g, b, v, indg,
  muppetName, color, song, job, partner,
  song2, song4, nestedJob, nestedPartner
};