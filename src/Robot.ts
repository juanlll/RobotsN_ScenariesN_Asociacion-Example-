import { Scenery } from './Scenery';

export class Robot {
  private escenarios: Map<string, Scenery> = new Map<string, Scenery>();
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
  public assigEscenario(escenario: Scenery) {
    this.escenarios.set(escenario.getFullName(), escenario);
  }
  public getEscenariosName(): string | null {
    let names: string = '';
    for (let [esceKey, esce] of this.escenarios) {
      names += esce.getFullName() + ',';
    }
    return names == '' ? null : names;
  }
  public removeEscenarios(): void {
    this.escenarios = new Map<string, Scenery>();
  }
  public removeEscenario(escenario: Scenery): void {
    this.escenarios.delete(escenario.getFullName());
  }
  public getRobotsNameByMyEscenearios(): string {
    let names: string = '';
    for (let [esceKey, esce] of this.escenarios) {
      names += `(${esce.getFullName()})=>[${esce.getRobotsName()}]`;
    }
    return names == '' ? null : names;
  }
}
