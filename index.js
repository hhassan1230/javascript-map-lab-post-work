const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

let SortedrobotsList = [];

const rolloutAlliance = (autobot) => {
  let alliance = 'autobot';
  let isDecepticon = false;
  for (let i = 0; i < knownDecepticons.length; i++) {
    const name = knownDecepticons[i];
    if (name === autobot) {
      isDecepticon = true;
    }
  }
  if (isDecepticon) {
    alliance = 'decepticon';
  }
  return alliance;
}

const sortRobots = () => { 
  for (let i = 0; i < robots.length; i++) {
    SortedrobotsList.push(robots[i]);
    SortedrobotsList[i].alliance = rolloutAlliance(SortedrobotsList[i].name);
  }
}

// const sortedRobots = robots.map((robot) => {
//   // robot.alliance = rolloutAlliance(robot.name);
//   return { name: robot.name, alliance: rolloutAlliance(robot.name) }
// });

const sortedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    alliance: rolloutAlliance(robot.name)
  });
})

// sortRobots();


const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

const coloredZebraStripes = zebraStripes.map((stripe, index) => {
  const isEven = (index % 2) === 0;
  return Object.assign({}, stripe, {
    color: isEven ? 'black' : 'white'
  });
})
console.log(coloredZebraStripes);
console.log(sortedRobots);