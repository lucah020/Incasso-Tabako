# Nieuwsbrief / update-mails

De website is nu bijgewerkt met:
- het nieuwe transparante logo (`assets/logo-incasso-tabako.png`)
- een aanmeldformulier voor updates op de homepage en contactpagina

## Belangrijk
De website draait als een **statische GitHub Pages-site**.
Dat betekent:
- bezoekers kunnen zich wel aanmelden
- maar **automatisch** mails sturen bij elke nieuwe case kan niet met alleen HTML/CSS/JS

## Wat werkt nu al?
Het update-formulier stuurt de aanmelding door naar:
- `incassotabako@gmail.com`

Zo kun je zelf een lijst bijhouden van mensen die updates willen ontvangen.

## Voor echte automatische mails
Gebruik een extra dienst, bijvoorbeeld:
- Brevo
- Buttondown
- Mailchimp
- ConvertKit

### Simpelste optie
1. Maak een gratis account aan bij Buttondown of Brevo.
2. Maak daar een mailinglijst aan.
3. Vervang het formulier op de site door hun embed-code of action-URL.
4. Stuur bij een nieuwe case een update naar alle abonnees.

## Volledige automatisering
Als je wilt dat er **automatisch** een mail uitgaat zodra jij een nieuwe case aan de website toevoegt,
dan moet er een koppeling komen via:
- GitHub Actions + mail-API
- of een kleine backend/serverless functie

Dat is een volgende stap, maar wel goed mogelijk.
