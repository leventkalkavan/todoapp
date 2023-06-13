import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container" style="margin-top: 30px;">
    <h1>TodoApp</h1>
    <hr>
    <div class="form-group">
      <label for="work">yapilacaklar</label>
      <input type="text" class="form-control" id="work" name="work" [(ngModel)]="work">
    </div>
  </div>
  <div class="form-group mt-2">
    <button class="btn btn-outline-primary ww-100" (click)="save()">kaydet</button>
  </div>
  <hr>
  <ul>
    <li *ngFor="let item of works; let i = index;">
      <input type="text" [(ngModel)]="works" [disabled]="isEditing[i]">
      <button class="btn btn-outline-primary btn-sm" (click)="edit(i)" [disabled]="isEditing[i]">Düzenle</button>
      <button class="btn btn-outline-danger btn-sm" (click)="delete(i)">Sil</button>
      <button class="btn btn-outline-success btn-sm" (click)="update(i)" [disabled]="!isEditing[i]">Güncelle</button>
    </li>
  </ul>
  `
})
export class AppComponent {
  work: string = '';
  works: string[] = [];
  isEditing: boolean[] = [];

  save() {
    if (this.work.trim() !== '') {
      if (!this.works.includes(this.work)) {
        this.works.push(this.work);
        this.isEditing.push(false);
      }
      this.work = '';
    }
  }

  delete(index: number) {
    this.works.splice(index, 1);
    this.isEditing.splice(index, 1);
  }

  edit(index: number) {
    this.isEditing[index] = true;
  }

  update(index: number) {
    this.isEditing[index] = false;
  }
}