import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../shared.module';
import { MenuItem, MessageService } from 'primeng/api';
import { Matiere } from '../../../models/Matiere';
import { Chapitre } from '../../../models/Chapitre';
import { Cours } from '../../../models/Cours';
import { CloudinaryModule } from '@cloudinary/ng';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { CloudinaryService } from '../services/cloudinary.service';
import { FileSelectEvent, FileUploadEvent } from 'primeng/fileupload';
import { Document } from '../../../models/Document';
import { forkJoin } from 'rxjs';
import { CoursService } from '../services/cours.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface createCourseRequest {
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
  encapsulation: ViewEncapsulation.None
})
export class CreatecourseformComponent implements OnInit {
  items: MenuItem[] | undefined;
  difficulties: string[] | undefined;
  matiereList: Matiere[] | undefined;
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
  coursImageUploadedUrl: string = '';
  coursChapters: Chapitre[] = new Array<Chapitre>();
  coursToCreate = new Cours();
  chapters: { content: string; saved: boolean }[] = [
    { content: '', saved: false },
  ];

  addChapter() {
    this.chapters.push({ content: '', saved: false });
    this.coursChapters.push(new Chapitre());
  }

  saveChapter(index: number) {
    this.chapters[index].saved = true;
    console.log(
      `Chapter ${index + 1} saved with content:`,
      this.chapters[index].content
    );
  }
  constructor(
    private cloudinaryService: CloudinaryService,
    private messageService: MessageService,
    private coursService: CoursService,
    private sanitizer:DomSanitizer
  ) {

  }

  onActiveIndexChange(event: number) {
    this.active = event;
}

  sanitizeHtml(content?: string): SafeHtml {
    console.log(this.sanitizer.bypassSecurityTrustHtml(content!));
    return this.sanitizer.bypassSecurityTrustHtml(content!);
  }
  ngOnInit() {
    this.coursToCreate.chapitres = this.coursChapters;
    this.difficulties = ['Easy', 'Medium', 'Hard', 'Advanced'];

    this.items = [
      {
        label: 'Informations basique',
      },
      {
        label: 'Corps du cours',
      },
      {
        label: 'Récapitulatif',
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
    ];
  }

  file?: File;
  documents?: Document[];

  onSelectedFiles(event: FileSelectEvent) {
    this.file = event.files[0];
    this.cloudinaryService.uploadImage(this.file).subscribe((response) => {
      this.coursImageUploadedUrl = response.url;
      this.coursToCreate.coursImage = this.coursImageUploadedUrl;
    });
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  uploadedFiles: any[] = [];

  onUpload(event: FileUploadEvent, index: number) {
    // Create an array to store all upload observables
    const uploadObservables = event.files.map((file) => {
      this.uploadedFiles.push(file);
      return this.cloudinaryService.uploadImage(file);
    });

    // Wait for all uploads to complete
    forkJoin(uploadObservables).subscribe((responses) => {
      const documents: Document[] = responses.map(
        (response) => new Document(response.original_filename, response.url)
      );

      if (this.coursToCreate.chapitres) {
        this.coursToCreate.chapitres[index].documents = documents;
      }

      console.log(this.coursToCreate);
      this.messageService.add({
        severity: 'info',
        summary: 'Files Uploaded',
        detail: '',
      });
    });
  }

  onsaveCourse() {
    this.coursToCreate.profId = Number.parseInt(localStorage.getItem("userId")!);
    this.coursService.createCours(this.coursToCreate).subscribe((data)=>{
      console.log(data);
    });

  }
}
