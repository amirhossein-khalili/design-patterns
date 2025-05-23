interface Clonable<T> {
  clone(): T;
}

class UserCard implements Clonable<UserCard> {
  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  private _role: string;
  public get role(): string {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }
  private _permissions: string[];
  public get permissions(): string[] {
    return this._permissions;
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  private _theme: string;
  public get theme(): string {
    return this._theme;
  }
  public set theme(value: string) {
    this._theme = value;
  }

  constructor(username: string, role: string, permissions: string[], theme: string) {
    this.username = username;
    this.role = role;
    this.permissions = [...permissions];
    this.theme = theme;
  }

  clone(): UserCard {
    return new UserCard(this.username, this.role, this.permissions, this.theme);
  }

  print(): void {
    console.log(`
        username:${this.username}
        role:${this.role}
        permissions:${this.permissions}
        theme:${this.theme}
    `);
  }
}

const baseUserCard = new UserCard("username", "client", ["auth", "home"], "dark");

const amirCard = baseUserCard.clone();
amirCard.username = "amir";
amirCard.theme = "light";

amirCard.permissions.push("dashboard");

console.log(baseUserCard);
console.log(amirCard);
