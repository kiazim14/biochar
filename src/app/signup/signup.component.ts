import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RequestSignup } from '../models/request-signup';
import { catchError } from 'rxjs/operators';

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


	constructor(private authService: AuthService) { }
  lastname: string = '';
  firstname: string = '';
  email: string = '';
	username: string = '';
	password: string = '';

	user_roles: any = [
		{name:'User', value:'ROLE_USER', selected: false},
		{name:'Admin', value:'ROLE_ADMIN', selected: false},
		//{name:'Anonymous', value:'ROLE_ANONYMOUS', selected: false},
	]

	selectedRoles: string[] = [];

	error: string = '';
	success: string = '';

	ngOnInit(): void {
	}

	onChangeCategory(event: any, role: any) {
		this.selectedRoles.push(role.value);
	}

	doSignup() {
		if(
		this.lastname !== '' &&
    this.lastname !== null &&
    this.firstname !== '' &&
    this.firstname !== null &&
    this.email !== '' &&
    this.email !== null &&
		this.username !== '' &&
		this.username !== null &&
		this.password !== '' &&
		this.password !== null &&
		this.selectedRoles.length > 0) {
		const request: RequestSignup = {  lastName: this.lastname,
                                firstName: this.firstname,
                                email: this.email,
                                userName: this.username,
                                userPwd: this.password,
                                roles: this.selectedRoles};

			this.authService.signup(request).subscribe((result)=> {
				//console.log(result);
				//this.success = 'Signup successful';
				this.success = result;
			}, (err) => {
				//console.log(err);
				this.error = 'Something went wrong during signup';
			});
		} else {
			this.error = 'All fields are mandatory';
		}
	}

}