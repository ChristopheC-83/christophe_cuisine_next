/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Header from "@/components/header/Header";
import { useState, useRef, useEffect } from "react";

export default function PriceArray() {
  const produits = [
    { id: 1, nom: "Eléments bas", prix: 35, quantite: useRef(0) },
    { id: 2, nom: "Eléments hauts", prix: 35, quantite: useRef(0) },
    { id: 3, nom: "Colonnes", prix: 40, quantite: useRef(0) },
    { id: 4, nom: "Joues, fileurs...", prix: 10, quantite: useRef(0) },
    { id: 5, nom: "Plans de travail", prix: 40, quantite: useRef(0) },
    { id: 6, nom: "Crédence simple (+1 coupe)", prix: 15, quantite: useRef(0) },
    {
      id: 7,
      nom: "Crédence (coupe + 1 ou 2 prises)",
      prix: 40,
      quantite: useRef(0),
    },
    { id: 8, nom: "Jambage / Accessoire", prix: 35, quantite: useRef(0) },
    { id: 9, nom: "Evier (perçage, robinet)", prix: 80, quantite: useRef(0) },
    { id: 10, nom: "Prise encastrée dans PDT", prix: 30, quantite: useRef(0) },
    { id: 11, nom: "Kit Spot (de 1 à 3)", prix: 30, quantite: useRef(0) },
    { id: 12, nom: "Plaque de cuisson", prix: 35, quantite: useRef(0) },
    {
      id: 13,
      nom: "Four ou Micro-Onde encastrable",
      prix: 25,
      quantite: useRef(0),
    },
    {
      id: 14,
      nom: "Hotte pyramide / Casquette",
      prix: 40,
      quantite: useRef(0),
    },
    { id: 15, nom: "Hotte ilôt / plaque-hotte", prix: 80, quantite: useRef(0) },
    { id: 16, nom: "Frigo/congel encastré", prix: 50, quantite: useRef(0) },
    {
      id: 17,
      nom: "Frigo US + branchement eau",
      prix: 50,
      quantite: useRef(0),
    },
    {
      id: 18,
      nom: "Lave-vaisselle/linge intégrable",
      prix: 40,
      quantite: useRef(0),
    },
    { id: 19, nom: "LV ou LL pose libre", prix: 20, quantite: useRef(0) },
    { id: 20, nom: "Cuisinière pose livre", prix: 30, quantite: useRef(0) },
    {
      id: 21,
      nom: "Montage caisson en Kit + porte",
      prix: 20,
      quantite: useRef(0),
    },
    { id: 22, nom: "Assemblage Tiroir", prix: 5, quantite: useRef(0) },
    { id: 23, nom: "Métré", prix: 70, quantite: useRef(0) },
    { id: 24, nom: "Mise à la décheterie", prix: 80, quantite: useRef(0) },
    // Ajoute ici les autres produits jusqu'à 30 éléments
  ];

  const [total, setTotal] = useState(0);

  const calculerTotal = () => {
    const newTotal = produits.reduce((acc, produit) => {
      return acc + produit.quantite.current * produit.prix;
    }, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    produits.forEach((produit) => {
      const quantiteSauvegardee = localStorage.getItem(produit.id);
      if (quantiteSauvegardee !== null) {
        produit.quantite.current = parseInt(quantiteSauvegardee, 10);
      }
    });
    calculerTotal();
  }, []);

  const handleChangeQuantite = (id, e) => {
    const produit = produits.find((prod) => prod.id === id);
    const nouvelleQuantite = parseInt(e.target.value) || 0;
    produit.quantite.current = nouvelleQuantite;
    localStorage.setItem(id, nouvelleQuantite);
    calculerTotal();
  };

  const clearLocalStorage = () => {
    produits.forEach((produit) => {
      produit.quantite.current = 0;
      localStorage.removeItem(produit.id);
    });
    calculerTotal();
  };

  return (
    <div className={`pt-40`}>
      <Header />
      <div className="container ">
        <h1 className={`entete-title-h1 text-center font-bold my-5`}>
          Estimatif de prix
        </h1>
        <form
          className={`flex max-md:flex-col justify-evenly items-center flex-wrap mx-auto gap-y-1 max-w-[750px]`}
        >
          {produits.map((produit) => (
            <div
              key={produit.id}
              className={`w-full md:w-1/2 max-w-96 border border-gray-300 p-1 flex flex-no-wrap rounded-lg shadow-md gap-1`}
            >
              <label className={`w-[80%]`}>{produit.nom}</label>
              <p className={`w-[10%] border-x-gray-300`}>{produit.prix}€</p>
              <input
                type="number"
                value={produit.quantite.current}
                onChange={(e) => handleChangeQuantite(produit.id, e)}
                min="0"
                className={`w-[10%] text-center `}
              />
            </div>
          ))}
        </form>

        <div className="w-full midFlex ">
          <button
            onClick={clearLocalStorage}
            className={`w-full max-w-[750px] border-2 bg-clip text-white border-gray-300 rounded-lg shadow-xl mx-auto my-4 text-center py-4 font-bold hover:opacity-85 duration-300`}
          >
            Supprimer les données
          </button>
        </div>

        <div className="w-full max-w-[750px] border-2 border-gray-300 rounded-lg shadow-xl mx-auto my-4 text-center bg-orange-600/10">
          <p className={`h3 p-2`}>Total : {total}€ Hors Taxe</p>
          <p className="my-3 flexMid h4 max-xs:flex-col">
            <span>Si TVA 10%, montant TTC : {(total * 1.1).toFixed(2)}€</span>{" "}
            <span>dont {total * 0.1} € de TVA</span>
          </p>
          <p className="my-3 flexMid h4 max-xs:flex-col">
            <span>Si TVA 20%, montant TTC : {(total * 1.2).toFixed(2)}€</span>{" "}
            <span>dont {total * 0.2} € de TVA</span>
          </p>
        </div>
        <div className="w-full flex flex-col max-w-[750px] border-2 border-gray-300 rounded-lg shadow-xl mx-auto my-4 py-3 px-1 gap-y-3">
          <p>
            Ce tarif est bien un tarif estimatif et non un devis ! <br />
            En fin de prestation, nous comptons ensemble ce qui a été réellement
            fait !
          </p>
          <p>
            L'installation s'entend de la pose des meubles, accessoires,
            sanitaires et électroménagers définis au préalable. Le démontage de
            l'ancienne cuisine et l'enlèvement des cartons, emballages (...)
            sont laissés à la charge du client. Sauf s'il en demande la
            prestation (tarif dans le tableau ci dessus).
          </p>
          <p>
            Il est rappelé que les murs doivent être propres, sains, droits et
            angles à 90°. Le chantier doit être pourvu en eau, gaz et
            électricité.
          </p>
          <p>
            Les branchements des appareils électroménagers et/ou des sanitaires
            posés par les soins de votre artisan s'entendent en raccordement
            direct sur les évacuations et les alimentations existantes,
            lesquelles devront être conformes aux normes en vigueur, et
            positionnées conformément aux plans.
          </p>
          <p>
            les sav ou réinterventions éventuelles qui seraient du fait du
            client (préparation du chantier) ou du fournisseur seront à la
            charge exclusive du client.
          </p>
          <p>
            A défaut, ou en cas de non-conformité, votre poseur sera en droit de
            refuser l'intervention. Dans cette hypothèse, une nouvelle date
            d'intervention sera fixée avec l'installateur sans que le client
            puisse se prévaloir d'un quelconque préjudice.
          </p>
          <p>
            La réalisation des travaux supplémentaires (toutes transformations
            de plomberie, d'électricité (...), toutes modifications non prévues
            à l'origine et/ou toutes prestations supplémentaires n'est pas
            incluse dans le prix de la pose. Un devis de travaux annexes peut
            être fait sur simple demande.
          </p>
          <p>La prestation d'installation est garantie 2 ans</p>
          <p>
            Le client reconnaît avoir pris connaissance et accepte les
            conditions relatives à l'installation de la cuisine susvisée
          </p>
        </div>
      </div>
    </div>
  );
}
