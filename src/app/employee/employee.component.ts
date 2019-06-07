import { Component } from "@angular/core";

@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html',
    styleUrls : ['./employee.component.css']
})
export class EmployeeComponent{

    FirstName:string="gauri";
    LastName:string="salagare";
    Address:string="pune";
    Gender:string="female";

    //Attribute Binding
    columnSpan = 4;

    //Property Binding
    imagePath:string="assets/image/rose-blossom.jpeg";

    name = "sharanya";

    //Event Binding--
    isDisable :boolean = true;

    count = 0;

    show:boolean =true;
    showDetails(){
        console.log(this.show);
        this.show = !this.show;
    }
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

