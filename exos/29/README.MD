
# Exercice Input / Output

### 1. Faire un component 'heroes'

Le role de ce component est d'afficher une card de héro

Ce component sera réutilisé par les components (via @Input) :
- Battleground
- Arena


### 2. Un peu plus de pratique sur les Input/Ouput


Faire un service 'yatzee-best-score', ce service doit stocker les meilleurs scores au Yatzee, pour se faire vous devrez les stockers dans un tableau de number


Ajouter les fonctions suivantes :
- getter pour le tableau
- addBestScore(bestScore: number): void : qui ajoute un nouveau score dans le tableau

(Ajouter 9 scores à la main dans le tableau)


Faites un component 'yatzee-best-score'


Ce component a un attribut de type YatzeeBestScoreService, il doit afficher les 10 scores les plus hauts au Yatzee


Le but est quand même de faire de l'Input/Ouput, du coup vous ajouterez le component Yatzee dans ce même component, et vous modifierez la route /yatzee actuelle pour qu'elle aille vers le component des meilleurs score


Ajouter un bouton "Jouer" en dessous des meilleurs scores, lorsque l'on clique dessus, on affiche le component Yatzee.


Le but est que lorsqu'une partie de Yatzee est finie, le component Yatzee informe le component YatzeeBestScoreComponent qu'un nouveau score doit être ajouté et actualiser la liste des scores


### 3. En prévision de Vendredi...


Afin de préparer au TP de Vendredi, nous allons créer une classe Race (dans le dossier model/rpg), elle est représentée par :
- name: string
- code: string
- damage: number
- lifePoint: number
- criticalStrike: number
- defense: number

Les attributs damage, lifePoint, criticalStrike et defense sont des coefficients, qui vont augmenter la caracteristique du héro en question.

Dorénavant un Héro aura une Race, qui sera obligatoire lors de sa création, pensez à actualiser votre clase Hero en fonction.


Vous allez créer un Service, de nom Race


Il aura un tableau de Race en attribut, et un getter pour celui-ci


Afin de pouvoir le tester et le réutiliser correctement dans notre application, vous ajouterez les Race suivante dans le tableau :

- name : Orc
- code: OR (c'est un o majuscule)
- damage: 1.2
- lifePoint: 1
- criticalStrike: 1
- defense: 1


- name: Tauren
- code: TA
- damage: 1
- lifePoint: 1.2
- criticalStrike: 1
- defense: 1


- name: Undead
- code: UD
- damage: 1
- lifePoint: 1
- criticalStrike: 1.2
- defense: 1


- name: Blood Elf
- code: BE
- damage: 1.1
- lifePoint: 1
- criticalStrike: 1.1
- defense: 1


- name: Dwarf
- code: DW
- damage: 1
- lifePoint: 1
- criticalStrike: 1
- defense: 1.2


Ajouter les fonctions suivante dans le RaceService :
- getRaceByCode(code: string), cette fonction doit renvoyer une race à partir d'un code
- addRace(race: Race): void, cette fonction ajoute un objet de type Race au tableau de Race du service


Faites un component 'race', il aura un attribut de type RaceService et affichera dans une table html les différentes race à notre disposition
(Une page de récapitulatif en gros)
