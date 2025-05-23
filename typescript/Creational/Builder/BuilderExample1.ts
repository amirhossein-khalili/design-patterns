class UserProfile {
  name?: string;
  age?: number;
  email?: string;
  phone?: string;
  bio?: string;

  logInfo(): void {
    console.log(
      `User Profile:
  - Name  : ${this.name}
  - Age   : ${this.age}
  - Email : ${this.email}
  - Phone : ${this.phone}
  - Bio   : ${this.bio}`
    );
  }
}

interface Profile {
  setName(name: string): this;
  setAge(age: number): this;
  setEmail(email: string): this;
  setPhone(phone: string): this;
  setBio(bio: string): this;
  build(): UserProfile;
}

class UserProfileBuilder implements Profile {
  private profile: UserProfile;

  constructor() {
    this.profile = new UserProfile();
  }

  setName(name: string): this {
    this.profile.name = name;
    return this;
  }
  setAge(age: number): this {
    this.profile.age = age;
    return this;
  }
  setEmail(email: string): this {
    this.profile.email = email;
    return this;
  }
  setPhone(phone: string): this {
    this.profile.phone = phone;
    return this;
  }
  setBio(bio: string): this {
    this.profile.bio = bio;
    return this;
  }
  build(): UserProfile {
    return this.profile;
  }
}

const profileBuilder = new UserProfileBuilder();
const amirProf = profileBuilder
  .setName("amir")
  .setBio("he is simple developer")
  .setEmail("amir1378khalili@gmail.com")
  .setPhone("+989999")
  .setAge(25)
  .build();

amirProf.logInfo();
