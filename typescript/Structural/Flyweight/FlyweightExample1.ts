class Avatar {
  constructor(public icon: string) {}

  draw(name: string, x: number, y: number) {
    console.log(`Draw ${name} at (${x}, ${y}) with avatar ${this.icon}`);
  }
}

class AvatarFactory {
  private static icons: Record<string, Avatar> = {};

  static getAvatar(icon: string): Avatar {
    if (!this.icons[icon]) {
      this.icons[icon] = new Avatar(icon);
    }
    return this.icons[icon];
  }
}

class User {
  constructor(public name: string, public x: number, public y: number, public avatar: Avatar) {}

  render() {
    this.avatar.draw(this.name, this.x, this.y);
  }
}

const user1 = new User("Amir", 10, 20, AvatarFactory.getAvatar("👨‍💻"));
const user2 = new User("Sara", 30, 40, AvatarFactory.getAvatar("👨‍💻"));
const user3 = new User("Hossein", 50, 60, AvatarFactory.getAvatar("👩‍🎓"));

user1.render();
user2.render();
user3.render();
