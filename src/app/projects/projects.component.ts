import { Component } from '@angular/core';
import { Project } from '../project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      "title": "Information Systems Research Classifier (ISRC) | Master Thesis Project",
      "image": "https://raw.githubusercontent.com/LudwigK0ch/ISRC/main/mysite/static/images/ISRC_GUI.png",
      "description": "Developed a web application for user-driven PDF upload and classification of research papers within the Information Systems domain.<br>Integrated machine learning models, leveraging a dataset of 3,000 labeled English-language research papers achieving an average of 85% accuracy in predictions.<br><br>Technologies: Python, TensorFlow, scikit-learn, Keras, Flask, JavaScript, MongoDB",
      "github": "https://github.com/LudwigK0ch/ISRC"
    },
    {
      "title": "Soft Factory | Bachelor Project",
      "image": "https://raw.githubusercontent.com/LudwigK0ch/TUDITPM/master/tuditpm.png",
      "description": "Built a scalable web application in a team of five for a German insurance company.<br>Enabled users to receive the most recent information about their clients from international newsfeeds and social media platforms.<br><br>Technologies: Scala, Java, MongoDB, Apache Kafka, Apache Zookeeper",
      "github": "https://github.com/LudwigK0ch/TUDITPM"
    },
    {
      "title": "Gorillas game",
      "image": "https://raw.githubusercontent.com/LudwigK0ch/gorillas/main/gorillas.JPG",
      "description": "Collaborated with a team of students to develop the classic Gorillas game from the 90s using Java. Our version included various maps, a high score leaderboard, adjustable settings, and basic animations.<br><br>Technologies: Java",
      "github": "https://github.com/LudwigK0ch/gorillas"
    }
  ];
}
