import { Injectable } from '@angular/core';
import { Solution } from '../models/solution.model';
import { CompanyStat } from '../models/company-stat.model';
import { CompanyValue } from '../models/value.model';

/**
 * Centralised mock data for the marketing site.
 * This service is intentionally the single source of truth for solution
 * content so it can later be swapped for a real REST/GraphQL client
 * without touching any component.
 */
@Injectable({ providedIn: 'root' })
export class SolutionsService {
  private readonly solutions: Solution[] = [
    {
      slug: 'gestion-cabinet',
      icon: 'briefcase-medical',
      name: 'Gestion de cabinet médical',
      tagline: 'Votre cabinet, simplement et efficacement.',
      description:
        "Un logiciel de gestion de cabinet médical qui centralise patients, rendez-vous, consultations et facturation dans une seule interface claire.",
      longDescription:
        "Conçu pour les médecins et leurs secrétariats médicaux, ce logiciel de cabinet médical réunit la gestion des patients, l'agenda, les consultations et la facturation. L'objectif : réduire la charge administrative et redonner du temps médical au médecin, sans complexifier l'organisation du cabinet.",
      features: [
        'Gestion des patients',
        'Dossiers patients',
        'Gestion des rendez-vous',
        'Agenda médical',
        'Gestion des consultations',
        'Historique des patients',
        'Documents médicaux',
        'Facturation',
        'Gestion administrative',
        'Statistiques',
        'Gestion des utilisateurs',
        'Notifications'
      ],
      color: 'blue',
      audiences: ['Médecins', 'Cabinets médicaux', 'Secrétariats médicaux']
    },
    {
      slug: 'agenda',
      icon: 'calendar',
      name: 'Agenda & rendez-vous',
      tagline: 'Un agenda médical pensé pour votre rythme.',
      description:
        'Une solution de prise de rendez-vous et de gestion d’agenda médical pour organiser chaque journée sans y perdre de temps.',
      longDescription:
        "L'agenda médical Docteur Solution Tunisie permet aux professionnels de santé d'organiser leurs journées, de gérer les disponibilités et les absences, et de limiter les rendez-vous manqués grâce aux rappels automatiques. Les vues jour, semaine et mois s'adaptent à chaque pratique.",
      features: [
        'Calendrier',
        'Rendez-vous',
        'Disponibilité',
        'Rappels',
        'Gestion des absences',
        'Rendez-vous récurrents',
        'Notifications',
        'Vue journée / semaine / mois'
      ],
      color: 'turquoise',
      audiences: ['Médecins', 'Cliniques', 'Équipes administratives']
    },
    {
      slug: 'dossier-patient',
      icon: 'folder-heart',
      name: 'Dossier patient numérique',
      tagline: 'Le dossier patient, pensé pour la confiance.',
      description:
        'Un dossier patient numérique centralisant historique médical, consultations, documents et prescriptions en toute confidentialité.',
      longDescription:
        "Le dossier patient numérique regroupe les informations essentielles : historique médical, consultations, documents, prescriptions, résultats et notes. Une interface pensée pour rester simple à consulter en consultation, tout en portant une attention particulière à la confidentialité des données de santé.",
      features: [
        'Informations patient',
        'Historique médical',
        'Consultations',
        'Documents',
        'Prescriptions',
        'Résultats',
        'Notes',
        'Historique des interactions'
      ],
      color: 'navy',
      audiences: ['Médecins', 'Cliniques', 'Établissements de santé']
    },
    {
      slug: 'teleconsultation',
      icon: 'video',
      name: 'Téléconsultation',
      tagline: 'La consultation à distance, en toute simplicité.',
      description:
        'Une solution de téléconsultation pour échanger avec vos patients à distance : visioconférence, documents et messagerie sécurisée.',
      longDescription:
        "La solution de téléconsultation permet au médecin et au patient d'échanger à distance via une salle de consultation virtuelle sécurisée. Partage de documents, chat intégré et historique des consultations complètent l'expérience pour un suivi fluide, avant, pendant et après la consultation.",
      features: [
        'Visioconférence',
        'Salle de consultation virtuelle',
        'Partage de documents',
        'Chat sécurisé',
        'Notifications',
        'Historique des consultations'
      ],
      color: 'blue',
      audiences: ['Médecins', 'Professionnels de santé', 'Patients']
    },
    {
      slug: 'messagerie',
      icon: 'message-circle',
      name: 'Messagerie sécurisée',
      tagline: 'Communiquez simplement, en toute sécurité.',
      description:
        'Une messagerie professionnelle pour échanger entre confrères et avec vos patients, avec partage de documents intégré.',
      longDescription:
        "La messagerie sécurisée facilite les échanges entre professionnels de santé et avec les patients : conversations individuelles ou groupes de discussion, partage de documents, recherche dans les conversations et statut en ligne. Une communication fluide, pensée pour le contexte médical.",
      features: [
        'Chat professionnel',
        'Conversations médecin / patient',
        'Conversations entre professionnels',
        'Partage de documents',
        'Notifications',
        'Recherche dans les conversations',
        'Statut en ligne',
        'Groupes de discussion'
      ],
      color: 'turquoise',
      audiences: ['Professionnels de santé', 'Équipes administratives', 'Patients']
    },
    {
      slug: 'gestion-administrative',
      icon: 'file-text',
      name: 'Gestion administrative',
      tagline: 'L’administratif, sans la charge mentale.',
      description:
        'Facturation, suivi des paiements, documents et rapports réunis pour simplifier la gestion administrative du cabinet.',
      longDescription:
        "Cette solution regroupe les outils nécessaires à la gestion administrative d'un cabinet ou d'un établissement de santé : facturation, suivi des paiements, gestion documentaire, statistiques, rapports et gestion des tâches. De quoi garder une vision claire de l'activité, sans complexité inutile.",
      features: [
        'Facturation',
        'Suivi des paiements',
        'Documents',
        'Gestion des utilisateurs',
        'Statistiques',
        'Rapports',
        'Gestion des tâches'
      ],
      color: 'navy',
      audiences: ['Cabinets médicaux', 'Cliniques', 'Établissements de santé']
    },
    {
      slug: 'portail-patient',
      icon: 'user-round',
      name: 'Portail patient',
      tagline: 'Le patient, acteur de son parcours de soins.',
      description:
        'Un espace patient pour prendre rendez-vous, consulter ses documents et échanger avec son équipe soignante.',
      longDescription:
        "Le portail patient donne accès à l'essentiel : prise de rendez-vous, consultation des documents, messagerie, téléconsultation, informations personnelles et historique des rendez-vous. Une manière simple pour les patients de rester connectés à leur parcours de soins.",
      features: [
        'Prise de rendez-vous',
        'Consultation de documents',
        'Messagerie',
        'Téléconsultation',
        'Informations personnelles',
        'Notifications',
        'Historique des rendez-vous'
      ],
      color: 'blue',
      audiences: ['Patients', 'Professionnels de santé']
    },
    {
      slug: 'dashboard-medical',
      icon: 'layout-dashboard',
      name: 'Tableau de bord médical',
      tagline: 'Toute votre activité, en un coup d’œil.',
      description:
        'Un tableau de bord SaaS premium pour visualiser patients, rendez-vous, consultations et statistiques en temps réel.',
      longDescription:
        "Le tableau de bord médical offre une vue globale de l'activité : nombre de patients, rendez-vous du jour, consultations, notifications, tâches et statistiques. Pensé comme un véritable outil de pilotage, avec une lecture immédiate des indicateurs clés.",
      features: [
        'Nombre de patients',
        'Rendez-vous du jour',
        'Consultations',
        'Notifications',
        'Tâches',
        'Statistiques',
        'Graphiques',
        'Activité récente'
      ],
      color: 'turquoise',
      audiences: ['Médecins', 'Cliniques', 'Équipes administratives']
    }
  ];

