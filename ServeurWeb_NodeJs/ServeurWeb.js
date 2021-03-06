const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ exteded: true }));
// const cors = require("cors");

/*------------------------------GESTION DES CORS----------------------------*/
/*--------------c'est des autorisations pour le transfert de données client/serveur */

// app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

/*Module utilisés par Mongo db */

const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectId;
const url = "mongodb://localhost:27017";

var mongodb = require("mongodb");

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  let db = client.db("SOLIDARITES"); // declaration de la bd

  // Liste des produits
  app.get("/biens", (req, res) => {
    console.log("/biens");
    try {
      db.collection("Biens")
        .find()
        .toArray((err, documents) => {
          res.end(JSON.stringify(documents)); // revois le resultat.
        });
    } catch (e) {
      console.log("Erreur sur /biens : " + e);
      res.end(JSON.stringify([]));
    }
  });

  // ajout d'élements à la base de données

  app.post("/bien", (req, res) => {
    console.log("route:/bien/ajout avec" + JSON.stringify(req.body));
    try {
      var idNewBien;

      db.collection("Biens").insertOne(
        req.body,
        function (err, doccumentIncerted) {
          // fonction calback
          //  idNewBien = doccumentIncerted._id; //recuperer  identifiant
          console.log(doccumentIncerted._id);
        }
      );
      db.collection("DescriptifBiens").insertOne({
        idBien: req.body._id,
        motClef: req.body.motClef,
      });

      console.log(req.body);
      res.end(
        JSON.stringify({ message: "ajout de bien effectué avec succès" })
      );
    } catch (e) {
      res.end(
        JSON.stringify({ message: "probleme sur l'ajout du bien :" + e })
      );
    }
  });

  // Liste des membres
  app.get("/membres", (req, res) => {
    console.log("/Membres");
    try {
      db.collection("Membres")
        .find()
        .toArray((err, documents) => {
          res.end(JSON.stringify(documents)); // revois le resultat.
        });
    } catch (e) {
      console.log("Erreur sur /Membres : " + e);
      res.end(JSON.stringify([]));
    }
  });

  // authentification:-
  app.post("/membres/connexion", (req, res) => {
    // information sur le lien de connexion "membre"
    console.log(
      " Tentative d'authentification pour le membre " + JSON.stringify(req.body)
    );
    try {
      //() chercher au niveau de db et renvoyer un doccument.json
      db.collection("Membres")
        .find(req.body)
        .toArray((err, documents) => {
          if (documents.length == 1) {
            res.end(
              JSON.stringify({
                resultat: 1,
                message: "authentification réussie",
              })
            ); // si membre exixtant
          } else {
            res.end(
              JSON.stringify({ resultat: 0, message: "Mot de passe incorrect" })
            ); //
          }
        });
    } catch (e) {
      console.log("Erreur sur /Membres : " + e);
      res.end(JSON.stringify([]));
    }
  });

  // connexion d'utilisateurs
  app.post("/Inscription", (req, res) => {
    // reception de donnes service post angular vers node
    console.log(" utilisateur ajouter");

    console.log(req.body.nom); // body c'est le corps de la requette qui contient les donnees renvoyer de angular inscrip.ts
    try {
      db.collection("Membres").insertOne({
        nom: req.body.nom, // insert dans mongo les donnes recuperer avec la requette
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,
        ville: req.body.password,
        adresse: req.body.password,
        telephone: req.body.password,
      });

      console.log("Nouveau utilisateur ajouter avec succes");
      res.end("Ajouter"); // le message revoyer pas les donnees
    } catch (e) {
      res.end(JSON.stringify([]));
    }
  });
  /*

 // Liste des categories

 app.get("/categories", (req,res) => {
	console.log("/categories");
	categories = [];  //declaration tableau vide 
	try{
		db.collection("produits").find().toArray((err, documents) => { 
			for(let doccument of documents){
				if (!categories.includes (doccument.type)){
					categories.push(doccument.type);
				}

			}


			res.end(JSON.stringify(categories));  // revois le resultat.
		});
	} catch(e)  // e excception en cas d'erreur  
		
	{
		console.log("Erreur sur /categories : " + e);  // le e																
		res.end(JSON.stringify([]));
	}
});

*/
  /* service d'emprunt*/

  app.post("/ajoutEmprunt", (req, res) => {
    // reception de donnes service post angular vers node
    console.log(" Emprunt creer");

    console.log(req.body); // body c'est le corps de la requette qui contient les donnees renvoyer de angular inscrip.ts
    try {
      db.collection("Locations").insertOne(req.body);
      console.log(" Emprunt Enregistrer ");
      res.end("Ajouter"); // le message revoyer pas les donnees
    } catch (e) {
      console.log();
      res.end(JSON.stringify([]));
    }
  });

  app.get("/getEmprunt/:email", (req, res) => {
    // methode qui prends comme parametre un email dans sa root
    let email = req.params.email; // recupération du parametre email de la root
    console.log("/emprunt/:email " + email); // le + pour afficher le lien avec email
    try {
      db.collection("Locations")
        .find({ emailUtilisateur: email })
        .toArray((err, documents) => {
          // je selectione tout les produits  associers au mail
          res.end(JSON.stringify(documents)); //  section  doccum et le resultat de la selection envoyer vers angular
        });
    } catch (e) {
      console.log("Erreur sur Emprunt : " + e);
      res.end(JSON.stringify([])); // renvois vide en cas de probls
    }
  });
});

/*Service Suppression*/
app.delete("/supprimerEmprunt/:id", (req, res) => {
  console.log(" Emprunt Supprimer");
  let id = req.params.id;

  console.log(id);
  try {
    db.collection("Locations").deleteOne(
      { _id: new mongodb.ObjectID(id) },

      (err, result) => {
        if (err) console.log("erreur" + err);
        console.log(req.body);
      }
    );
    console.log(" Emprunt Enregistrer ");
    res.end("Ajouter"); // le message revoyer pas les donnees
  } catch (e) {
    console.log();
    res.end(JSON.stringify([]));
  }
});

console.log("serveur executer");

app.listen(8888);
