"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[9675],{9911:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var l=t(3905),r=t(7294);function a(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",strong:"strong",a:"a",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",br:"br"},(0,l.ah)(),e.components),{PathViewer:t,PathViewerItem:a,InternalPageMenu:o,InternalPageMenuItem:c,InternalPageTitle:i,AuthenticatedBlock:u}=n;return u||s("AuthenticatedBlock",!0),o||s("InternalPageMenu",!0),c||s("InternalPageMenuItem",!0),i||s("InternalPageTitle",!0),t||s("PathViewer",!0),a||s("PathViewerItem",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(a,{to:"/"}," web2course "),r.createElement(a,{to:"/part2"}," Partie 2 "),r.createElement(a,{selected:!0}," d) Création d'UI esthétiques ")),"\n",r.createElement(n.h1,null,"d) Création d'UI esthétiques"),"\n",r.createElement(o,null,r.createElement(c,null," Comment créer une UI ? "),r.createElement(c,null," Qu'est-ce que Bootstrap ? "),r.createElement(c,null," Le layout en Bootstrap  "),r.createElement(c,null," Les breakpoints en Bootstrap "),r.createElement(c,null," Les composants Bootstrap "),r.createElement(c,null," Utilisation de Bootstrap avec Webpack ")),"\n",r.createElement(n.h1,null,r.createElement(i,null," Comment créer une UI ? ")),"\n",r.createElement(n.p,null,"Le design de UI (User Interface) est un métier réprésenté par tout un univers de technologies."),"\n",r.createElement(n.p,null,"L'objectif de ce cours est de pouvoir créer une IHM de qualité, avec peu d'efforts, qui paraisse bien sur tous les appareils (Responsive Web Design)."),"\n",r.createElement(n.p,null,"Il existe de nombreuses façon de gérer le design, le graphisme d'une UI, en passant par l'utilisation :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"de Vanilla CSS / HTML"),"\n",r.createElement(n.li,null,"de SASS (pour faciliter la génération de CSS)"),"\n",r.createElement(n.li,null,"de librairies ; les plus connues sont ",r.createElement(n.strong,null,"Bootstrap")," et ",r.createElement(n.strong,null,"tailwindcss"),"."),"\n"),"\n",r.createElement(n.p,null,"Dans le cadre de ce cours, nous vous conseillons d'utiliser ",r.createElement(n.strong,null,"Bootstrap")," pour travailler le style de vos applications. Toutes les futurs démos données dans le cadre de ce cours utiliseront ",r.createElement(n.strong,null,"Bootstrap"),"."),"\n",r.createElement(n.p,null,"Néanmoins, si vous avez déjà beaucoup d'affinités avec le Vanilla CSS, vous pouvez continuer à approfondir le CSS."),"\n",r.createElement(u,null,r.createElement(n.p,null,"Le style de vos IHM ne sera pas évalué lors des examens."),r.createElement(n.p,null,"Par contre, dans le cadre de votre projet web, le style de vos UI, tout comme l'ergonomie (UX), feront partie intégrante de l'évaluation.")),"\n",r.createElement(n.h1,null,r.createElement(i,null," Qu'est-ce que Bootstrap ? ")),"\n",r.createElement(n.p,null,'Bootstrap est une librairie permettant de créer rapidement des sites web "responsive".'),"\n",r.createElement(n.p,null,"Nous faisons une petite introduction à cet outil dans le cadre de ce cours, afin que vous puissiez facilement découvrir en autonomie cet technologie via son site web : ",r.createElement(n.a,{href:"https://getbootstrap.com/"},"Bootstrap")," ",r.createElement(n.a,{href:"/js2/references/#r36"},"[R.36]"),"."),"\n",r.createElement(n.p,null,"Bootstrap offre principalement :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Un système de ",r.createElement(n.strong,null,"Layout")," : un ",r.createElement(n.strong,null,"Grid")," est constitué de ",r.createElement(n.strong,null,"Container"),", de ",r.createElement(n.strong,null,"Rows")," et de ",r.createElement(n.strong,null,"Columns"),'. Le tout est construit en utilisant "flexbox" et est donc entièrement responsive.'),"\n",r.createElement(n.li,null,"6 ",r.createElement(n.strong,null,"responsive breakpoints")," : ce sont des règles permettant d'affecter tout ce qui se trouve à une certaine largeur ou au-delà. Ils permettent d'indiquer les parties du ",r.createElement(n.strong,null,"Layout")," qui doivent s'adapter à une particulière taille d'un appareil."),"\n",r.createElement(n.li,null,"Des ",r.createElement(n.strong,null,"Components")," : ce sont des éléments d'UI prédéfinis, comme par exemple des ",r.createElement(n.strong,null,"Alerts")," pour fournir des messages de feedback, des ",r.createElement(n.strong,null,"Cards")," pour afficher des infos mêlant images et textes..."),"\n",r.createElement(n.li,null,"Des ",r.createElement(n.strong,null,"Helpers")," et des ",r.createElement(n.strong,null,"Utilities")," notamment afin de gérer la couleurs, la taille et l'affichage des ",r.createElement(n.strong,null,"Components"),"."),"\n"),"\n",r.createElement(n.p,null,"En Bootstrap, quand on souhaite créer un composant, on va simplement créer un élément HTML, souvent des ",r.createElement(n.strong,null,r.createElement(n.code,null,"<div>")),", et indiquer des classes CSS issues de Bootstrap pour styler ces composants."),"\n",r.createElement(n.p,null,"Voici un exemple de comment afficher ce composant ",r.createElement(n.strong,null,"Alert")," affichant un message de feedback :"),"\n",r.createElement("div",{class:"alert alert-primary",role:"alert"},r.createElement(n.p,null,"A simple primary alert—check it out!")),"\n",r.createElement(n.p,null,"Le code associé est le suivant :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<div class="alert alert-primary" role="alert">\r\n  A simple primary alert—check it out!\r\n</div>\n')),"\n",r.createElement(n.p,null,"On voit donc que la classe ",r.createElement(n.strong,null,"alert")," défini le style globale du message de feedback, et ",r.createElement(n.strong,null,"alert-primary")," définit les couleurs (background, texte et bordures)."),"\n",r.createElement(n.h1,null,r.createElement(i,null," Le layout en Bootstrap ")),"\n",r.createElement(n.p,null,"En Bootstrap, il y a 12 colonnes disponibles par ligne (12 ",r.createElement(n.strong,null,"col")," par ",r.createElement(n.strong,null,"row"),")."),"\n",r.createElement(n.p,null,"Le layout permet notamment d'organiser les contenus d'une page, de définir son squelette."),"\n",r.createElement(n.p,null,"Admettons que nous souhaitons avoir ce genre de layout :"),"\n",r.createElement("div",{class:"container"},r.createElement("div",{class:"row"},r.createElement("div",{class:"col"},r.createElement(n.p,null,"1 of 2")),r.createElement("div",{class:"col"},r.createElement(n.p,null,"2 of 2"))),r.createElement("div",{class:"row"},r.createElement("div",{class:"col"},r.createElement(n.p,null,"1 of 3")),r.createElement("div",{class:"col"},r.createElement(n.p,null,"2 of 3")),r.createElement("div",{class:"col"},r.createElement(n.p,null,"3 of 3")))),"\n",r.createElement("br"),"\n",r.createElement(n.p,null,"Le code associé est le suivant :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<div class="container">\r\n  <div class="row">\r\n    <div class="col">\r\n      1 of 2\r\n    </div>\r\n    <div class="col">\r\n      2 of 2\r\n    </div>\r\n  </div>\r\n  <div class="row">\r\n    <div class="col">\r\n      1 of 3\r\n    </div>\r\n    <div class="col">\r\n      2 of 3\r\n    </div>\r\n    <div class="col">\r\n      3 of 3\r\n    </div>\r\n  </div>\r\n</div>\n')),"\n",r.createElement(n.p,null,"Et si l'on souhaitait ajouter une couleur de background et des bordures à l'aide des ",r.createElement(n.strong,null,"Utilities"),", on pourrait le faire avec ",r.createElement(n.strong,null,".bg-info")," et ",r.createElement(n.strong,null,".border .border-primary")," :"),"\n",r.createElement("div",{class:"container"},r.createElement("div",{class:"row"},r.createElement("div",{class:"col bg-info border border-primary"},r.createElement(n.p,null,"1 of 2")),r.createElement("div",{class:"col bg-info border border-primary"},r.createElement(n.p,null,"2 of 2"))),r.createElement("div",{class:"row"},r.createElement("div",{class:"col bg-info border border-primary"},r.createElement(n.p,null,"1 of 3")),r.createElement("div",{class:"col bg-info border border-primary"},r.createElement(n.p,null,"2 of 3")),r.createElement("div",{class:"col bg-info border border-primary"},r.createElement(n.p,null,"3 of 3")))),"\n",r.createElement("br"),"\n",r.createElement(n.p,null,"Le code associé est le suivant :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<div class="container">\r\n  <div class="row">\r\n    <div class="col bg-info border border-primary">\r\n      1 of 2\r\n    </div>\r\n    <div class="col bg-info border border-primary">\r\n      2 of 2\r\n    </div>\r\n  </div>\r\n  <div class="row">\r\n    <div class="col bg-info border border-primary">\r\n      1 of 3\r\n    </div>\r\n    <div class="col bg-info border border-primary">\r\n      2 of 3\r\n    </div>\r\n    <div class="col bg-info border border-primary">\r\n      3 of 3\r\n    </div>\r\n  </div>\r\n</div>\n')),"\n",r.createElement(n.h1,null,r.createElement(i,null," Les breakpoints en Bootstrap ")),"\n",r.createElement(n.p,null,"Admettons que nous souhaitons construire une page qui contient un header et un footer : sur toute la largeur de la page, et un body qui lui contient :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"pour les appareils ",r.createElement(n.strong,null,"large")," (≥992px) 1 colonne à gauche de la taille de 2 / 12 pour un menu et une colonne à droite prenant l'espace restant."),"\n",r.createElement(n.li,null,"pour les appareils ",r.createElement(n.strong,null,"extra small")," (<576px) jusque ",r.createElement(n.strong,null,"large"),", une seule colonne. Ainsi, le menu sera présenté sur une 1ère ligne..."),"\n"),"\n",r.createElement(n.p,null,"Comment ferions nous cela ?"),"\n",r.createElement("div",{class:"container"},r.createElement("div",{class:"row"},r.createElement("div",{class:"col bg-info border border-primary"},r.createElement(n.p,null,"Header"))),r.createElement("div",{class:"row"},r.createElement("div",{class:"col-12 col-lg-2 bg-info border border-primary"},r.createElement(n.p,null,"Menu within body part")),r.createElement("div",{class:"col-12 col-lg bg-info border border-primary"},r.createElement(n.p,null,"Main body part"))),r.createElement("div",{class:"row"},r.createElement("div",{class:"col bg-info border border-primary"},r.createElement(n.p,null,"Footer")))),"\n",r.createElement("br"),"\n",r.createElement(n.p,null,"Veuillez utiliser le mode développeur de votre browser (",r.createElement(n.strong,null,"F12")," par exemple) afin de faire varier la taille de la fenêtre de votre browser et d'observer le changement au niveau du layout des composants."),"\n",r.createElement(n.p,null,"Voici le code associé :"),"\n",r.createElement(n.pre,{numbered:!0,highlighting:"8,11"},r.createElement(n.code,{className:"language-html"},'<div class="container">\r\n  <div class="row">\r\n    <div class="col bg-info border border-primary">\r\n     Header\r\n    </div>   \r\n  </div>\r\n  <div class="row">\r\n    <div class="col-12 col-lg-2 bg-info border border-primary">\r\n     Menu within body part\r\n    </div>   \r\n    <div class="col-12 col-lg bg-info border border-primary">\r\n     Main body part\r\n    </div> \r\n  </div>\r\n  <div class="row">\r\n    <div class="col bg-info border border-primary">\r\n     Footer\r\n    </div>   \r\n  </div>\r\n</div>\n')),"\n",r.createElement(n.p,null,"Via ",r.createElement(n.strong,null,"col-12"),", cela signifie que les 12 colonnes disponibles dans une ligne sont prises."),"\n",r.createElement(n.p,null,"Via ",r.createElement(n.strong,null,"col-lg-2"),", on indique que dès que l'on égale ou dépasse les 992px, on ne prend que 2/12 d'espace d'une ligne. Notons que ",r.createElement(n.strong,null,"col-lg")," prend l'espace restant, on aurait pu indiquer ",r.createElement(n.strong,null,"col-lg-10")," pour obtenir le même résultat."),"\n",r.createElement(n.p,null,"Voici tous les breakpoints par défaut offerts par Bootstrap :"),"\n",r.createElement(n.table,null,r.createElement(n.thead,null,r.createElement(n.tr,null,r.createElement(n.th,null,"Breakpoint"),r.createElement(n.th,null,"Class infix"),r.createElement(n.th,null,"Dimensions"))),r.createElement(n.tbody,null,r.createElement(n.tr,null,r.createElement(n.td,null,"Extra small"),r.createElement(n.td,null,"None"),r.createElement(n.td,null,"<576px")),r.createElement(n.tr,null,r.createElement(n.td,null,"Small"),r.createElement(n.td,null,"sm"),r.createElement(n.td,null,"≥576px")),r.createElement(n.tr,null,r.createElement(n.td,null,"Medium"),r.createElement(n.td,null,"md"),r.createElement(n.td,null,"≥768px")),r.createElement(n.tr,null,r.createElement(n.td,null,"Large"),r.createElement(n.td,null,"lg"),r.createElement(n.td,null,"≥992px")),r.createElement(n.tr,null,r.createElement(n.td,null,"Extra large"),r.createElement(n.td,null,"xl"),r.createElement(n.td,null,"≥1200px")),r.createElement(n.tr,null,r.createElement(n.td,null,"Extra extra large"),r.createElement(n.td,null,"xxl"),r.createElement(n.td,null,"≥1400px")))),"\n",r.createElement("br"),"\n",r.createElement(n.h1,null,r.createElement(i,null," Les composants Bootstrap ")),"\n",r.createElement(n.p,null,"Lorsque vous construisez vos UI, il est préférable de bénéficier de composants existants au design soigné. Il en existe de nombreux : ",r.createElement(n.strong,null,"Card"),", ",r.createElement(n.strong,null,"Navbar"),", ",r.createElement(n.strong,null,"Alert"),", ",r.createElement(n.strong,null,"Button"),", ",r.createElement(n.strong,null,"Modal"),"..."),"\n",r.createElement(n.p,null,"Pour les découvrir, allez observer la documentation de ",r.createElement(n.a,{href:"https://getbootstrap.com/"},"Bootstrap")," ",r.createElement(n.a,{href:"/js2/references/#r36"},"[R.36]"),"."),"\n",r.createElement(n.p,null,"Pour utiliser certains composants qui offre une interactivité, il est nécessaire d'inclure le JavaScript associé."),"\n",r.createElement(n.p,null,"Par exemple, afin d'offrir une ",r.createElement(n.strong,null,"Navbar")," comme celle-ci :"),"\n",r.createElement("nav",{class:"navbar navbar-expand-lg bg-light"},r.createElement("div",{class:"container-fluid"},r.createElement("a",{class:"navbar-brand",href:"#"},"Navbar"),r.createElement("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{class:"navbar-toggler-icon"})),r.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.createElement("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},r.createElement("li",{class:"nav-item"},r.createElement("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")),r.createElement("li",{class:"nav-item"},r.createElement("a",{class:"nav-link",href:"#"},"Link")),r.createElement("li",{class:"nav-item dropdown"},r.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},r.createElement(n.p,null,"Dropdown")),r.createElement("ul",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.createElement("li",null,r.createElement("a",{class:"dropdown-item",href:"#"},"Action")),r.createElement("li",null,r.createElement("a",{class:"dropdown-item",href:"#"},"Another action")),r.createElement("li",null,r.createElement("hr",{class:"dropdown-divider"})),r.createElement("li",null,r.createElement("a",{class:"dropdown-item",href:"#"},"Something else here")))),r.createElement("li",{class:"nav-item"},r.createElement("a",{class:"nav-link disabled"},"Disabled"))),r.createElement("form",{class:"d-flex",role:"search"},r.createElement("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.createElement("button",{class:"btn btn-outline-success",type:"submit"},"Search"))))),"\n",r.createElement("br"),"\n",r.createElement(n.p,null,"Il est nécessaire de faire l'import suivant, notamment afin que la ",r.createElement(n.strong,null,"Dropdown")," s'affiche quand on clique dessus (le reste du code est un copier / coller de la documentation de Bootstrap) :"),"\n",r.createElement(n.pre,{highlighting:"1"},r.createElement(n.code,{className:"language-js"},'import { Navbar } from \'bootstrap\';\r\n\r\n <nav class="navbar navbar-expand-lg bg-light">\r\n  <div class="container-fluid">\r\n    <a class="navbar-brand" href="#">Navbar</a>\r\n    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\r\n      <span class="navbar-toggler-icon"></span>\r\n    </button>\r\n    <div class="collapse navbar-collapse" id="navbarSupportedContent">\r\n      <ul class="navbar-nav me-auto mb-2 mb-lg-0">\r\n        <li class="nav-item">\r\n          <a class="nav-link active" aria-current="page" href="#">Home</a>\r\n        </li>\r\n        <li class="nav-item">\r\n          <a class="nav-link" href="#">Link</a>\r\n        </li>\r\n        <li class="nav-item dropdown">\r\n          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r\n            Dropdown\r\n          </a>\r\n          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\r\n            <li><a class="dropdown-item" href="#">Action</a></li>\r\n            <li><a class="dropdown-item" href="#">Another action</a></li>\r\n            <li><hr class="dropdown-divider"/></li>\r\n            <li><a class="dropdown-item" href="#">Something else here</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class="nav-item">\r\n          <a class="nav-link disabled">Disabled</a>\r\n        </li>\r\n      </ul>\r\n      <form class="d-flex" role="search">\r\n        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>\r\n        <button class="btn btn-outline-success" type="submit">Search</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</nav>\n')),"\n",r.createElement(n.h1,null,r.createElement(i,null,"  Utilisation de Bootstrap avec Webpack ")),"\n",r.createElement(n.p,null,"Nous avons configuré les boilerplates du cours afin que Bootstrap soit déjà installé."),"\n",r.createElement(n.p,null,"Il n'y a donc plus rien à installer, sauf si p-e vous souhaitez utiliser des icônes."),"\n",r.createElement(n.p,null,"Si un jour vous veniez à devoir installer Bootstrap au sein d'un projet qui utilise un module bundler comme Webpack, vous devriez faire ces manipulations :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Installation de Bootstrap & de ses dépendances :"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-bash"},"npm i bootstrap @popperjs/core\n")),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Chargement du CSS de Bootstrap :"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"import 'bootstrap/dist/css/bootstrap.min.css';\n")),"\n",r.createElement(n.p,null,"Et puis finalement, si vous utilisez un composant qui offre des interactions, vous devrez inclure le JS associé à ce composant. Par exemple pour une ",r.createElement(n.strong,null,"Navbar")," :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"import { Navbar } from 'bootstrap';\n")),"\n",r.createElement(n.p,null,"Nous allons maintenant convertir le style du site de la pizzeria à l'aide de Bootstrap.",r.createElement(n.br),"\n","Reprenez donc au sein de VS Code votre projet ",r.createElement(n.strong,null,"modern"),".",r.createElement(n.br),"\n","La seule chose que nous allons laisser dans ",r.createElement(n.strong,null,"/src/stylesheets/main.css")," est la gestion d'une image en background car Bootstrap ne prévoit pas de solution."),"\n",r.createElement(n.p,null,"Veuillez donc mettre à jour ",r.createElement(n.strong,null,"/src/stylesheets/main.css")," pour ne garder que l'image en background :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-css"},"body { \r\n    background-image : url(../img/pizza.jpg);\r\n    background-size : cover;\r\n}\n")),"\n",r.createElement(n.p,null,"Il faut maintenant mettre à jour ",r.createElement(n.strong,null,"index.html")," et indiquer les bonnes classes de Bootstrap :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"text-center"))," : pour centrer nos titres et le main"),"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"text-white font-weight-bold py-2"))," : pour le style du texte dans le footer. ",r.createElement(n.strong,null,r.createElement(n.code,null,"py-2"))," met du padding sur l'axe des ",r.createElement(n.strong,null,"y"),", est donc tant en haut qu'en bas du footer."),"\n",r.createElement(n.li,null,"Pour que le layout de la page fasse toujour, au minimum, la hauteur complète du navigateur et donne l'effet au ",r.createElement(n.strong,null,r.createElement(n.code,null,"<footer>")),' d\'être "sticky" en bas de page, on utilise :',"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"vh-100 d-flex flex-column"))," au sein du ",r.createElement(n.strong,null,r.createElement(n.code,null,"<body>")),"."),"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"flex-grow-1"))," dans le ",r.createElement(n.strong,null,r.createElement(n.code,null,"<main>"))," pour lui imposer de remplir l'espace disponible. Ainsi, le footer donne l'effet d'être \"sticky\" en bas de la page."),"\n"),"\n"),"\n",r.createElement(n.li,null,"Pour la taille du logo JS, Bootstrap offre des classe pour le ",r.createElement(n.strong,null,"Sizing")," en fonction de la taille du parent ou du ",r.createElement(n.strong,null,"viewport")," (le browser). Ici, on préfère avoir une taille fixe de 50 pixel, donc on va indiquer cette taille directement dans l'attribut ",r.createElement(n.strong,null,r.createElement(n.code,null,"height"))," de ",r.createElement(n.strong,null,r.createElement(n.code,null,"<img>")),"."),"\n"),"\n",r.createElement(n.p,null,"Voilà à quoi doit ressembler votre ",r.createElement(n.strong,null,"index.html")," suite aux changements :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <title>Pizzeria</title>\r\n    <link rel="icon" href="./img/pizza-svgrepo-com.svg" type="image/svg+xml" />\r\n  </head>\r\n  <body class="vh-100 d-flex flex-column">\r\n    <header>\r\n      <h1 class="animate__animated animate__bounce text-center">We love Pizza</h1>\r\n    </header>\r\n    <main class="flex-grow-1 text-center">\r\n      <audio id="audioPlayer" controls autoplay>\r\n        <source src="./sound/Infecticide-11-Pizza-Spinoza.mp3" type="audio/mpeg" />\r\n        Your browser does not support the audio element.\r\n      </audio>\r\n    </main>\r\n    <footer class="text-center text-white font-weight-bold py-2">\r\n      <h1 class="animate__animated animate__bounce animate__delay-2s text-center">\r\n        But we also love JS\r\n      </h1>\r\n      <img src="./img/js-logo.png" height="50px" alt="" />\r\n    </footer>\r\n  </body>\r\n</html>\n')),"\n",r.createElement(n.p,null,"Si tout fonctionne bien, faites un commit de votre repo (",r.createElement(n.strong,null,"web2"),') avec le message "',r.createElement(n.strong,null,"modern-esthetic-hmi"),'".'),"\n",r.createElement(n.p,null,"En cas de souci, vous pouvez accéder au code de cette étape du tutoriel ici : ",r.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/frontend-essentials/modern-esthetic-hmi"},"modern-esthetic-hmi"),"."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=t(4854),i=t(5583),u=t(5679),m=t(307),d=t(7410),p=t(9523),E=t(8075),g=t(9063),v=t(1631),b=t(5772),f=t(2770),h=t(7008),y=t(9771),w=t(1218),x=(t(5258),t(9394)),k=t(4579),I=t(9416),S=t(9256),q=t(6488),B=t(5175),P=t(6387),C=t(6044);const z={Link:c.Link,Image:u.Z,Section:m.Z,Content:d.Z,Background:p.Z,SectionHeader:E.Z,SectionFooter:g.Z,PageHeader:v.Z,CodeBlock:f.Z,LinkFile:h.Z,ScrollableImage:y.Z,PublicProjectsView:w.Z,AuthenticatedBlock:x.Z,UnAuthenticatedBlock:k.Z,NestedMdxBlock:I.Z,YoutubeImage:S.Z,InternalPageMenu:q.Z,InternalPageMenuItem:B.Z,InternalPageTitle:P.Z,PathViewer:C.k,PathViewerItem:C.F};function j(e){var n,t,a,o,s;let{data:{mdx:c,allImages:u},children:m}=e;return z.PageHeader=(0,b.u)(v.Z,null==c?void 0:c.frontmatter),r.createElement(i.Z,Object.assign({},null!=c&&c.frontmatter?{frontmatter:c.frontmatter}:{},null!=c&&null!==(n=c.frontmatter)&&void 0!==n&&n.navbarExtraStyles?{navbarExtraStyles:c.frontmatter.navbarExtraStyles}:{},null!=c&&null!==(t=c.frontmatter)&&void 0!==t&&t.headerImage?{headerImage:c.frontmatter.headerImage}:{},null!=c&&null!==(a=c.frontmatter)&&void 0!==a&&a.featuredImage?{featuredImage:c.frontmatter.featuredImage}:{},null!=c&&null!==(o=c.frontmatter)&&void 0!==o&&o.title?{pageTitle:c.frontmatter.title}:{},u&&u.length>0?{allImages:u}:{}),r.createElement(l.Zo,{components:z},r.createElement("div",{className:null!=c&&null!==(s=c.frontmatter)&&void 0!==s&&s.autoMargin?"page page--auto-margin":"page"},m)))}function L(e){return r.createElement(j,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mdx-pages-js-content-file-path-src-mdx-pages-part-2-ui-fr-mdx-7d1fd7f341f69c8fc153.js.map