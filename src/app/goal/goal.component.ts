import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  
  goals:Goal[] = [
    new Goal(1, 'Watch Like a Boss', 'I love it',new Date(2020,3,24)),
    new Goal(2,'Buy queen cakes','I have to buy queen cakes',new Date(2019,7,9)),
    new Goal(3,'Buy icecream','Cravings...',new Date(2022,4,12)),
    new Goal(4,'Get tested','I need the results...',new Date(2002,0,14)),
    new Goal(5,'Buy oil','Just incase...',new Date(2019,2,14)),
    new Goal(6,'Complete content and submit IP','For better results',new Date(2030,3,14)),
  ];

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
