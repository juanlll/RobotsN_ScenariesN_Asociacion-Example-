import { Robot } from './Robot';

export class Scenery {
  private robots: Map<String, Robot> = new Map<String, Robot>();
  constructor(private fullName: string) {}
  public addRobot(robot: Robot) {
    robot.assigScenary(this);
    this.robots.set(robot.getKey(), robot);
  }
  public getFullName(): string {
    return this.fullName;
  }
  public getRobotByKey(key: string): Robot {
    return this.robots.get(key);
  }
  public expulseAllRobots() {
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
