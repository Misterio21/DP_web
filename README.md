# DP Web

 [Spustit aplikaci](http://[2001:718:1c01:21:250:56ff:fe8e:6246])
 
Webová aplikace pro správu monitorovacích stanic a zobrazování statistik detekovaných objektů (osoby, kola, auta). Skládá se z Express.js backendu, MongoDB databáze a vanilla JS frontendu.
 
## Funkce
 
- Registrace a přihlášení uživatelů
- Interaktivní mapa stanic
- Přidávání a mazání stanic
- Zobrazení statistik – tabulka a graf
- Filtrování záznamů podle minuty, dne, měsíce nebo konkrétního data
- 
## Technologie
 
**Backend:** Node.js, Express 5, JWT, bcrypt  
**Frontend:** Vanilla JS (ES Modules), Leaflet.js, Chart.js  
**Databáze:** MongoDB
 
## Požadavky
 
- Node.js 18+
- MongoDB
- 
## Instalace
 
```bash
git clone <url-repozitáře>
cd dpweb

npm install
```
 
## Spuštění
 
```bash
npm start
```

## API endpointy
 
| Metoda | Endpoint | Popis | Auth |
|---|---|---|---|
| POST | `/register` | Registrace uživatele | Ne |
| POST | `/login` | Přihlášení, vrátí cookie s JWT | Ne |
| POST | `/logout` | Odhlášení | Ne |
| GET | `/auth/check` | Ověření přihlášení | Ano |
| POST | `/add_station` | Přidání nové stanice | Ano |
| GET | `/stations` | Seznam všech stanic | Ano |
| DELETE | `/delete_station/:id` | Smazání stanice | Ano |
| POST | `/add_record` | Přidání záznamu ke stanici | Ano |
| GET | `/records/:stationId` | Záznamy pro konkrétní stanici | Ano |
 
### Formát záznamu (`POST /add_record`)
 
```json
{
  "stationId": "<MongoDB ObjectId>",
  "recordTime": "2024-01-01T12:00:00",
  "people": 3,
  "bikes": 1,
  "cars": 5
}
```
 
## Dodatek
 
- Frontend má natvrdo zakódovanou adresu serveru (`BASE_URL`) v každém souboru — při nasazení na jiné prostředí je potřeba tuto adresu aktualizovat, nebo ji centralizovat do sdíleného modulu.
- Token JWT má platnost 2 hodiny, po vypršení je uživatel přesměrován na přihlašovací stránku.
