import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Skill } from '../skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class AboutComponent {
  profileImgUrl: string =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  description: string =
    'Hi, I\'m <span class="highlight-word">Ludwig Koch</span>, a <span class="highlight-word">Full-Stack Engineer</span> with a <span class="highlight-word">Master\'s degree in Business Information Systems</span> from TU Darmstadt.<br><br>Currently, I\'m putting my skills to work as a <span class="highlight-word">Software Engineer at ATemp Consulting</span>. Outside of my professional role, I enjoy working on private software projects and tackling coding challenges.When I\'m not immersed in software development, you can find me working out, hanging out with friends, or indulging in gaming on my PS5.<br><br>If you\'d like to connect, feel free to <span class="highlight-word">message me on LinkedIn, shoot me an email, or use the contact form below</span>. You can also download my resume right here.';
  linkedInUrl: string = 'https://www.linkedin.com/';
  emailAddress: string = 'insertMailAddressHere';

  programmingLanugages: Skill[] = [
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      description: 'Java',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      description: 'JavaScript',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      description: 'TypeScript',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      description: 'Python',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      description: 'HTML',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      description: 'CSS',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      description: 'SQL',
    },
  ];
  frameworks: Skill[] = [
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
      description: 'TensorFlow',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
      description: 'scikit-learn',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
      description: 'Keras',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
      description: 'pandas',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
      description: 'PyTorch',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
      description: 'Flask',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      description: 'Angular',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
      description: 'Java Spring',
    },
  ];
  tools: Skill[] = [
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
      description: 'Apache Kafka',
    },
    {
      imgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      description: 'Docker',
    },
  ];

  constructor() {}

  setMailTo(emailAddress: string): string {
    return 'mailto:' + emailAddress;
  }
}
