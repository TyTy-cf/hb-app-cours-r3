## Exo 1 : 19/07

### 1.
A partir d’un âge, on doit indiquer l’année de naissance


### 2.
A partir de ce tableau [ 12, 15, 19, 2], calculer la moyenne des valeurs.


### 3.
A partir d’un prix HT unitaire d’un produit, ainsi que le nombre de produit. On veut connaitre le total TTC arrondi à 2 chiffres après la virgule.


### 4.
A partir de la température d’un volume d’eau, on veut savoir dans quel état est l’eau (solide, liquide ou gaz) (positif : liquide, négatif : solide, au dela de 70° [indicatif] : gaz)


### 5.
On souhaite stocker les notes d'étudiants, vous utiliserez un tableau associatif pour ça

Données :

Albert : 12, 8, 9, 7, 13
Michel : 14, 13, 12, 11, 10
Vincent : 17, 16, 15, 18, 13
Faite une fonction qui prend en paramètre un tableau de note et permet de calculer la moyenne de l'étudiant


### 6.
Faire une fonction qui prend 2 arguments en paramètres : un prix et un pourcentage.

La fonction doit renvoyer le prix augmenté avec le pourcentage


### 7.

Écrivez une fonction pour supprimer les doublons d’un tableau : Exemple : [1, 2, 2, 3, 3, 3, 4, 5, 5] Résultat attendu : [1, 2, 3, 4, 5]


### 8.

Avec le moins de lignes de code possible, proposez moi un algorithme qui, pour un nombre donné, affiche la table de multiplication liée. Par exemple : Si je demande 1, je veux voir :

1x1 = 1
1x2 = 2
etc Et ce jusqu'à 12


### 9.

Faites une fonction qui prend en argument une chaîne de caractères (LONGUE) Cette fonction doit afficher les 15 premiers caractères puis '...' Par exemple :

Je passe la chaîne : 'Lorem quisque class vestibulum'
La fonction doit afficher 'Lorem quisque c...'


### 10.

Faites une fonction checkPassword, dont le but est de vérifier la validité d'un mot de passe, qui sera pris en argument Un mot de passe est considéré valide lorsqu'il fait plus de 9 caractères, et qu'il contient au moins le caratère '@' La fonction renverra un booléen pour indiquer la validité du mot de passe


### 11.

Faire une fonction qui prend en paramètre une durée, en miilisecondes

Et l'afficher sous forme de chaîne de caratères

Exemple :

Param : 225000

Affichage : 03:45"00


### 12.

Faire une fonction qui ajoute derrière chaque voyelle d'une chaine de caractères 'fe' et répète ensuite la voyelle

Par exemple :

Chat donne : chafeat

## Programmation Objet (utilisation de classes)
### 13.

Créer une interface Boisson, elle est caractérisée par :
- name
- alcohol : oui ou non
- price

Créer une classe Bar, elle est caractérisée par un tableau de boisson, qui représente la carte du bar
Un bar a aussi un nom

Faites une fonction, dans la classe Bar, qui permet d'afficher la "carte" du bar en console.log


### 14.

Nous allons faire un jeu de Yatzee : https://fr.wikipedia.org/wiki/Yahtzee

Comment feriez-vous pour le modéliser avec en objet ?
Réfléchissez à ça, et appelez-moi lorsque vous avez une idée, que je vous la valide (ou pas !)

Une fois la "solution" trouvée :
- Faire une fonction qui effectue un lancé (l'affiche via un console.log)
- Faire une fonction qui informe du résultat effectué par l'utilisateur
  (PS : pour le moment ne pensez pas aux suites !!!!)


### 15.

Une fois les résultats "standard" donnés, faite le pour les suites.


### 16.

Et maintenant... En prévision de la suite, comment feriez-vous pour faire un échiquier ?

Pareil, réfléchissez à comment le faire en objet.

Je veux juste l'échiquier pour l'instant : ![img.png](../../img.png)


### 17. Héritage

Class : Hero, caractérisé par :

- Son nom
- Ses points de vie (actuel)
- Ses points de vie (maximum)
- Dégâts max
- Dégâts min
- Son niveau
- Defense
- Chance de coup critique (on partira sur un number assimilé à un %)

Tous les Héros commencent niveau 1

Et on par défaut 5% de chance de coup critique

Créer ensuite les classes suivantes :


- Mage, un Mage est un Hero
- Un mage commence avec les stats suivantes :
 - 285 points de vie
 - 45 dégâts min et 48 dégâts max
 - 2 de défense



- Warrior, un Warrior est un Hero
- Un Warrior commence avec les stats suivantes :
- 375 points de vie
- 42 dégâts min et 45 dégâts max
- 3 de défense
 


- Rogue, un Rogue est un Hero
- Un Rogue commence avec les stats suivantes :
- 300 points de vie
- 40 dégâts min et 47 dégâts max
- 3 de défense



Par la suite... Ajouter une fonction de levelUp à la classe Héros
Tous les héros :
- Monte leur niveau de 1
- Gagne 0.25% de coup critique


Et de modifier les caractéristiques de nos héros en fonction de leur classe

Un Mage :
- Gagne 25 points de vie par montée de niveau
- Gagne 4 points de dégâts
- Gagne 1 point de défense si son niveau un multiple de 5



Un Warrior :
- Gagne 47 points de vie par montée de niveau
- Gagne 2 points de dégâts
- Gagne 1 point de défense si son niveau un multiple de 3



Un Rogue :
- Gagne 33 points de vie par montée de niveau
- Gagne 4 points de dégâts
- Gagne 1 point de défense si son niveau un multiple de 4
- Le Rogue va gagner 0.33% de crit par niveau, au lieu de 0.25%



### 18. Suite TP héritage


Ajouter une fonction "attack" dans la classe Hero, elle prend en paramètre un autre Hero


Le but de cette méthode est que le héro courant attaque l'autre héro, pour cela :
- Déterminer les dégâts du héro : un random entre ses dégâts min et max
- Déterminer si le coup est critique, un coup critique inflige 50% en plus des dégâts normaux
- Puis le coup est réduit par la défense du héro attaqué, la défense un pourcentage
- Puis le héro attaqué perd ses points de vie


Enfin : 
- Simuler un combat entre deux héros, dont le premier à attaquer est déterminé aléatoirement

### 19. Pour aller plus loin...

Simuler une GurubashiArena (peut-être faire une classe ?)

Le but est de générer aléatoirement 3 héros (peut importe lesquels, et le nom aussi)

Ils vont tous taper quelqu'un d'autres (sauf eux) de manière aléatoire, chacun à leur tour

Le combat continue, jusqu'à ce qu'il n'en reste qu'un





