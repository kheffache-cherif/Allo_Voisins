
mongoimport --db SOLIDARITES --collection Membres --file Membres.json --jsonArray --drop

mongoimport --db SOLIDARITES --collection Biens --file Biens.json --jsonArray --drop

mongoimport --db SOLIDARITES --collection Locations --file Locations.json --jsonArray --drop

mongoimport --db SOLIDARITES --collection DescriptifBiens --file DescriptifBiens.json --jsonArray --drop


