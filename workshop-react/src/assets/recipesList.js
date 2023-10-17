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
    },
    {
        id: 6,
        nameRecipe: "Salade caprese aux nectarines rôties",
        type: "starter",
        descriptionRecipe: "Un mélange entre le cru des tomates, le cuit des nectarines grillées, et le fondant de la mozzarella.",
        cookingTime: 18,
        imgSrc: "/src/assets/saladeCapreseNectarines.jpg",
        ingredients: [
            "2 mozzarelle di bufala",
            "1,2 kg de tomates anciennes de différentes couleurs et tailles",
            "3 nectarines",
            "6 feuilles de basilic",
            "huile d'olive"
        ],
        recipeText: "Faites égoutter les mozzarelle. Pendant ce temps, rincez les tomates, puis coupez-les en quartiers et/ou en morceaux. Lavez le basilic. Disposez les tomates et le fromage sur un plat. Rincez les nectarines et coupez-les en quartiers. Huilez le barbecue ou la plancha, puis saisissez les nectarines quelques minutes de chaque côté. Ajoutez les nectarines grillées à la salade caprese. Salez, poivrez, parsemez de basilic, arrosez d’un filet d’huile d’olive, et servez immédiatement.",
        recipeSource: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Salade-caprese-aux-nectarines-roties-3934977"

    },
    {
        id: 7,
        nameRecipe: "Carpaccio de butternut, betterave et feta",
        type: "starter",
        descriptionRecipe: "Une belle entrée de saison associant butternut, betterave, feta, graines de courge et de grenade",
        cookingTime: 15,
        imgSrc: "/src/assets/carpaccioButternut.jpg",
        ingredients: [
            "1 butternut",
            "1 betterave chioggia",
            "1 bloc de feta",
            "graines de grenade",
            "huile d'olive",
            "jus de citron",
            "sel et poivre du moulin",
            "graines de courge"
        ],
        recipeText: "Épluchez et émincez finement, avec une mandoline, la butternut. Répétez l’opération avec la betterave. Répartissez joliment dans les assiettes. Réservez. Émiettez dessus des morceaux de feta, décorez avec des graines de grenade. Versez un filet d’huile d’olive, du jus de citron, salez et poivrez. Faites torréfier légèrement les graines de courge dans une poêle à sec et ajoutez sur la salade.",
        recipeSource: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Carpaccio-de-butternut-betterave-et-feta-3973964"
    },
    {
        id: 8,
        nameRecipe: "Salade aux figues, noix et mozzarella",
        type: "starter",
        descriptionRecipe: "Une salade colorée et fraîche",
        cookingTime: 10,
        imgSrc: "/src/assets/saladeFigues.jpg",
        ingredients: [
            "400 g de figues soit 8",
            "250 g de mozzarella",
            "100 g de roquette",
            "30 g de cerneaux de noix",
            "30 g d'huile d'olive soit 2 CàS",
        ],
        recipeText: "Laver et découper les figues en 4. Découper la mozzarella en petits dés. Dans un saladier, mélanger la salade, les figues, la mozzarella et les cerneaux de noix avec l'huile d'olive. Assaisonner et servir aussitôt.",
        recipeSource: "https://www.supertoinette.com/recette/4833/salade-aux-figues-noix-et-mozzarella.html?diaporama=262"
    },
    {
        id: 9,
        nameRecipe: "Poulet au coco et curry",
        type: "dish",
        descriptionRecipe: "Un plat en sauce très simple à réaliser pour faire voyager vos papilles.",
        cookingTime: 75,
        imgSrc: "/src/assets/pouletCocoCurry.jpg",
        ingredients: [
            "1 c.à.c de gingembre poudre ou frais râpé",
            "2 à 3 cuillères à soupe rases curry en poudre",
            "2 oignons jaunes",
            "4 escalopes de poulet (environ 120 g l'une)",
            "lait de coco (1 boîte soit environ 300 g)",
            "champignons de Paris (une petite boîte)"
        ],
        recipeText: "Faire dorer les oignons dans de l'huile d'olive à feu moyen, jusqu'à ce qu'ils soient transparents. Ajouter la moitié du curry, puis faire dorer les escalopes en remuant de temps en temps. Saler et poivrer. Baisser le feu, et ajouter le gimgembre, puis couvrir de lait de coco, ajouter le reste du curry, et les copeaux de coco, et les champignons si souhaité. Laisser mijoter environ 30 mn. Servir chaud accompagné de riz thaï.",
        recipeSource: "https://www.marmiton.org/recettes/recette_poulet-au-coco-et-curry_17803.aspx"
    },
    {
        id: 10,
        nameRecipe: "Pana cotta fraise",
        type: "dessert",
        descriptionRecipe: "Dessert frais et léger sans oeufs.",
        cookingTime: 20,
        imgSrc: "/src/assets/pannaCottaFraise.jpg",
        ingredients: [
            "2 feuilles de gélatine",
            "50g de sucre",
            "35cl de crème fraiche liquide",
            "1 gousse de vanille ou extrait de vanille",
            "coulis de fraise"
            
        ],
        recipeText: "Faire ramollir les feuilles de gélatine dans de l'eau froide. Mettre la crème, le sucre et la vanille dans une casserole et faire frémir. Dès le début de l'ébullition, retirer la casserole du feu et ajouter la gélatine égouttée. Bien remuer et verser dans des coupelles. Laisser refroidir puis placer quelques heures au réfrigérateur pour faire prendre. Ajouter du coulis de fraise, framboise ou autre fruit juste avant de servir.",
        recipeSource: "https://www.marmiton.org/recettes/recette_panna-cotta_17991.aspx"
    },
    {
        id: 11,
        nameRecipe: "Tarte aux framboises",
        type: "dessert",
        descriptionRecipe: "La fameuse tarte aux framboises facile et rapide à faire avec peu d'ingrédients.",
        cookingTime: 32,
        imgSrc: "/src/assets/tarteFramboises.jpg",
        ingredients: [
            "1 pâte sablée",
            "1 barquette de framboises",
            "4 oeufs",
            "2 cuillères à soupe de maïzena",
            "5cl de lait",
            "40g de cassonade"
        ],
        recipeText: "Etalez la pâte sablée sur le plat et faites cuire 12 minutes à 180°C. Fouettez les œufs battus, la maïzena, le lait et la cassonade. Versez sur la pâte cuite. Disposez enfin les framboises et décorez avec quelques brins de menthe.",
        recipeSource: "https://www.demotivateur.fr/food/15-desserts-rapides-a-improviser-quand-vous-voulez-32641"
    },
    {
        id: 12,
        nameRecipe: "Eton Mess aux framboises",
        type: "dessert",
        descriptionRecipe: "A la fois frais et léger, l'Eton Mess est un dessert britannique très connu à base de fraises ou de framboises, agrémenté de meringues et de mascarpone.",
        cookingTime: 30,
        imgSrc: "/src/assets/etonMessFramboises.jpg",
        ingredients: [
            "500 g de framboises",
            "50 g de meringues",
            "50 g de mascarpone",
            "20 cl de crème liquide entière",
            "3 cuillères à soupe de sucre glace"
        ],
        recipeText: "Faire décongeler à l’air ambiant les framboises si vous les avez achetées surgelées. En réserver 16 pour la décoration. Mixer le reste des framboises avec 2 cuillères à soupe de sucre glace pour obtenir un coulis. Verser le mascarpone dans un petit saladier, ajouter la crème liquide et le reste du sucre glace. Fouetter au batteur électrique en commençant doucement puis en augmentant au fur et à mesure la vitesse de façon à obtenir une crème qui se tient et qui forme un bec au bout des fouets. Ajouter les trois quarts du coulis de framboises dans la crème. Mélanger à peine la crème et le coulis pour avoir un effet marbré. Concasser grossièrement les meringues dans une assiette. Répartir la moitié des miettes de meringue dans le fond de 4 verrines. Ajouter une cuillère à soupe de framboises, 1 cuillère à café de coulis, 2 cuillères à soupe de crème et recommencer 2 fois le tout (framboises puis coulis puis crème). Terminer par les miettes de meringue restantes. Servir aussitôt pour que les meringues restent croquantes.",
        recipeSource: "https://www.supertoinette.com/recette/5925/eton-mess-aux-framboises.html?diaporama=376"
    },
    {
        id: 13,
        nameRecipe: "Tarte aux pommes",
        type: "dessert",
        descriptionRecipe: "Une recette de dessert classique qui fait toujours plaisir.",
        cookingTime: 55,
        imgSrc: "/src/assets/tartePommes.jpg",
        ingredients: [
            "300 g de pommes soit 2",
            "300 g de compote de pommes",
            "230 g de pâte brisée soit 1 rouleau",
            "20 g de beurre",
            "7,50 g de sucre vanillé"
        ],
        recipeText: "Dérouler la pâte brisée et foncer un moule à tarte avec la pâte. Piquer le fond de tarte avec une fourchette et répartir la compote de pommes par-dessus. Préchauffer le four à 210°C. Laver, peler, épépiner et découper les pommes en fines lamelles. Les disposer joliment sur la compote en recouvrant toute la surface. Saupoudrer de sucre vanillé et répartir le beurre coupé en petits dés. Enfourner et laisser cuire pendant 30 minutes en surveillant la cuisson. Laisser tiédir avant de démouler. Cette tarte aux pommes se déguste tiède ou froide.",
        recipeSource: "https://www.supertoinette.com/recette/4753/tarte-aux-pommes-facile.html?diaporama=376"
    },
    {
        id: 14,
        nameRecipe: "Soupe butternut, chèvre et oeuf",
        type: "dish",
        descriptionRecipe: "Une soupe généreuse à customiser au dernier moment.",
        cookingTime: 50,
        imgSrc: "/src/assets/soupeButternutChevre.jpg",
        ingredients: [
            "1 courge butternut",
            "1 cube de bouillon aux légumes",
            "4 oeufs",
            "60 g de pignons de pin",
            "2 yaourts de chèvre nature",
            "quelques feuilles de coriandre",
            "fleur de sel",
            "sel, poivre"
        ],
        recipeText:"Coupez la courge butternut en deux, retirez les graines, taillez la chair en morceaux. Faites bouillir 60 cl d’eau avec le cube de bouillon, puis ajoutez la courge et laissez cuire 25 mn à feu moyen. Égouttez la courge, mixez-la et versez du bouillon jusqu’à obtenir une consistance à votre goût. Salez et poivrez. Portez de l’eau à ébullition. Plongez-y les œufs. Laissez cuire 6 mn, passez-les sous l’eau froide et écalez-les. Torréfiez les pignons de pin dans une poêle à sec pendant 5 mn. Répartissez la soupe dans quatre assiettes. Ajoutez dans chaque assiette un demi-yaourt, 1 œuf coupé en deux, des pignons de pin torréfiés, des feuilles de coriandre, un peu de fleur de sel et du poivre.",
        recipeSource:"https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Soupe-butternut-chevre-et-oeuf-3734362"

    }
]

export default recipesList;