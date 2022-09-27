import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { json } from "express";

import { HttpAppService } from "src/app/services/http.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public loginModel: FormGroup;
  constructor(
    private fb: FormBuilder,
    public httpAppService: HttpAppService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loginModel = this.fb.group({
      identifier: [
        "",
        [
          Validators.maxLength(60),
          // tslint:disable-next-line: max-line-length
          Validators.pattern(
            "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-\\_]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$"
          ),
        ],
      ],
      password: ["", [Validators.required]],
    });
  }

  get form() {
    return this.loginModel.controls;
  }

  onSubmit(form: FormGroup) {
    console.log("Valid?", form.valid); // true or false
    console.log(form.value);
    this.httpAppService.loginUser(form.value).subscribe((res) => {
      console.log(res);
      sessionStorage.setItem("isUserLogin", JSON.stringify(res));
      this.router.navigate(["comments"]);
    });
  }
}
