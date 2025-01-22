import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { Event } from '../event';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  events: Event[] = [
    {
      status:
        'Started Business Information Systems Bachelor at Technical University Darmstadt.',
      details:
        '<strong>Relevant coursework:</strong> Scalable Data Management, Introduction to Cryptography, Concepts of Programming Languages, IT-Security 2, Java Game Framework.',
      date: '10/2014',
      icon: 'pi pi-shopping-cart',
      color: '#9C27B0',
    },
    {
      status:
        'Started working full-time as a software engineer at ATemp Consulting GmbH.',
      details:
        '<p><strong>Accounts Payable Implementation for a Global Automobile Manufacturer:</strong><ul><li>Implemented major components of the customer’s Accounts Payable module in Esker on Demand, focusing on automating invoice validation and posting processes.</li><li>Achieved automation for over 8,000 globally distributed invoices per day.</li></ul><strong>Technologies:</strong> JavaScript, TypeScript.</p><p><strong>Sales Order Processing and Apache Kafka Integration for a Global Chemical Company:</strong><ul><li>Led the implementation of the customer’s Sales Order Processing module in Esker on Demand.</li><li>Designed and implemented the integration of the company’s Apache Kafka system into the Esker solution, ensuring the platform received the most recent master data changes.</li><li>Achieved an average automation rate of 99% for approximately 20,000 orders per month.</li></ul><strong>Technologies:</strong> JavaScript, TypeScript, Kafka REST.</p><p><strong>Digital Transformation Project for a Global Industrial Supply Manufacturer:</strong><ul><li>Managed and led the implementation of the digitalization and automation of incoming invoice and order documents using the Esker on Demand cloud platform.</li><li>Achieved an average automation rate of 93% for incoming documents, processing 5,000 orders and 2,000 invoices per month.</li></ul><strong>Technologies:</strong> JavaScript, TypeScript.</p>',
      date: '09/2018',
      icon: 'pi pi-cog',
      color: '#673AB7',
    },
    {
      status:
        'Finished Business Information Systems Bachelor at Technical University Darmstadt.',
      date: '06/2019',
      icon: 'pi pi-shopping-cart',
      color: '#9C27B0',
    },
    {
      status:
        'Started Business Information Systems Master at Technical University Darmstadt.',
      details:
        '<strong>Relevant coursework:</strong> Functional & Object-Oriented Programming Concepts, Data Structures & Algorithms, Operating Systems, Software Engineering, IT-Security 1, Information Management, Computational Engineering & Robotics, Mathematics, Statistics.',
      date: '10/2020',
      icon: 'pi pi-cog',
      color: '#673AB7',
    },
    {
      status:
        'Finished Business Information Systems Master at Technical University Darmstadt',
      date: '11/2023',
      icon: 'pi pi-cog',
      color: '#673AB7',
    },
  ];
}
