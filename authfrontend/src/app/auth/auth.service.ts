import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase' ;


@Injectable()
export class AuthService {

    constructor(private route: Router) {}

    token = '';
    singUp(email: string, password: string) {
        console.log(email + password );
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            response => console.log(response)
        )
        .catch(
            error => console.log(error)
        );
    }
    singIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            () => {
                this.route.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                );
            }
        )
        .catch(
            error => console.log(error)
        );
    }
    getToken() {
        firebase.auth().currentUser.getToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }
    isAuthenticated() {
        return this.token !== '' ;
    }
    logOut() {
        firebase.auth().signOut();
        this.token = '';
        this.route.navigate(['/singin']);
    }
}
