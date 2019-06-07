import { Component } from "@angular/core";

@Component({
    selector : 'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
})

export class StudentComponent{
    //Attribute binding
    columnSpan = 4;
    // Interpollation
    firstName : string ="gauri";
    lastName :string="salagare";
    city:string="pune";
    gender:string="female";

    // Property binding
    imagePath : string = "assets/image/rose-blossom.jpeg";

    //Databinding
    UserName = "sharanya";

    //Event Binding
    isDisable :boolean = true;

    count = 0;

    
    counter()
    {
        this.count++;
        // this.count === 10 ? this.isDisabled = true : this.isDisabled = false;
    }
    reset()
    {
        this.count = 0;
    }
    
    
}