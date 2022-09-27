import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  private comicName: string;
  private nbPage: number;
  private artistName: string;

  constructor(@Inject(String)comicName: string,  @Inject(Number) nbPage: number, @Inject(String) artistName: string) { 
    this.comicName = comicName;
    this.nbPage = nbPage;
    this.artistName = artistName;
  }

  getComicName(): String {
    return this.comicName; 
  }

  setComicName(name: string) {
    this.comicName = name;
  }

  getNbPage(): number {
    return this.nbPage;
  }

  setNbPage(pages: number)
  {
    this.nbPage = pages;
  }

  getArtistName(): string {
    return this.artistName;
  }

  setArtistName(artistName: string) {
    this.artistName = artistName;
  }


  ngOnInit(): void {
  }

}
