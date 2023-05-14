# Portfolio

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=lumerw-portfolio)

## Konfiguracja

W folderze `src/constants` znajdują się pliki ze stałymi, które można edytować:

- `aboutMe.ts` - informacje "o mnie".
- `socials.ts` - linki do social media.
- `projects.ts` - lista projektów.
- `experience.ts` - informacje o umiejętnościach, które są wyświetlane pod stroną główną.
- `faq.ts` - pytania i odpowiedzi, które są wyświetlane w sekcji FAQ.
- `reviews.ts` - wszystkie opinie.
- `index.ts` - ten plik służy jedynie do eksportu wszystkich zmiennych z folderu `constants`.

## Wymagania i instalacja

Musisz mieć zainstalowane Node.js oraz npm (Node Package Manager).
Następnie w folderze z projektem wpisz w konsoli:

```bash
npm install # instalacja bibliotek z package.json
```

Następnie możesz uruchomić projekt w trybie developerskim:

```bash
npm run dev # uruchomienie w trybie hot-reload
```

Uruchomi to serwer deweloperski na lokalnym hoście pod adresem [http://localhost:3000](http://localhost:3000).

Od teraz po każdej zmianie w kodzie strona powinna się automatycznie odświeżyć.
