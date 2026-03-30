import { Injectable, signal } from '@angular/core'; 
import { User } from '../ui/interfaces/user';

@Injectable({providedIn: 'root'})
export class UserStorage{
    private _user = signal<User | null>(null)
    user = this._user.asReadonly()

    setUser(user: User){
        this._user.set(user)
    }

    clear(){
        this._user.set(null)
    }

}
