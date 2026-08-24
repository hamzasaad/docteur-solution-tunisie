import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

interface Conversation { initials: string; name: string; lastMessage: string; time: string; unread?: number; active?: boolean; online?: boolean; }
interface ChatMessage { from: 'me' | 'them'; text: string; time: string; }

@Component({
  selector: 'dst-chat-preview',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, IconComponent, RevealDirective],
  templateUrl: './chat-preview.component.html',
  styleUrl: './chat-preview.component.scss'
})
export class ChatPreviewComponent {
  readonly conversations: Conversation[] = [
    { initials: 'SL', name: 'Sarah Larbi', lastMessage: 'Merci docteur, à demain.', time: '14:32', online: true, active: true },
    { initials: 'DR', name: 'Dr Riahi (cardiologie)', lastMessage: 'Je vous envoie le compte-rendu.', time: '13:10', unread: 2 },
    { initials: 'MK', name: 'Mehdi Khelifi', lastMessage: 'Est-ce que je peux avancer le RDV ?', time: '11:45' },
    { initials: 'AB', name: 'Amira Belhadj', lastMessage: 'Résultats d’analyses envoyés.', time: 'Hier', online: true },
    { initials: 'GP', name: 'Groupe — Secrétariat', lastMessage: 'Planning de la semaine mis à jour.', time: 'Hier' }
  ];

  readonly messages: ChatMessage[] = [
    { from: 'them', text: 'Bonjour docteur, je voulais confirmer mon rendez-vous de demain.', time: '14:20' },
    { from: 'me', text: 'Bonjour Sarah, c’est bien confirmé à 14h30.', time: '14:22' },
    { from: 'them', text: 'Parfait, merci beaucoup !', time: '14:23' },
    { from: 'me', text: 'Je vous ai partagé le document de préparation.', time: '14:24' },
    { from: 'them', text: 'Merci docteur, à demain.', time: '14:32' }
  ];
}
