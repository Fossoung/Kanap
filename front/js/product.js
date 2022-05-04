//queryString_url_id contient window.location.search
const queryString_url_id = window.location.search;

// demande a URLSearchParams le parametre queryString_url_id
const utlSearchParams = new URLSearchParams(queryString_url_id);

// variable ID qui recupere avec la methode get le ID
const id = utlSearchParams.get("id");



// Variable qui pointe sur les éléments DOM de Produit.html
const resultImg = document.querySelector(".item__img");
const resultTitre = document.getElementById("title");
const resultPrix = document.getElementById("price");
const resultDesc = document.getElementById("description");
const resultColor = document.getElementById("colors");
const resultQuantity = document.getElementById("quantity");
const cart = document.getElementById("cart__items");

// Verification choix d'une couleur
const tabListeEnfant = document.querySelector("#colors");

// console.log(suprimmer);

//--------------------
const resultPanier = document.getElementById("addToCart");
//------------FIN-----

// console.log(resultQuantity);

//

// console.log(resultTitre);

// Création de la fonction getJokeIn en mode asynchrone
function displayProduct() {
  // Initialisation await de l'asynchrone qui permet de charger en parallèle les informations
  // fetch initiale l'API http avec les IDs des fiches produit.
  fetch(`http://localhost:3000/api/products/${id}`)
  .then((res) => res.json())
  // .then((data) => console.log(data[1]._id))
  
  .then((lot) => {
    // console.log(lot);
    
    // console.log(lot._id);

  // Protection
  if (lot._id == null) {
     document.location.href="index.html"; 
  }



    // Variable qui est égale a lot.colors
    
    let modeCouleur = lot.colors;
    let modePrix = lot.price;
    
    // Boucle For pour lister toutes les couleurs
    
    for (const valeur of modeCouleur) {
      // console.log(valeur);
      
      // Appel a resultColor dans un innerHTML pour lui injecter du code.
      // += Rajoute contenue dans un élément. ` `
      //
      resultColor.innerHTML += `<option value="${valeur}">${valeur}</option>`;
    }
    
    // Injecte dans resultTitre du texte et appelle la promesse lot qui est identifié sur les élément de L'API
    resultTitre.textContent = lot.name;
    resultPrix.textContent = lot.price;
    resultDesc.textContent = lot.description;
    resultImg.innerHTML = `<img src='${lot.imageUrl}' alt="${lot.altTxt}">`;
    
    resultQuantity.value = 1;
    
    //--------------------------------------------------
    
    resultPanier.addEventListener("click", () => {
      const couleurs = document.querySelector("#colors").value;
      const quanty = parseInt(document.querySelector("#quantity").value) ;
      
      console.log(quanty);
      
      let optionsProduit = {
        colors: couleurs,
        id: id,
        quantity: quanty,
      };
      
       
        
        
        
        // ---------------------------------------Le local Storage ---------------------------
        
        let produitsLocalStorage = JSON.parse(localStorage.getItem("produits")) ?? [];
        
        const index = produitsLocalStorage.findIndex(product => product.id === id && product.colors === couleurs);
        
        
        if (index !== -1) {
          produitsLocalStorage[index].quantity += quanty;
          localStorage.setItem(
            "produits",
            JSON.stringify(produitsLocalStorage)
          );
          popupPanier();
          
        } else {
           if (tabListeEnfant.value >= 1 || tabListeEnfant.value <= 0) {
            window.alert("atention, choisir une couleur");
          }
          else if (produitsLocalStorage) {
            produitLocal(optionsProduit, produitsLocalStorage);
            popupPanier();
          } else {
            produitsLocalStorage = [];
            produitLocal(optionsProduit, produitsLocalStorage);
            popupPanier();
          }

        }

        
      });
    });
  }
    
  function produitLocal(optionsProduit, produitsLocalStorage) {
    produitsLocalStorage.push(optionsProduit);
    localStorage.setItem(
      "produits",
      JSON.stringify(produitsLocalStorage)
    );
  }


  displayProduct();
  
// ------------------ Alerte ---------------------

//Alerte le panier a été ajouter.
const popupPanier = () => {
  if (window.confirm(`Votre Produit a été ajouter au Panier`)) {
    window.location.href = "cart.html";
  } else {
    window.location.href = "index.html";
  }
};

//--------------------FIN ------------------------