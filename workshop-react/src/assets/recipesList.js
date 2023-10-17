let recipesList = [
    {
        id: 1,
        nameRecipe: "Gratin Dauphinois",
        type: "dish",
        descriptionRecipe: "Plat typique de la région Dauphinoise à base de pomme de terre et de lait",
        cookingTime: 120,
        imgSrc: "/src/assets/gratin.jpeg",
        ingredients: [
            "750 ml (3 tasses) de lait",
            "250 ml (1 tasse) de crème 35 %",
            "1 oignon, pelé et coupé en deux",
            "3 gousses d'ail, pelées et coupées en deux",
            "2 kg de pommes de terre blanches, pelées et tranchées à la mandoline à environ 3 mm d'épaisseur",
            "2,5 ml (1/2 c. à thé) de sel",
            "100 g (1 tasse) de fromage Gruyère de Grotte, râpé"
        ],
        recipeText: "Placer la grille dans le bas du four. Préchauffer le four à 200 °C. </br>Dans une grande casserole, porter le lait, la crème, l'oignon et l'ail à ébullition. Laisser mijoter doucement 5 minutes. Retirer l'oignon et l'ail. Ajouter les pommes de terre et le sel. Porter à ébullition et laisser mijoter très doucement 15 minutes en remuant délicatement à plusieurs reprises. Incorporer le fromage. Poivrer. Répartir dans un plat à gratin carré de 23 cm ou rectangulaire de 28 x 20 cm. </br>Cuire au four 50 minutes ou jusqu'à ce que les pommes de terres soient tendres et bien dorées. Laisser reposer 15 minutes avant de servir. Le gratin se découpera plus facilement. </br>Servir et poivrer généreusement. Accompagner d'une salade verte bien acidulée et d'une viande rôtie (dinde, rôti de bœuf, de veau ou de porc).",
        recipeSource: "https: //www.ricardocuisine.com/recettes/4915-gratin-dauphinois-le-meilleur"
    },
    {
        id: 2,
        nameRecipe: "Mousse au chocolat",
        type: "dessert",
        descriptionRecipe: "Une fine mousse chocolatée, grand classique des tables françaises",
        cookingTime: 80,
        imgSrc: "/src/assets/mousseChocolat.jpg",
        ingredients: [
            "200g de chocolat noir",
            "6 oeufs",
            "sel"
        ],
        recipeText: "Cassez le chocolat en morceaux et faites-le fondre au micro-onde ou au bain-marie en remuant jusqu'à obtenir une pâte lisse. Puis, Versez-la dans un saladier. </br>Séparez les blancs des jaunes d'œufs, incorporez les jaunes un par un dans le chocolat fondu et mélangez bien entre chaque œuf. </br>Montez les blancs en neige. Quand ils sont bien fermes, mélangez très délicatement avec la préparation au chocolat en soulevant la masse pour ne pas casser les blancs. </br>Versez la mousse dans un saladier. Placez au réfrigérateur 3 heures minimum.",
        recipeSource: "https: //www.cuisineactuelle.fr/recettes/authentique-et-delicieuse-mousse-au-chocolat-138214"
    },
    {
        id: 3,
        nameRecipe: "Mousse de Morille",
        type: "dessert",
        descriptionRecipe: "Une fine mousse chocolatée, grand classique des tables françaises",
        cookingTime: 80,
        imgSrc: "/src/assets/entree2.jpeg",
        ingredients: [
            "200g de chocolat noir",
            "6 oeufs",
            "sel"
        ],
        recipeText: "Cassez le chocolat en morceaux et faites-le fondre au micro-onde ou au bain-marie en remuant jusqu'à obtenir une pâte lisse. Puis, Versez-la dans un saladier. </br>Séparez les blancs des jaunes d'œufs, incorporez les jaunes un par un dans le chocolat fondu et mélangez bien entre chaque œuf. </br>Montez les blancs en neige. Quand ils sont bien fermes, mélangez très délicatement avec la préparation au chocolat en soulevant la masse pour ne pas casser les blancs. </br>Versez la mousse dans un saladier. Placez au réfrigérateur 3 heures minimum.",
        recipeSource: "https: //www.cuisineactuelle.fr/recettes/authentique-et-delicieuse-mousse-au-chocolat-138214"
    },
    {
        id: 4,
        nameRecipe: "panga aux fruit rouges",
        type: "dessert",
        descriptionRecipe: "Une fine mousse chocolatée, grand classique des tables françaises",
        cookingTime: 80,
        imgSrc: "/src/assets/entree3.jpeg",
        ingredients: [
            "200g de chocolat noir",
            "6 oeufs",
            "sel"
        ],
        recipeText: "Cassez le chocolat en morceaux et faites-le fondre au micro-onde ou au bain-marie en remuant jusqu'à obtenir une pâte lisse. Puis, Versez-la dans un saladier. </br>Séparez les blancs des jaunes d'œufs, incorporez les jaunes un par un dans le chocolat fondu et mélangez bien entre chaque œuf. </br>Montez les blancs en neige. Quand ils sont bien fermes, mélangez très délicatement avec la préparation au chocolat en soulevant la masse pour ne pas casser les blancs. </br>Versez la mousse dans un saladier. Placez au réfrigérateur 3 heures minimum.",
        recipeSource: "https: //www.cuisineactuelle.fr/recettes/authentique-et-delicieuse-mousse-au-chocolat-138214"
    },
    {
        id: 5,
        nameRecipe: "Crabe d'été",
        type: "dessert",
        descriptionRecipe: "Une fine mousse chocolatée, grand classique des tables françaises",
        cookingTime: 80,
        imgSrc: "/src/assets/entree4.jpeg",
        ingredients: [
            "200g de chocolat noir",
            "6 oeufs",
            "sel"
        ],
        recipeText: "Cassez le chocolat en morceaux et faites-le fondre au micro-onde ou au bain-marie en remuant jusqu'à obtenir une pâte lisse. Puis, Versez-la dans un saladier. </br>Séparez les blancs des jaunes d'œufs, incorporez les jaunes un par un dans le chocolat fondu et mélangez bien entre chaque œuf. </br>Montez les blancs en neige. Quand ils sont bien fermes, mélangez très délicatement avec la préparation au chocolat en soulevant la masse pour ne pas casser les blancs. </br>Versez la mousse dans un saladier. Placez au réfrigérateur 3 heures minimum.",
        recipeSource: "https: //www.cuisineactuelle.fr/recettes/authentique-et-delicieuse-mousse-au-chocolat-138214"
    }
]

export default recipesList;