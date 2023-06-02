"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[2709],{7099:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(3905),a=t(7294);function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",br:"br"},(0,r.ah)(),e.components),{PathViewer:t,PathViewerItem:l,InternalPageMenu:o,InternalPageMenuItem:i,InternalPageTitle:u}=n;return o||s("InternalPageMenu",!0),i||s("InternalPageMenuItem",!0),u||s("InternalPageTitle",!0),t||s("PathViewer",!0),l||s("PathViewerItem",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(l,{to:"/"}," web2course "),a.createElement(l,{to:"/part2"}," Partie 2 "),a.createElement(l,{selected:!0}," l) Programmation asynchrone & les promesses ")),"\n",a.createElement(n.h1,null,"l) Programmation asynchrone & les promesses"),"\n",a.createElement(o,null,a.createElement(i,null," Utilisation de promesses & async / await "),a.createElement(i,null," Création de fonctions asynchrones renvoyant une promesse ")),"\n",a.createElement(n.h1,null,a.createElement(u,null," Utilisation de promesses & async / await ")),"\n",a.createElement(n.h2,null,"Introduction"),"\n",a.createElement(n.p,null,"Plutôt que d'utiliser des ",a.createElement(n.strong,null,".then()")," pour chaîner des traitements asynchrones, il est possible de simplifier la syntaxe des promesses à l'aide de ",a.createElement(n.strong,null,"async")," et ",a.createElement(n.strong,null,"await"),"."),"\n",a.createElement(n.p,null,"On va donc écrire du code d'une manière équivalente à ce qui serait fait en programmation synchrone."),"\n",a.createElement(n.h2,null,"async / await & opération asynchrone de lecture de ressources"),"\n",a.createElement(n.p,null,"Nous allons refactorer l'IHM ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/frontend-essentials/basic-fetch"},"basic-fetch"),"."),"\n",a.createElement(n.p,null,"Au sein de votre repo ",a.createElement(n.strong,null,"web2"),", veuillez créer le projet nommé ",a.createElement(n.strong,null,"/web2/tutorials/pizzeria/hmi/async-await")," sur base d'un copié collé de ",a.createElement(n.strong,null,"/web2/tutorials/pizzeria/hmi/basic-fetch")," (ou ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/frontend-essentials/basic-fetch"},"routing-hmi"),"."),"\n",a.createElement(n.p,null,"Pour la suite du tutoriel, nous considérons que tous les chemins absolus démarrent du répertoire\r\n",a.createElement(n.strong,null,"/web2/tutorials/pizzeria/hmi/async-await"),"."),"\n",a.createElement(n.p,null,"Nous allons donc refactorer le code où est fait le ",a.createElement(n.strong,null,"fetch"),", c'est à dire ",a.createElement(n.strong,null,"/src/Components/Pages/HomePage.js")," (veuillez mettre à jour tout le code de la fonction arrow associée à la variable ",a.createElement(n.strong,null,"HomePage"),") :"),"\n",a.createElement(n.pre,{numbered:!0,highlighting:"1,5,9"},a.createElement(n.code,{className:"language-js"},"const HomePage = async () => {\r\n  try {\r\n    clearPage();\r\n\r\n    const response = await fetch('/api/pizzas');\r\n\r\n    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);\r\n\r\n    const pizzas = await response.json();\r\n\r\n    renderMenuFromString(pizzas);\r\n    attachOnMouseEventsToGoGreen();\r\n    renderDrinksFromNodes(DRINKS);\r\n  } catch (err) {\r\n    console.error('HomePage::error: ', err);\r\n  }\r\n};\n")),"\n",a.createElement(n.p,null,"Pour tester ce code, il ne faut pas oublier de démarrer la RESTful API auparavant : ",a.createElement(n.strong,null,"/web2/tutorials/pizzeria/api/fat-model")," ou via le code de ce web repo si vous avez un souci : ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/fat-model"},"fat-model"),"."),"\n",a.createElement(n.p,null,"Voici quelques caractéristiques importantes de ",a.createElement(n.strong,null,"async")," / ",a.createElement(n.strong,null,"await")," :"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"await")," est utilisé pour chaîner une tâche asynchrone (sur une fonction renvoyant une promesse) et ne peut se faire qu'au sein d'une fonction taguée par ",a.createElement(n.strong,null,"async")," ; c'est donc le remplaçant du ",a.createElement(n.strong,null,".then(callback)"),".",a.createElement(n.br),"\n","⚡ Attention, il est donc important qu'au niveau de la fonction arrow, à la ligne 1 du code donné ci-dessus, on indique le ",a.createElement(n.strong,null,"async")," !",a.createElement(n.br),"\n","⚡ Dans le code donné ci-dessus, il est aussi très important de ne pas oublier les ",a.createElement(n.strong,null,"await"),". N'hésitez pas à faire le test en enlevant le ",a.createElement(n.strong,null,"await")," de ",a.createElement(n.strong,null,a.createElement(n.code,null,"const pizzas = await response.json();")),". Que se passe-t-il dans ce cas ? ",a.createElement(n.strong,null,a.createElement(n.code,null,"response.json()"))," étant une fonction asynchrone, on passera directement à la fonction ",a.createElement(n.strong,null,a.createElement(n.code,null,"renderMenuFromString(pizzas);"))," avant même d'avoir récupéré les pizzas de notre RESTful API !"),"\n",a.createElement(n.li,null,'Toute fonction "taguée" par ',a.createElement(n.strong,null,"async")," renvoie automatiquement une promesse ; cela signifie dans le code ci-dessus que la fonction ",a.createElement(n.strong,null,"HomePage")," est elle même asynchrone.",a.createElement(n.br),"\n","💭 Il est à parier, et n'hésitez pas à trouver un moyen de vous en rendre compte visuellement, que le footer s'affiche avant le menu !"),"\n",a.createElement(n.li,null,"On utilise des blocs ",a.createElement(n.strong,null,"try")," / ",a.createElement(n.strong,null,"catch")," pour gérer les erreur ; c'est donc le remplaçant du ",a.createElement(n.strong,null,".catch(callback)"),"."),"\n"),"\n",a.createElement(n.h2,null,"Opération asynchrone d'écriture d'une ressource"),"\n",a.createElement(n.p,null,"A présent, nous souhaiterions que notre IHM puisse créer une ressource au sein de la RESTful API. Dans un premier temps, nous allons mettre à jour le frontend en acceptant que n'importe quel utilisateur puisse créer une pizza et l'ajouter au menu de la pizzeria.",a.createElement(n.br),"\n","Bien entendu, cela est temporaire. Nous verrons plus tard comment sécuriser cette opération, en autorisant un admin seulement à réaliser l'ajout d'une pizza au menu."),"\n",a.createElement(n.p,null,"Nous allons créer une nouvelle page nommée ",a.createElement(n.strong,null,"AddPizzaPage.js"),".\r\nDans un premier temps, nous allons juste réaliser une page statique car il est toujours plus aisé de d'abord avoir une version visuelle d'une application web, avec la navigation entre les pages, avant de peaufiner chaque page et leurs interactions avec les utilisateurs et les APIS.\r\nVeuillez ajouter ce code dans la nouvelle page ",a.createElement(n.strong,null,"/src/Components/Pages/AddPizzaPage.js"),":"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"import { clearPage, renderPageTitle } from '../../utils/render';\r\n\r\nconst AddPizzaPage = () => {\r\n  clearPage();\r\n  renderPageTitle('Add a pizza to the menu');\r\n  renderAddPizzaForm();\r\n};\r\n\r\nfunction renderAddPizzaForm() {\r\n  const main = document.querySelector('main');\r\n  const form = document.createElement('form');\r\n  form.className = 'p-5';\r\n  const title = document.createElement('input');\r\n  title.type = 'text';\r\n  title.id = 'title';\r\n  title.placeholder = 'title of your pizza';\r\n  title.required = true;\r\n  title.className = 'form-control mb-3';\r\n  const content = document.createElement('input');\r\n  content.type = 'text';\r\n  content.id = 'content';\r\n  content.required = true;\r\n  content.placeholder = 'Content of your pizza';\r\n  content.className = 'form-control mb-3';\r\n  const submit = document.createElement('input');\r\n  submit.value = 'Add pizza to the menu';\r\n  submit.type = 'submit';\r\n  submit.className = 'btn btn-danger';\r\n  form.appendChild(title);\r\n  form.appendChild(content);\r\n  form.appendChild(submit);\r\n  main.appendChild(form);\r\n}\r\n\r\nexport default AddPizzaPage;\n")),"\n",a.createElement(n.p,null,"Nous devons aussi ajouter un élément dans la Navbar afin de pouvoir accéder à cette nouvelle page. Pour ce faire, veuillez mettre à jour ",a.createElement(n.strong,null,"/src/Components/Navbar/Navbar.js")," :"),"\n",a.createElement(n.pre,{numbered:!0,highlighting:"36-38"},a.createElement(n.code,{className:"language-js"},'// eslint-disable-next-line no-unused-vars\r\nimport { Navbar as BootstrapNavbar } from \'bootstrap\';\r\n\r\nconst Navbar = () => {\r\n  renderNavbar();\r\n};\r\n\r\nfunction renderNavbar() {\r\n  const navbar = document.querySelector(\'#navbarWrapper\');\r\n  navbar.innerHTML = `\r\n  <nav class="navbar navbar-expand-lg navbar-light bg-danger">\r\n        <div class="container-fluid">\r\n          <a class="navbar-brand" href="#">e-Pizzeria</a>\r\n          <button\r\n            class="navbar-toggler"\r\n            type="button"\r\n            data-bs-toggle="collapse"\r\n            data-bs-target="#navbarSupportedContent"\r\n            aria-controls="navbarSupportedContent"\r\n            aria-expanded="false"\r\n            aria-label="Toggle navigation"\r\n          >\r\n            <span class="navbar-toggler-icon"></span>\r\n          </button>\r\n          <div class="collapse navbar-collapse" id="navbarSupportedContent">\r\n            <ul class="navbar-nav me-auto mb-2 mb-lg-0">\r\n              <li class="nav-item">\r\n                <a class="nav-link active" aria-current="page" href="#" data-uri="/">Home</a>\r\n              </li>\r\n              <li id="loginItem" class="nav-item">\r\n                <a class="nav-link" href="#" data-uri="/login">Login</a>\r\n              </li>\r\n              <li id="registerItem" class="nav-item">\r\n                <a class="nav-link" href="#" data-uri="/register">Register</a>\r\n              </li>  \r\n              <li class="nav-item">\r\n                <a class="nav-link" href="#" data-uri="/add-pizza">Add a pizza</a>\r\n              </li>           \r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n  `;\r\n}\r\n\r\nexport default Navbar;\n')),"\n",a.createElement(n.p,null,"Et finalement, comme le frontend de ce tutoriel utilise le boilerplate du cours, il faut encore configurer le router de l'IHM afin d'indiquer la page à afficher lorsqu'on clique sur le lien dont ",a.createElement(n.strong,null,a.createElement(n.code,null,"data-uri"))," vaut ",a.createElement(n.strong,null,"add-pizza"),". Pour ce faire, veuillez mettre à jour le fichier ",a.createElement(n.strong,null,"/src/Components/Router/Router.js")," pour ajouter ces deux lignes :"),"\n",a.createElement(n.pre,{highlighting:"1,10"},a.createElement(n.code,{className:"language-js"},"import AddPizzaPage from '../Pages/AddPizzaPage';\r\nimport HomePage from '../Pages/HomePage';\r\nimport LoginPage from '../Pages/LoginPage';\r\nimport RegisterPage from '../Pages/RegisterPage';\r\n\r\nconst routes = {\r\n  '/': HomePage,\r\n  '/login': LoginPage,\r\n  '/register': RegisterPage,\r\n  '/add-pizza': AddPizzaPage,\r\n};\n")),"\n",a.createElement(n.p,null,"A ce stade-ci, votre application ",a.createElement(n.strong,null,"/web2/tutorials/pizzeria/hmi/async-await")," devrait être fonctionnelle, vous devriez pouvoir naviguer vers la nouvelle page contenant un formulaire pour ajouter une pizza."),"\n",a.createElement(n.p,null,"Nous allons maintenant ajouter l'interaction avec l'API au sein de ",a.createElement(n.strong,null,"AddPizzaPage"),".\r\nLorsque nous soumettons le formulaire, nous voulons faire une requête de création de pizza à la RESTful API, c'est donc une requête de type ",a.createElement(n.strong,null,"POST /pizzas")," qui doit être l'équivalent de ce que nous faisions avec REST Client. Pour rappel, nous faisions une requête de ce genre :"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-http"},'### Create a pizza\r\nPOST {{baseUrl}}/pizzas\r\nContent-Type: application/json\r\n\r\n{\r\n    "title":"Magic Green",\r\n    "content":"Epinards, Brocolis, Olives vertes, Basilic"\r\n}\n')),"\n",a.createElement(n.p,null,"Ici, c'est le JS à rajouter dans ",a.createElement(n.strong,null,"AddPizzaPage")," qui doit, lors du clic, aller chercher les valeurs des deux champs du formulaire pour créer la représentation des données à créer (",a.createElement(n.strong,null,"title")," et ",a.createElement(n.strong,null,"content"),") et faire un ",a.createElement(n.strong,null,"fetch")," de l'opération de création offerte par l'API.",a.createElement(n.br),"\n","Si l'ajout se fait avec succès, on souhaite faire en sorte que l'utilisateur soit redirigé vers la ",a.createElement(n.strong,null,"HomePage"),"."),"\n",a.createElement(n.p,null,"Pour arriver à nos fins, veuillez ajouter ce code dans la page ",a.createElement(n.strong,null,"/src/Components/Pages/AddPizzaPage.js")," :"),"\n",a.createElement(n.pre,{numbered:!0,highlighting:"34,37-63"},a.createElement(n.code,{className:"language-js"},"import { clearPage, renderPageTitle } from '../../utils/render';\r\nimport Navigate from '../Router/Navigate';\r\n\r\nconst AddPizzaPage = () => {\r\n  clearPage();\r\n  renderPageTitle('Add a pizza to the menu');\r\n  renderAddPizzaForm();\r\n};\r\n\r\nfunction renderAddPizzaForm() {\r\n  const main = document.querySelector('main');\r\n  const form = document.createElement('form');\r\n  form.className = 'p-5';\r\n  const title = document.createElement('input');\r\n  title.type = 'text';\r\n  title.id = 'title';\r\n  title.placeholder = 'title of your pizza';\r\n  title.required = true;\r\n  title.className = 'form-control mb-3';\r\n  const content = document.createElement('input');\r\n  content.type = 'text';\r\n  content.id = 'content';\r\n  content.required = true;\r\n  content.placeholder = 'Content of your pizza';\r\n  content.className = 'form-control mb-3';\r\n  const submit = document.createElement('input');\r\n  submit.value = 'Add pizza to the menu';\r\n  submit.type = 'submit';\r\n  submit.className = 'btn btn-danger';\r\n  form.appendChild(title);\r\n  form.appendChild(content);\r\n  form.appendChild(submit);\r\n  main.appendChild(form);\r\n  form.addEventListener('submit', onAddPizza);\r\n}\r\n\r\nasync function onAddPizza(e) {\r\n  e.preventDefault();\r\n\r\n  const title = document.querySelector('#title').value;\r\n  const content = document.querySelector('#content').value;\r\n\r\n  const options = {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      title,\r\n      content,\r\n    }),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  };\r\n\r\n  const response = await fetch('/api/pizzas', options); // fetch return a promise => we wait for the response\r\n\r\n  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);\r\n\r\n  const newPizza = await response.json(); // json() returns a promise => we wait for the data\r\n\r\n  console.log('New pizza added : ', newPizza);\r\n\r\n  Navigate('/');\r\n}\r\n\r\nexport default AddPizzaPage;\n")),"\n",a.createElement(n.p,null,"Quelques explications sur ce code, pour les parties déjà connues :"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"La gestion d'événements n'est pas nouvelle. Ici, on met un écouteur d'événements de type ",a.createElement(n.strong,null,"submit")," sur le formulaire. Cela permet d'écouter tant les clics sur le champs de type ",a.createElement(n.strong,null,"submit")," (le bouton) que si l'utilisateur appuie sur ",a.createElement(n.strong,null,"Enter"),".",a.createElement(n.br),"\n",'👍 On recommande, pour les formulaires, d\'utiliser des événements de type "submit" plutôt que des événements de type "click" sur le bouton "submit" afin notamment de prendre en compte si l\'utilisateur appuie sur ',a.createElement(n.strong,null,"Enter")," pour tenter de soumettre le formulaire."),"\n",a.createElement(n.li,null,"L'action par défaut d'un formulaire, lors d'un submit, et de faire une requête synchrone vers l'URL du backend indiqué dans la propriété ",a.createElement(n.strong,null,"action")," du formulaire, ou sur la même URL que la page en cours si ",a.createElement(n.strong,null,"action")," n'est pas donné. Pour éviter un chargement de page non désiré dans le cadre d'une SPA, on stoppe cette action par défaut via ",a.createElement(n.strong,null,a.createElement(n.code,null,"e.preventDefault()")),"."),"\n"),"\n",a.createElement(n.p,null,"Pour la nouveauté et le ",a.createElement(n.strong,null,"fetch")," :"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"pour faire une requête de type ",a.createElement(n.strong,null,"POST"),", tout comme pour les requêtes de type ",a.createElement(n.strong,null,"DELETE"),", ",a.createElement(n.strong,null,"PATCH"),", ",a.createElement(n.strong,null,"UPDATE"),"..., il faut l'indiquer à la méthode ",a.createElement(n.strong,null,"fetch"),".",a.createElement(n.br),"\n","Cela est indiqué dans un objet que nous appelons généralement ",a.createElement(n.strong,null,"options")," qui doit contenir la propriété ",a.createElement(n.strong,null,"method"),"."),"\n",a.createElement(n.li,null,"lorsque l'on doit envoyer des données dans le ",a.createElement(n.strong,null,"body")," d'une requête, alors il faut le faire au sein de la propriété ",a.createElement(n.strong,null,"body"),". Ici, nous souhaitons envoyer un objet content les propriétés ",a.createElement(n.strong,null,"title")," et ",a.createElement(n.strong,null,"content")," au format JSON. Nous devons donc utiliser la méthode ",a.createElement(n.strong,null,a.createElement(n.code,null,"JSON.stringify"))," qui permet de créer une représentation JSON d'un objet JS. Notez ici que nous avons écrit l'objet JS selon une notation simplifiée :"),"\n"),"\n",a.createElement(n.pre,{highlighting:"4-7,9-12"},a.createElement(n.code,{className:"language-js"},"const title = document.querySelector('#title').value;\r\nconst content = document.querySelector('#content').value;\r\n\r\n{\r\n  title,\r\n  content,\r\n}\r\n// Cet object literal est l'équivalent de :\r\n{\r\n  title: title,\r\n  content: content,\r\n}\n")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Il est très important de spécifier le type de la représentation de l'objet qui devrait être utilisé par l'API et qui se trouve dans le body de la requête. Cela est fait via un ",a.createElement(n.strong,null,"header")," et la propriété ",a.createElement(n.strong,null,"Content-Type")," (",a.createElement(n.strong,null,a.createElement(n.code,null,"'Content-Type': 'application/json',")),").",a.createElement(n.br),"\n","⚡ Si vous oubliez cela, l'API ne pourra pas parser les données au format JSON vers des objets JS et donc les opérations d'écriture de ressources échoueront !"),"\n",a.createElement(n.li,null,"Finalement, si l'opération de création de la pizza réussi, nous redirigeons l'utilisateur vers la ",a.createElement(n.strong,null,"HomePage")," à l'aide du composant fonctionnel ",a.createElement(n.strong,null,a.createElement(n.code,null,"Navigate.js"))," offert au sein du fichier ",a.createElement(n.strong,null,"Navigate")," dans le dossier ",a.createElement(n.strong,null,"Router")," du boilerplate du frontend."),"\n"),"\n",a.createElement(n.p,null,"Si tout fonctionne bien, faites un ",a.createElement(n.strong,null,"commit")," de votre repo (",a.createElement(n.strong,null,"web2"),') avec le message\r\n"',a.createElement(n.strong,null,"async-await"),'".'),"\n",a.createElement(n.p,null,"En cas de souci, vous pouvez accéder au code du tutoriel ici :\r\n",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/frontend-essentials/async-await"},"async-await"),"."),"\n",a.createElement(n.h1,null,a.createElement(u,null," Création de fonctions asynchrones renvoyant une promesse ")),"\n",a.createElement(n.p,null,"Il est si simple, à l'aide d'",a.createElement(n.strong,null,"async")," / ",a.createElement(n.strong,null,"await"),", de créer des fonctions asynchrones qui renvoient une promesse, qu'il serait dommage de ne pas l'expérimenter."),"\n",a.createElement(n.p,null,"Imaginons que nous souhaitons créer une fonction asynchrone qui renvoie toutes les pizzas qui sont offertes par l'opération de lecture des pizzas de la RESTful API."),"\n",a.createElement(n.p,null,"Voici comment nous écririons ce code :"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"async function getAllPizzas() {\r\n  try {\r\n    const response = await fetch('/api/pizzas');\r\n\r\n    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);\r\n\r\n    const pizzas = await response.json();\r\n\r\n    return pizzas;\r\n  } catch (err) {\r\n    console.error('getAllPizzas::error: ', err);\r\n    throw err;\r\n  }\r\n}\n")),"\n",a.createElement(n.p,null,"Cette fonction ",a.createElement(n.strong,null,"getAllPizzas")," ne renvoie pas un array de pizzas, mais une ",a.createElement(n.strong,null,"Promise")," !",a.createElement(n.br),"\n","Si la promesse :"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"résout avec succès, alors c'est bien un array de pizzas qui sera renvoyé par cette fonction."),"\n",a.createElement(n.li,null,"échoue, c'est une exception qui sera renvoyée.",a.createElement(n.br),"\n","Pour que cela fonctionne, vous devez donc faire en sorte, dans vos fonctions asynchrones, de faire un ",a.createElement(n.strong,null,"throw")," d'une erreur en cas d'échec du traitement asynchrone."),"\n"),"\n",a.createElement(n.p,null,"Comment utiliser ce code au sein de la ",a.createElement(n.strong,null,"HomePage")," ?",a.createElement(n.br),"\n","Voici comment le code pourrait être mis à jour pour utiliser la fonction asynchrone ",a.createElement(n.strong,null,"getAllPizzas")," au sein de ",a.createElement(n.strong,null,"HomePage.js")," :"),"\n",a.createElement(n.pre,{highlighting:"1,5"},a.createElement(n.code,{className:"language-js"},"const HomePage = async () => {\r\n  try {\r\n    clearPage();\r\n\r\n    const pizzas = await getAllPizzas();\r\n\r\n    renderMenuFromString(pizzas);\r\n    attachOnMouseEventsToGoGreen();\r\n    renderDrinksFromNodes(DRINKS);\r\n  } catch (err) {\r\n    console.error('HomePage::error: ', err);\r\n  }\r\n};\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(l,e)):l(e)};function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=t(4854),u=t(5583),c=t(5679),m=t(307),d=t(7410),p=t(9523),g=t(8075),E=t(9063),f=t(1631),v=t(5772),h=t(2770),z=t(7008),b=t(9771),P=t(1218),y=(t(5258),t(9394)),q=t(4579),j=t(9416),w=t(9256),N=t(6488),I=t(5175),A=t(6387),S=t(6044);const C={Link:i.Link,Image:c.Z,Section:m.Z,Content:d.Z,Background:p.Z,SectionHeader:g.Z,SectionFooter:E.Z,PageHeader:f.Z,CodeBlock:h.Z,LinkFile:z.Z,ScrollableImage:b.Z,PublicProjectsView:P.Z,AuthenticatedBlock:y.Z,UnAuthenticatedBlock:q.Z,NestedMdxBlock:j.Z,YoutubeImage:w.Z,InternalPageMenu:N.Z,InternalPageMenuItem:I.Z,InternalPageTitle:A.Z,PathViewer:S.k,PathViewerItem:S.F};function T(e){var n,t,l,o,s;let{data:{mdx:i,allImages:c},children:m}=e;return C.PageHeader=(0,v.u)(f.Z,null==i?void 0:i.frontmatter),a.createElement(u.Z,Object.assign({},null!=i&&i.frontmatter?{frontmatter:i.frontmatter}:{},null!=i&&null!==(n=i.frontmatter)&&void 0!==n&&n.navbarExtraStyles?{navbarExtraStyles:i.frontmatter.navbarExtraStyles}:{},null!=i&&null!==(t=i.frontmatter)&&void 0!==t&&t.headerImage?{headerImage:i.frontmatter.headerImage}:{},null!=i&&null!==(l=i.frontmatter)&&void 0!==l&&l.featuredImage?{featuredImage:i.frontmatter.featuredImage}:{},null!=i&&null!==(o=i.frontmatter)&&void 0!==o&&o.title?{pageTitle:i.frontmatter.title}:{},c&&c.length>0?{allImages:c}:{}),a.createElement(r.Zo,{components:C},a.createElement("div",{className:null!=i&&null!==(s=i.frontmatter)&&void 0!==s&&s.autoMargin?"page page--auto-margin":"page"},m)))}function k(e){return a.createElement(T,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mdx-pages-js-content-file-path-src-mdx-pages-part-2-promises-fr-mdx-60ef84559646b874e3b0.js.map