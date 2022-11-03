import { Scenery } from './Scenery';

export class Robot {
  private scenaries: Map<string, Scenery> = new Map<string, Scenery>();
  constructor(
    private name: string,
    private key: string = Math.random().toString()
  ) {}
  public changeName(name: string): void {
    this.name = name;
  }
  public getKey(): string {
    return this.key;
  }
  public getUniqueName(): string {
    return this.name;
  }
  public assigScenary(scenary: Scenery) {
    this.scenaries.set(scenary.getFullName(), scenary);
  }
  public getScenariesName(): string | null {
    let names: string = '';
    for (let [key, scenary] of this.scenaries) {
      names += scenary.getFullName() + ',';
    }
    return names == '' ? null : names;
  }
  public removeSceneries(): void {
    this.scenaries = new Map<string, Scenery>();
  }
  public removeScenary(scenary: Scenery): void {
    this.scenaries.delete(scenary.getFullName());
  }
  public getRobotsNameByMyScenaries(): string {
    let names: string = '';
    for (let [key, scenary] of this.scenaries) {
      names += `(${scenary.getFullName()})=>[${scenary.getRobotsName()}]`;
    }
    return names == '' ? null : names;
  }
}
