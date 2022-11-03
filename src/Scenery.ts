import { Robot } from './Robot';

export class Scenery {
  private robots: Map<String, Robot> = new Map<String, Robot>();
  constructor(private fullName: string) {}
  addRobot(robot: Robot) {
    robot.assigScenary(this);
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
      robot.removeScenary(this);
    }
  }
  public getRobotsName(): string | null {
    let names: string = '';
    for (let [key, robot] of this.robots) {
      names += robot.getUniqueName() + ',';
    }
    return names == '' ? null : names;
  }
}
