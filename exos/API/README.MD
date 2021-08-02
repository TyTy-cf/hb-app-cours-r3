
# Exercice API


### 1. Faire component 'region-show-department'


Le but de ce component est d'afficher les départements d'une region, lorsque l'on clique sur le nom ou le code... ou le tr

(L4affichage se fera sur la même page - utilisez un @Input du coup)
(Vous devrez créer une interface Department)
(Vous devrez créer le service qui va chercher vos départments)


https://geo.api.gouv.fr/decoupage-administratif/departements


### 2. Faire component 'department-show-commune'


Le but de ce component est d'afficher les communes d'un département, lorsque l'on clique sur le nom ou le code... ou le tr
(Le click se fait depuis le component 'region-show-department')

Cette fois, on accède au component 'department-show-commune' par une route avec paramètre (nom de la route libre...)
Le paramètre de la route sera probablement le code du département.


(Vous devrez créer une interface Commune)

(Vous devrez créer le service qui va chercher vos communes)


https://geo.api.gouv.fr/decoupage-administratif/communes#communes-list


### 3. Pour aller plus loin...


Fetchez depuis l'API Pokemon et créer des pokemons !

Je veux un objet Pokemon avec :
- son nom
- son numero (order)
- son image logo (sprites > front_default)


Si vraiment c'est trop facile, récupérer ses types !


Exemple d'URL récupéré depuis PokeApi :
- https://pokeapi.co/api/v2/pokemon/
- https://pokeapi.co/api/v2/pokemon/ditto




