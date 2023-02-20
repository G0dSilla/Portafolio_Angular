import { Component } from '@angular/core';
import { faFacebookSquare, faLinkedin, faInstagram, faGithubSquare, faGitlabSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './styles/mainstyle.css'
  ]
})
export class AppComponent {
  title = 'PortafolioAngular';
  iconLinkedin = faLinkedin;
  iconInstagram = faInstagram;
  iconGithub = faGithubSquare;
  iconGitlab = faGitlabSquare;
}
