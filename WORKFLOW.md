<!--- Denna dokumentation kan komma att uppdateras under projektets gång -->
<!--- Senast uppdaterad: 2019-12-17       @ Malin -->

# Projektplannering
**Grupp:** Malin Larsson, Oscar Nilsson, Daniel Lindberg och Avvy (Radoslava) Todorova
---

<!--- HUR vi tänker arbeta -->
## Arbetssätt
- **Daily Standup** - kl.09.00 varje dag. Det startas en tråd där alla SNABBT redogör för 
1. vad arbetade jag på igår? 
2. Vad arbetar jag på idag? 
3. Några problem? 
**OBLIGATORISK NÄRVARO** (frånvaro meddelas INNAN)
- **Weekly Sprint** - varje måndag i direkt anslutning till Daily Standup. Vad ska göras i veckan? Scrum Master flyttar och assignar korten. **OBLIGATORISK NÄRVARO* (frånvaro meddelas INNAN)
- **Dokumentering** - Malin

- Projektet ska följa GitFlow.
- Varje feature eller bugg ska vara dokumenterad på github-issues.
- Varje commit som mergas in i master eller develop ska referera till en
github-issue.
- Ingen kod får pushas direkt till master eller develop, utan måste gå via en PR.
- Varje PR måste godkännas av en person i teamet, samt Niklas, innan den får
accepteras.
- Varje commit ska innehålla tester för funktionaliteten den lägger till.
- All kod ska följa en uniform styleguide och vara lintad. 
---

<!--- Vilka verktyg vi kommer att använda under projektets gång -->
## Verktyg
- Trello - kananboard
- React
- express.js
- socket.io
- För Schack-logik: https://github.com/jhlywa/chess.js/
- För brädet: https://github.com/oakmac/chessboardjs/
- För server: lichess.org
- Swagger

<!--- Vilken kodstandard ska vi följa, för att hålla koden unison -->
### Kodstandard
- **Airbnb**: npmjs.com/package/eslint-config-airbnb-standard

<!--- Vilken CSS ska vi följa -->
### CSS
- **namn**: info
---

<!--- Vilka tester? Hur? -->
## Tester

<!--- Rollerna roteras varje vecka -->
## Scrum Roles
- **Scrum master**
- **Utvecklare**
---

<!--- Regler kring git-hantering -->
## Githantering
- **Pull Requests** -Oscar är huvudansvarig, Niklas godkänner.
- **Möten och Weekly Sprint** hanteras som en Pull Request, och stängs sedan

<!--- Vilka brancher som används, och regler för dessa -->
### Brancher
- **master** - clean working code
- **develop** - in progress

Nya features skapas från develop, ex. `develop/feature`.
uppdateringar skapas på samma sätt, ex. `develop/feature-test`.
---
