# Mise en place d'un réseau social d'entreprise

## Table de matières 
1. lancer le client
2. lancer l'API

### Pour commencer

#### Pré-réquis

1. Création d'une base de données relationnelle sur mysql nommé ' database_development_retro'
2. mettre à jour les parmaètre du server selon votre configuration dans le fichier config.json du server


#### Installation des dépendances

depuis le repertoire  server

````
npm install
```



#### Effectuer la migration de la base de données 

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
``


