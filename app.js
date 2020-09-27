/*
creation d'un input pour pouvoir changer la valeur de benefices
creation d'un input pour pouvoir changer la valeur de pertes
creation d'un input et bouton pour ajouter un item à au tableau product
création d'une propriété calculée qui calcule le sold de l'entreprise (benefice-perte)
creation d'un watcher sur le nombre d'élément contenu dans le tableau product
afficher toutes les données sur la page
*/

var vm = new Vue({
  el: "#app",
  data: {
    sold: { benefices: 1537.22, pertes: 486.63 },
    product: ["product1", "product2", "product3", "product4"],
  },
  computed: {},
  watch: {},
});
