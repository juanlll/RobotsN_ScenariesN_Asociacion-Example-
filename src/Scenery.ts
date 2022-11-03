import { Robot } from './Robot';

export class Scenery {
  private robots: Map<String, Robot> = new Map<String, Robot>();
  constructor(private fullName: string) {}
  addRobot(robot: Robot) {
    robot.assigEscenario(this);
    this.robots.set(robot.getKey(), robot);
  }
  getFullName(): string {
    return this.fullName;
  }
  getRobotByKey(key: string): Robot {
    return this.robots.get(key);
  }
  expulseAllRobots() {
    for (let [robotKey, robot] of this.robots) {
      robot.removeEscenario(this);
    }
  }
  public getRobotsName(): string | null {
    let names: string = '';
    for (let [esceKey, esce] of this.robots) {
      names += esce.getUniqueName() + ',';
    }
    return names == '' ? null : names;
  }
}
