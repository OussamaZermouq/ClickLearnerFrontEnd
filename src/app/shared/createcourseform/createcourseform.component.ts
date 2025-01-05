import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared.module';
import { MenuItem } from 'primeng/api';
import { Matiere } from '../../../models/Matiere';
import { Chapitre } from '../../../models/Chapitre';
import { Cours } from '../../../models/Cours';


interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

interface createCourseRequest{
  
  titreCours: string;
  descriptionCours: string;
  profId: number;
  difficulty: string;
  estimatedDuration: number;
  matier: string;
  chapitres: Chapitre[];

}

interface Difficulty {
  name: string;
  code: string;
}
@Component({
  selector: 'app-createcourseform',
  standalone: false,
  templateUrl: './createcourseform.component.html',
  styleUrl: './createcourseform.component.css',
})


export class CreatecourseformComponent implements OnInit {
  items: MenuItem[] | undefined;
  difficulties: Difficulty[] | undefined;
  matiereList: Matiere[]|undefined;
  selectedMatiere: Matiere | undefined;
  selectedDifficulty: Difficulty | undefined;
  courseName: string = '';
  courseDescription: string = '';
  courseCategory: string = '';
  coursePrice: number = 0;
  courseInstructor: string = '';
  courseDuration: string = '';
  active: number = 0;
  coursDescription: string = '';

  listChapitre: string[] = [];
  chapitre :string|undefined;

  chapters: { content: string; saved: boolean }[] = [
    { content: '', saved: false },
  ]; 
  

  addChapter() {
    this.chapters.push({ content: '', saved: false });
  }

  saveChapter(index: number) {
    this.chapters[index].saved = true;
    console.log(`Chapter ${index + 1} saved with content:`, this.chapters[index].content);
  }

  ngOnInit() {

    this.difficulties = [
      { name: 'Easy', code: 'EASY' },
      { name: 'Medium', code: 'MEDIUM' },
      { name: 'Hard', code: 'HARD' },
      { name: 'Advanced', code: 'ADVANCED' }
    ];

    this.items = [
      {
        label: 'Informations basique',
      },
      {
        label: 'Corps du cours',
      },
      {
        label: 'Resources',
      },
    ];
    //probably should get this from the backend and not hardcode it -_-
    this.matiereList = [
      {
        matiereId: 1,
        name: 'Programmation',
      },
      {
        matiereId: 4,
        name: 'Communication Professionnelle',
      },
      
      {
        matiereId: 5,
        name: 'DevOps',
      },
      {
        matiereId: 6,
        name: 'System design',
      },
      {
        matiereId: 7,
        name: 'English',
      },
      {
        matiereId: 10,
        name: 'Database',
      },
    ]


  }

  coursToCreate = new Cours();

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

}
