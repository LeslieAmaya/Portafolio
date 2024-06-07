import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  github_api_url: string = "https://api.github.com/users/LeslieAmaya/repos";
  repos:any[]=[];
 

  constructor(private http:HttpClient) {}

  ngOnInit():void{
    this.fetchGithubRepos();
  }

  fetchGithubRepos(): void {
    this.http.get<any[]>(this.github_api_url, {
      headers: { 'User-Agent': 'angular-app', 'Accept': 'application/vnd.github.v3+json' }
    }).subscribe(
      data => {
        this.repos=data;
        console.log("GitHub Repositories:", data);
      },
      error => {
        console.error("Error fetching GitHub repos:", error);
      }
    );
  }
}
