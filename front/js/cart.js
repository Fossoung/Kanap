//////////////////////////////////////////////////////////////////

function displayProductLocal() {
    // Initialisation await de l'asynchrone qui permet de charger en parallèle les informations
    // fetch initiale l'API http avec les IDs des fiches produit.
    fetch(`http://localhost:3000/api/products/`)
      .then((res) => res.json())
  
      .then((lot) => {
  
        
    //-------------------- include boucle displayProductLocal---------------//
  
      
  
        for (let v = 0; v < lot.length; v++) {
          let prixdeuxss = lot[v]._id;
          let prix = lot[v].imageUrl;
          // let prixImage = lot[v].;
  
          console.log(prix);
          
  
        //--------------------------------FIN --------------------------------//
        
        
        
        let produitLocalStorage = JSON.parse(localStorage.getItem("produits"));
        
        // console.log(produitLocalStorage);
        
        // ------------- Affichage du produit panier
        
        // Selection de la classe a injecter
        const positionElement = document.querySelector("#cart__items");
        
        let produitPanier = [];
        
        for (z = 0; z < produitLocalStorage.length; z++) {
          // console.log(produitLocalStorage.length);
          
          produitPanier += `
          
          <article class="cart__item" data-id="${produitLocalStorage[z].id}" data-color="{product-color}">
          
          <div class="cart__item__img">
          <img src="${lot[z].imageUrl}" alt="${lot[z].altTxt}">
          </div>
          
          <div class="cart__item__content">
          <div class="cart__item__content__description">
          <h2>${lot[z].name}</h2>
          <p>${produitLocalStorage[z].colors}</p>
          <p>${lot[z].price} €</p>
          </div>
          
          <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produitLocalStorage[z].quantity}">
          </div>
          
          <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
          </div>
          </div>
          </div>
          </article>
          
          `;
        }
        
        if (z == produitLocalStorage.length) {
          positionElement.innerHTML = produitPanier;
        }
  
  
  
              //-----------------------Supression produit-----------------------//
        
              const suprimmer = document.querySelectorAll(".deleteItem");
              // console.log(suprimmer);
              
              for (let c = 0; c < suprimmer.length; c++) {
                suprimmer[c].addEventListener("click", (event) => {
                  event.preventDefault();
                  
                  // Selection id du produit qui vas etre suprimmer
                  let idSuprimmer = produitLocalStorage[c].colors + produitLocalStorage[c].id;
                  // console.log(idSuprimmer);
                  
                  //filter
            produitLocalStorage = produitLocalStorage.filter(
              (el) => el.colors + el.id !== idSuprimmer
            );
        
            //envoie dans le localStorage
            localStorage.setItem("produits", JSON.stringify(produitLocalStorage));
        
            location.reload();
          });
        }
  
        //------------------------------FIN-------------------------------------
        
        
      }
    }
      );
      }
      
      displayProductLocal();
  
     
  
  
  //--------------------REGEX------------------------//
  
  const formulairePrenom = document.querySelector("#firstName");
  formulairePrenom.setAttribute("pattern", "[A-Za-zéèêïç -]{2,30}");
  formulairePrenom.setAttribute("title", "Incorrect, peut contenir des lettres et: é è ê ï ç - espace"
  );
  
  const formulaireNom = document.querySelector("#lastName");
  formulaireNom.setAttribute("pattern", "[A-Za-zéèêïç -]{2,30}");
  formulaireNom.setAttribute("title", "Incorrect, peut contenir des lettres et: é è ê ï ç - espace"
  );
  
  const formulaireAdresse = document.querySelector("#address");
  formulaireAdresse.setAttribute("pattern", "[A-Za-z-0-9éèêïç 'à°,;:-]{2,60}");
  formulaireAdresse.setAttribute("title", "Incorrect, peut contenir des lettres, chiffres et: é è ê ï ç ' à ° , ; : - espace"
  );
  
  const formulaireVille = document.querySelector("#city");
  formulaireVille.setAttribute("pattern", "[A-Za-zéèêïç -]{2,30}");
  formulaireVille.setAttribute("title", "Incorrect, peut contenir des lettres et: é è ê ï ç - espace"
  );
  
  const formulaireEmail = document.querySelector("#email");
  formulaireEmail.setAttribute("pattern", "[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]");
  formulaireEmail.setAttribute("title", "Incorrect, peut contenir des lettres, chiffres et: - @ _ ."
  );
  
  //----------------FIN ---------------------------------------//
  
  //-------------------- Prix Total ---------------//
  
  // let prixTotalCalcul = [];
  
  // for (let m = 0; m < produitLocalStorage.length; m++) {
  //   let prixProduitsDansLePanier = produitLocalStorage[m].price;
  //   // console.log(produitLocalStorage[m]);
    
  //   // mettre prix du panier dans "prixTotalCalcul"
  //   prixTotalCalcul.push(prixProduitsDansLePanier);
    
  //   // console.log(prixTotalCalcul);
    
  //   //additionner les prix dans le tableau de la variable prixTotalCalcul
    
  //   let reducer = (accumulator, currentValue) => accumulator + currentValue;
  //   let prixTotal = prixTotalCalcul.reduce(reducer, 0);
    
  //   let htmlPrix = document.querySelector("#totalPrice");
  //   htmlPrix.innerHTML = `${prixTotal}`;
    
  // }
    
    //---------------------FIN-----------------------------//
  
    // let lala = document.querySelector("#address");
    // console.log(lala);
  
  
  
    //-------------------------- Quantiter Total ------------------------//
  
    // const quantiterTotalCalcul = [];
  
    // console.log(quantiterTotalCalcul);
  
    // for (let n = 0; produitLocalStorage.length; n++) {
    //   const quantiterProduitsDansLePanier = produitLocalStorage[n].quantity;
    //   // console.log(quantiterProduitsDansLePanier);
  
    //   // mettre prix du panier dans "quantiterTotalCalcul"
    //   quantiterTotalCalcul.push(quantiterProduitsDansLePanier);
  
    //   // console.log(quantiterTotalCalcul);
  
    //   // //additionner les prix dans le tableau de la variable quantiterTotalCalcul
  
    //   const reducers = (accumulators, quantity) => accumulators + 1 * quantity;
    //   const quantiterTotal = quantiterTotalCalcul.reduce(reducers, 0);
  
    //   // console.log(quantiterTotal);
  
    //   const htmlQuantiter = document.querySelector("#totalQuantity");
    //   htmlQuantiter.innerHTML = `${quantiterTotal}`;
  
    //   // console.log(htmlQuantiter);
    // }
  
  //-------------------------FIN---------------------------------------//
  