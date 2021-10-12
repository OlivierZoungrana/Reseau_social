# Mise en place d'un réseau social d'entreprise

## Table de matières 
1. lancer le client
2. lancer l'API

### Pour commencer

#### Pré-réquis

1. Création d'une base de données relationnelle sur mysql nommé ' BD_rezo_GROUPOMANIA'


#### Installation

1. Migration de la Base de données
 
 ```
npm install sequelize
```
####installer le module mysql2

````
npm install mysql2
````
####effectuer la migration 

```
sequelize db:migrate
```

2. lancer le client avec yarn 

```
yarn install 
```

```
yarn serve 
```

3. lancer le serveur 


```
nodemon server
```







##### création d'une base de données 

créer une base de données avec deux tables. USERS et MESSAGES

avec les champs suivant: 

    USERS:
        1.userId
        2.username,
        3.email
        4bio

    MESSAGES:
        1.id
        2.title,
        3.content, 
        4.attachment,


#### Démarrage du serveur node 

```
 http://localhost:8080/ 
```

