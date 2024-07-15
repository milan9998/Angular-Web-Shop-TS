import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string;
    date: Date;
    address: string;
}

@Injectable()
export class UserService {

    currentUser: User | null = UserService.dummyUserList[1];

    static dummyUserList: Array<User> = [
        {
            id: 0,
            email: "pronicmilan@gmail.com",
            password: "11111111",
            date: new Date("2024-04-18 14:23"),
            address:"test1"
        },
        {
            id: 1,
            email: "ivanadamovic@gmail.com",
            password: "22222222",
            date: new Date("2024-04-18 14:24"),
            address:"test1"
        }]


    logout() {
            this.currentUser = null;
    }

    isLoggedIn(): boolean {
        return this.currentUser !== null;
      }




    //korisnicko ime korisnika - getUsername
    getUserName(user: User): string {
        return user ? user.email: '';
    }

    //id korisnika - getUserById
    getUserById(id: number): User {
        var foundUser!: User;

        UserService.dummyUserList.forEach(user => {
            if (user.id == id) {
                foundUser = user;
            }
        });

        this.currentUser = foundUser;
        return foundUser;
    }

    //prikazujemo korisnika - getUser
    getUser(userEmail: string): User {
        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }

    //proveravamo da li je lozinka ispravna - isPasswordCorrect
    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.dummyUserList.find(userToFind =>
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    //registruj korisnika - registerUser
    registerUser(email: string, password: string, date: Date,address: string): User {

        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if (maxId < user.id) {
                maxId = user.id
            }
        });

        var id = ++maxId;
        var user: User = { id, email, password, date ,address};

        UserService.dummyUserList.push(user);

        this.currentUser = user;
        console.log(user);
        return user;
    }
    
}