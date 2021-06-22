
## Installation

First you need to install the packages

```run the project
npm install
```
then  run the project

```
npm start
```

## Docker

 les commandes principales pour utiliser une stack Docker Compose;

pour  dÈmarrer l'ensemble des conteneurs en arriËre-plan
```
docker-compose up -d
```

pour   voir le status de l'ensemble de votre stack
```
docker-compose ps 
```
pour afficher les logs de votre stack:
```
docker-compose logs -f --tail 5 
```

pour arrÍter l'ensemble des services d'une stack :
```
docker-compose stop
```
pour dÈtruire l'ensemble des ressources d'une stack:
```
docker-compose down 
```

pour valider la syntaxe de votre fichier docker-compose.yml:

```
docker-compose config
```


```