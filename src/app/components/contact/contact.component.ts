import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpAppService } from "src/app/services/http.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  public contactModel: FormGroup;
  constructor(private fb: FormBuilder,
    public httpAppService: HttpAppService) {}

  ngOnInit(): void {
    this.contactModel = this.fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.maxLength(32),
          Validators.pattern("[a-zA-Z- ]*"),
        ],
      ],

      email: [
        '',
        [
          Validators.maxLength(60),
          // tslint:disable-next-line: max-line-length
          Validators.pattern(
            "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-\\_]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$"
          ),
        ],
      ],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required]],
      phoneNumber: [""],
    });
  }
  get form() { 
    return this.contactModel.controls; 
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log(form.value);
    const body = {"data":form.value}
    this.httpAppService.contactMe(body).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    })
  }

}
