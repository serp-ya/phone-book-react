class UsersStorageEngine {
  constructor() {
    this.dbPlaceName = 'usersList';
  }

  get storage() {
    const { dbPlaceName } = this;
    return localStorage[dbPlaceName];
  }

  get allUsers() {
    return this.storage;
  }

}

const usersStorageEngine = new UsersStorageEngine();

export default usersStorageEngine;