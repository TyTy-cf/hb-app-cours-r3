
# Exercices Syntaxe Angular - Communication entre html et .ts

Pour les exercices de ce TP, vous utiliserez le component "syntaxe-angular"

### 1. Faire un compteur :


- Il commence à 0
- On doit pouvoir l'incrémenter de 1 et de 5 (en positif et négatif)
- On doit pouvoir le reset (retour à 0)
- De plus, il change de couleur en fonction de sa valeur :
  - 0 : jaune
  - Entre 1 et 15, il sera vert clair (#4af778)
  - Entre 16 et 25, il sera vert (#00ff44)
  - 26 et plus, il sera vert foncé (#009c29)
  - Entre -1 et -15, il sera rouge clair (#c23844)
  - Entre -16 et -25, il sera rouge (#ff0016)
  - -26 et plus, il sera rouge foncé (#ab000f)


### 2. La carte du bar

Reprenez la carte du bar, qui était affichée en console.log, mais le faire cette fois dans l'HTML.

Vous n'afficherez pas l'indice d'alcool, par contre vous ferez une couleur alterné :
- Vert si ce n'est pas alcoolisé
- Rouge sinon
  (LA couleur est appliqué au background ;) )


### 3. "ArenaGurubashi"


Faites un affichage de tous les héros qui vont combattre

Vous afficherez :
- Nom du héro (sa classe)
  (Pour les plus téméraires, ajouter un attribut color au héro, et définissez une couleur par classe de héro qui servira de background color pour chacun des héros)
- Son niveau
- Ses points de vie actuel sur point de vie max
- Ses dégâts min et max
- Son taux de coup critique
- Sa défense

(Essayez de faire un truc sympa, quand même !)
Vous savez à votre disposition des images pour représenter les éléments, utilisez les :)
Dans assets/rpg :
  - cs.png : coup critique
  - defense.png : defense
  - sword.png : dégâts
Dans assets/rpg/hero :
  - Les différentes classes de héros (je vous ai modifié la class Hero pour qu'elle inclue une image)


Prévoyez un cas de figure qui ne doit pas arriver, mais sait-on jamais : le cas où je lance mon ArenaGurubashi sans names, donc aucun héro ne sera créé...
Gérez ce cas de figure à l'affichage !


### 4. Le jeu d'échec :


- Modélisez-moi le plateau de jeu
- Faites une fonction pour déplacer un pion du plateau
  (il y a plusieurs cas de figure qui poseront problèmes, je vous laisse le soin de les trouver et de les gérer :) )


### 5. Le Yatzee, pour les plus acharnés :


Vous trouverez les images des dés dans le dossier assets/yatzee, elles sont déjà utilisées.

Ah, je ne vous ai pas dit, je veux le jeu complet cette fois (bon pas complet, complet...)

Je veux qu'il y ai :
- Une gestion de score en fonction des résultats
- Une gestion du nombre maximum de round (13 en tout)
- Une gestion du nombre de lancer de dés par round (3 maximum, il doit être possible d'en faire moins)
  Pour celle-ci, vous devrez donc prévoir un moyen de sauvegarder les dés, ou de dire lesquels vous souhaitez relancer

- Ce que vous ne gérerez pas :
  - Le fait que normalement chaque résultat est unique, on peut cumuler ici
  - On ne gère que les résultats que l'on a déjà dans notre classe Yatzee

Et bien sûr, on essaie de garder la logique objet pour ça... ;)
