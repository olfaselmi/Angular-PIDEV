import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { imageService } from 'src/services/image.service';
import { User } from 'src/app/Model/User';
import { SessionService } from 'src/services/session.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userFile: any;
  public imagePath: any;
  imgURL: any;
  InputImage: string = "";
  userModificationForm: FormGroup
  @Input() user: User
  @Output() notification = new EventEmitter<boolean>();
  user2: any
  user3: User
  constructor(private fb: FormBuilder, private us: UserService, private session: SessionService, private imageService: imageService) { }

  ngOnInit(): void {
    this.userModificationForm = this.fb.group(
      {
        'FirstName': [this.user.FirstName, [Validators.required]],
        'LastName': [this.user.LastName, [Validators.required]],
        'Birthday': [this.user.Birthday, [Validators.required]],
        'picture': [this.user.urlpicture],
      }
    )
  }
  notifyParent() {
    this.notification.emit(false);
  }
  update(f: FormGroup) {
    this.user.FirstName = f.value.nom;
    this.user.LastName= f.value.prenom;
    this.user.Birthday = f.value.datenaissance;
    let response = this.us.updateUser(this.user);
    response.subscribe((data) => {
      if (this.InputImage != "") {
        const formdata = new FormData();
        formdata.append('file', this.userFile, this.InputImage);
        this.imageService.postFileUser(formdata, this.session.getUser().IdUser).subscribe((data2) => {
          this.user2 = data2
          this.user.urlpicture = this.user2.urlpicture;
          this.session.setUser(this.user);
        })
      }
      else {
        this.session.setUser(this.user);
      }
    });

    this.notifyParent();
  }

  selectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.InputImage = Math.random().toString(36).substr(2, 9) + "." + event.target.files[0].name.split('.')[1];

      this.userFile = file;
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (event) => { this.imgURL = reader.result }
    }
  }

}
