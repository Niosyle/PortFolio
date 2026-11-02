# Sécurité de l'espace admin (nhelt.fr/admin)

## Modèle de menace

Le site est statique (GitHub Pages) : il n'y a ni serveur ni base de données à attaquer.
Le seul secret est le **jeton GitHub** qui permet à l'admin d'écrire dans le dépôt.
Qui obtient ce jeton peut modifier le site. Toutes les mesures visent donc à :

1. empêcher le vol du jeton dans le navigateur ;
2. limiter ce qu'un jeton volé permettrait de faire ;
3. détecter et révoquer rapidement.

## Mesures en place dans le code

| Couche | Mesure | Fichier |
|---|---|---|
| Chaîne d'approvisionnement | Sveltia CMS en version figée avec empreinte SRI : un fichier modifié sur le CDN est refusé par le navigateur | `public/admin/index.html` |
| Chaîne d'approvisionnement | Aucun script tiers sur le site public : le tracker Umami est une copie figée hébergée localement | `public/js/stats.js` |
| Exfiltration | CSP stricte sur l'admin : scripts limités à ce site et à unpkg, connexions limitées à l'API GitHub. Un script injecté ne peut pas envoyer le jeton vers un autre serveur | `public/admin/index.html` |
| Exfiltration | CSP sur le site public : scripts uniquement locaux, connexions uniquement vers `gateway.umami.is` | `index.html` |
| Session | Déconnexion automatique après 30 minutes d'inactivité, avec effacement du jeton du navigateur | `public/admin/guard.js` |
| Clickjacking | L'admin refuse de s'afficher dans un cadre | `public/admin/guard.js` |
| Hameçonnage | L'admin refuse de fonctionner sur un autre domaine que nhelt.fr et force HTTPS | `public/admin/guard.js` |
| Fuite d'URL | `Referrer-Policy: no-referrer` sur l'admin | `public/admin/index.html` |
| Indexation | Admin exclu des moteurs de recherche (`noindex`, `robots.txt`) | `public/admin/index.html`, `public/robots.txt` |

## Mesures côté compte GitHub (à faire une fois)

- **Jeton à privilèges minimaux** : fine-grained, dépôt PortFolio uniquement, permission *Contents* seule, expiration 90 jours.
- **Double authentification par clé d'accès (passkey) ou clé physique** sur le compte GitHub.
- **Règle de protection de la branche `main`** : interdire le force push et la suppression. Un jeton volé ne peut alors qu'ajouter des commits visibles et réversibles, jamais effacer l'historique.

## En cas de doute (poste perdu, comportement suspect)

1. Révoquer le jeton : GitHub > Settings > Developer settings > Fine-grained tokens > *Revoke*.
2. Vérifier les derniers commits sur `main` et annuler toute modification inconnue (`git revert`).
3. Consulter le journal de sécurité du compte : GitHub > Settings > Security log.
4. Créer un nouveau jeton.

## Mettre à jour Sveltia CMS

L'empreinte SRI doit être recalculée à chaque changement de version :

```bash
VERSION=0.256.1
curl -s "https://unpkg.com/@sveltia/cms@${VERSION}/dist/sveltia-cms.js" \
  | openssl dgst -sha384 -binary | openssl base64 -A
```

Remplacer la version dans l'URL et la valeur `integrity` dans `public/admin/index.html`.

## Mettre à jour le tracker Umami

```bash
curl -s https://cloud.umami.is/script.js -o public/js/stats.js
```

Relire le diff avant de committer : c'est du code qui s'exécute sur le site.

## Détection de clone et pièges

Script : `public/js/canary.js`, chargé en premier sur toutes les pages.

- **Clone** : si une page du site est affichée sur un autre domaine que nhelt.fr, elle devient blanche
  (y compris l'admin) et une alerte « Clone détecté » est envoyée avec le domaine fautif, l'URL et la provenance.
  Les services légitimes (Google Traduction, Web Archive, archive.today) sont ignorés.
- **Pièges** : `/wp-admin/`, `/wp-login/`, `/administrator/`, `/login/`, `/phpmyadmin/`, `/admin-panel/`
  sont des pages blanches qui envoient une alerte « Piège déclenché » à chaque ouverture.
  `/administrator/` et `/admin-panel/` sont volontairement cités dans `robots.txt` pour attirer les curieux.
- **Alertes** : notifications push via ntfy.sh, sujet `nhelt-alerte-2686e6ec3fda`
  (application ntfy, Android ou iOS, ou https://ntfy.sh/nhelt-alerte-2686e6ec3fda dans un navigateur).
  Une seule alerte par visiteur et par session.

Limites : les robots qui n'exécutent pas JavaScript ne déclenchent rien (ce qui filtre le bruit des scanners).
Un attaquant attentif peut retirer le script de sa copie. Le sujet ntfy est lisible par quiconque lit le code :
il ne contient que des informations sur les visiteurs des pages piégées, jamais de secret.

## Lettre de recommandation et recommandations

- **Lettre** : en mode « Consultation seule », les pages sont affichées en images avec un filigrane, sans lien de
  téléchargement. C'est dissuasif, pas infaillible (capture d'écran, accès direct à l'URL de l'image).
  Avant publication : masquer la signature, les coordonnées personnelles et obtenir l'accord de l'auteur.
  Le bouton « Demander l'original » permet de transmettre la version signée par mail, à un recruteur identifié.
- **Recommandations** : le formulaire (nhelt.fr/#recommander) ne publie rien. Le texte arrive par mail, puis est
  ajouté et validé dans l'admin. Affichage seulement si « Publiée » et « Accord de publication » sont cochés.
  Protection anti-robots par champ piège ; notification push sans donnée personnelle.