  private readonly companyStats: CompanyStat[] = [
    { value: 40, suffix: '+', label: "Années d'expertise dans la santé" },
    { value: 5000, suffix: '+', label: 'Clients accompagnés' },
    { value: 2500, suffix: '', label: 'Collaborateurs' },
    { value: 1, suffix: '', label: 'Objectif : simplifier la santé grâce au numérique' }
  ];

  private readonly companyValues: CompanyValue[] = [
    { icon: 'award', title: 'Expertise', description: "40 ans de connaissance du terrain de la santé et des besoins réels des professionnels." },
    { icon: 'sparkles', title: 'Innovation', description: 'Une veille technologique constante pour proposer des solutions modernes et évolutives.' },
    { icon: 'shield-check', title: 'Sécurité', description: 'Une attention particulière portée à la protection des données de santé, à chaque étape.' },
    { icon: 'feather', title: 'Simplicité', description: 'Des interfaces pensées pour le quotidien des soignants, sans complexité superflue.' },
    { icon: 'handshake', title: 'Confiance', description: 'Des milliers de professionnels de santé nous font confiance depuis des années.' },
    { icon: 'heart-handshake', title: 'Engagement', description: 'Un accompagnement dans la durée, aux côtés des équipes médicales et administratives.' }
  ];

  getSolutions(): Solution[] {
    return this.solutions;
  }

  getFeaturedSolutions(): Solution[] {
    return this.solutions;
  }

  getSolutionBySlug(slug: string): Solution | undefined {
    return this.solutions.find((s) => s.slug === slug);
  }

  getCompanyStats(): CompanyStat[] {
    return this.companyStats;
  }

  getCompanyValues(): CompanyValue[] {
    return this.companyValues;
  }
}
