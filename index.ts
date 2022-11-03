import { Robot } from './src/Robot';
import { Scenery } from './src/Scenery';
/** Robots construidos */
const robotOne: Robot = new Robot('RobotOne');
const robotTwo: Robot = new Robot('RobotTwo');
const robotThree: Robot = new Robot('RobotThree');
const escenarioOne: Scenery = new Scenery('EscenarioOne');
const escenarioTwo: Scenery = new Scenery('EscenarioTwo');

/** Robots asignados al escenario "escenarioOne" */
escenarioOne.addRobot(robotOne);
escenarioOne.addRobot(robotTwo);
escenarioOne.addRobot(robotThree);

/** Robots asignados al escenario "escenarioTwo" */
escenarioTwo.addRobot(robotOne);
escenarioTwo.addRobot(robotThree);

/** Robots expulsados del escenario "escenarioTwo" */
escenarioTwo.expulseAllRobots();

/** Imprimiendo en consola la información del robotOne */
console.log(
  `Soy el robot ${robotOne.getUniqueName()}:`,
  `\n Y tengo estos escenarios asignados: \n (${escenarioOne
    .getRobotByKey(robotOne.getKey())
    .getScenariesName()}) \n
    Y Tambien quisiera decirles que estos son los robots que están en los escenarios en los que Estoy asignado:\n ${robotOne.getRobotsNameByMyScenaries()}`
);
