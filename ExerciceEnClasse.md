# Exercice

Vous devez modifier les tests de votre module courses.js pour utiliser les mocks. Le contenu de la base de données ne devrait plus affecter le résultat des tests.

## Ajouts de tests d'intégration manuels

Vous devrez avoir 3 routes:

- GET "/"
  - Qui retourne en JSON le contenu de la base de données
- POST "/courses/add"
  - Qui prend un body JSON comprenant juste un membre nom(attention à vos headers!) et retourne 200 OK
- DELETE "/courses/remove/:courseId"
  - Qui prend seulement le courseId passé dans l'URL et qui retourne soit 200 OK ou un 400 BAD REQUEST

Ensuite, faites-vous une collection Postman et ajoutez-y ces trois routes. Cette collection fait office de tests d'intégration manuels et d'interface utilisateur, en attendant d'avoir un _frontend_.
