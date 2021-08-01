
# Exercices Component Angular

Pensez pour chaque component que vous allez créer, de faire un lien dans l'app component, qui permette d'aller vers les nouveaux components
(un lien est une route vers ce component)


### 1. Faire un component 'arena'


Ce component doit contenir le code de l'arena-gurubashi, et n'avoir que ça !


### 2. Faire un component 'chess'


Ce component doit contenir le code du jeu d'échec, et n'avoir que ça !


### 3. Faire un component 'yatzee'


Ce component doit contenir le code du jeu d'échec, et n'avoir que ça !


### 4. Faire un component 'battleground'


Ce component doit contenir le code du battleground, et n'avoir que ça !


### 5. Car il faut bien compliquer les choses...


Faire un component 'prep-battleground'

Ce component doit avoir un lien vers le component 'battleground', il lui donnera les noms des 2 héros à créer, via paramètre de route

(PS : vous devrez modifier le component battleground en conséquence...)
(PS2: vous crérez les héros aléatoirement)


### 6. Création d'un jeu de cartes


- Faire une classe Card, elle représente les cartes d'un jeu de cartes
- Elle est composée des attributs suivant :
  - name
  - color
  - value
  - rank
  - image


- Faire une classe AbstractDeck, elle représente un paquet de cartes
- Elle est composée d'un tableau de Card (deck: Card[])
- Prévoyez d'ajouter les méthodes suivantes :
  - shuffleDeck(): Card[] : elle a pour rôle de mélange le deck
  - drawCard(): Card : elle a pour rôle de piocher une carte du paquet
  - drawCards(nbCards: number): Card[] : elle a pour rôle de piocher nbCards du paquet


- Faire une classe ClassicDeck, ClassicDeck est un AbstractDeck
- Elle représente un jeu de 52 cartes classic
- Vous devrez le créer


- Créer un component 'classic-deck'
- Tester vos classes dedans :
    - vous créerai un jeu ClassicDeck dedans
    - vous le mélangerai (méthode shuffle)
    - vous piocherez 5 cartes

- Afficher le deck dans l'html et la main que vous venez de piocher


### 7. Suite du jeu de cartes


Faire la même chose pour un jeu de Tarot
