import { Component } from '@angular/core';
import { Task } from './task';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

config: { [key:string]: string} | null = null;
tasks:Task[]=[
{
name:'Programowanie',
deadline:'2021-12-11',
done: false,
},

{
name:'Sprzątanie',
deadline:'2021-12-12',
done: false,
},

{
  name:'Siłownia',
deadline:'2021-12-13',
done: false,
},
];

constructor() {
  setTimeout( () => {
  this.config = {
  title:'Lista zadań',
  footer: 'Lista zadań zbudowana w Angularze',
  date: new Date().toDateString()
  };
},500);

}

clearTasks(){
  this.tasks=[]
}



createTask(name: string, deadline:string){
  const task: Task={
    name,
    deadline,
    done:false,
  };
  this.tasks.push(task);
}


}
