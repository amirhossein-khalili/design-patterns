//targer
interface UserService<T> {
  fetchUsers(): T[];
}

//Adaptee
class OldUserService {
  getUsers(): string[] {
    return ["amir", "sara", "hossein"];
  }
}

//adapter
class AdapterUserService implements UserService<string> {
  private _oldService: OldUserService;

  constructor(oldService: OldUserService) {
    this._oldService = oldService;
  }

  fetchUsers(): string[] {
    return this._oldService.getUsers();
  }
}

const oldService = new OldUserService();
const adapterService = new AdapterUserService(oldService);

const users = adapterService.fetchUsers();
console.log(users);
