import {Component, OnInit} from '@angular/core';
import {Settings} from '../../app.settings.model';
import {User} from './User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AppSettings} from '../../app.settings';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {JwtService} from '../../service/jwt.service';
import {LoggingService} from '../../service/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  settings: Settings;
  user: User;
  issuccess: boolean;
  public loginform: FormGroup;
  private subscription: Subscription;
  bottonText = 'Login';

  constructor(public appSettings: AppSettings,
              private service: LoginService,
              private router: Router,
              private fb: FormBuilder,
              private jwtservice: JwtService,
              private logger: LoggingService) {
    this.settings = appSettings.settings;
    this.loginform = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'domain': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
    });

  }


  ngOnInit() {
  }

  login() {
    // this.spinnerService.show();
    this.logger.setConsoleLog(this.loginform.value);
  }

}
