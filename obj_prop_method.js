var test = {
             un : "Ce Monsieur",
             qui: "est",
             affiche : function(nom,prenom){
              this.nom = nom;
              this.prenom = prenom;
              console.log(this.qui + " " + this.prenom);
             }
           }
console.log(test.un + " " + test.qui+ " ");test.affiche("Patrick", "Motsebo");
