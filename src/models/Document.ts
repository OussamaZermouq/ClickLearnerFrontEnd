import { Chapitre } from './Chapitre';

export class Document {
  nomDocument?: string;
  urlDocument?: string;
  constructor(
    nomDocument?: string,
    urlDocument?: string,
  ) {
    this.nomDocument = nomDocument;
    this.urlDocument = urlDocument;
  }
}
