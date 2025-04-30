# 💡 plungeFix: Desbloqueja la Teva Ment amb Analogies d'IA 💡

[![Demo](https://img.shields.io/badge/Prova-ho_Ara!-brightgreen)](https://xesco-tejedor.github.io/plungeFix/)

<!-- TODO: Afegir una captura de pantalla o un GIF animat aquí per mostrar l'aplicació en acció -->
<!-- ![Captura de pantalla de plungeFix](URL_DE_LA_IMATGE_AQUI) -->

**plungeFix** és una senzilla però potent aplicació web dissenyada per ajudar-te a superar bloquejos mentals i abordar problemes complexos des de noves perspectives. Utilitzant la potència de la Intel·ligència Artificial (IA), plungeFix genera analogies creatives que poden il·luminar el teu camí cap a la solució.

Estàs encallat en un problema difícil? Sents que no avances? De vegades, una bona analogia és tot el que necessites per veure les coses d'una altra manera. plungeFix et connecta amb aquesta espurna creativa.

**Prova l'aplicació aquí:** 👉 [**plungeFix Live Demo**](https://xesco-tejedor.github.io/plungeFix/) 👈

---

## ✨ Característiques Principals

*   **Generació d'Analogies:** Introdueix la descripció del teu problema i obtén analogies rellevants i suggeridores generades per un model d'IA.
*   **Interfície Senzilla i Directa:** Un disseny net i intuïtiu centrat en la facilitat d'ús. Només tres passos per obtenir noves perspectives!
*   **Utilitza la Teva Pròpia API Key:** Connecta't directament a un servei d'IA (com OpenAI) utilitzant la teva clau API personal. Això et dóna control total sobre el teu ús.
*   **Enfocament en la Seguretat i Privacitat:** La teva clau API s'envia **directament des del teu navegador** a l'API del proveïdor d'IA. **No s'emmagatzema ni es processa mai** en cap servidor intermediari relacionat amb plungeFix.
*   **Feedback Visual:** Un indicador de càrrega et mostra que l'IA està treballant per generar les teves perspectives.
*   **Resposta Immediata:** Les analogies generades es mostren directament a la pàgina per a la teva consulta.
*   **Web Estàtica:** Allotjada a GitHub Pages, és ràpida, fiable i fàcilment accessible.

---

## 🤔 Com Funciona?

plungeFix actua com una interfície entre tu i un potent model d'Intel·ligència Artificial. El procés és simple:

1.  **Descriu el Problema:** Escrius una descripció clara i concisa del repte o problema complex al qual t'enfrontes a l'àrea de text designada. Com més context proporcionis, millor entendrà l'IA la teva situació.
2.  **Introdueix la teva API Key:** Enganxes la teva clau API personal d'un proveïdor d'IA compatible (p. ex., OpenAI) al camp corresponent. Aquesta clau és necessària per autenticar la teva sol·licitud directament amb el servei d'IA.
3.  **Genera Perspectives:** Fas clic al botó "Generar Perspectives amb IA".
4.  **Comunicació amb l'IA:** El teu navegador, utilitzant JavaScript, envia la descripció del problema i la teva API Key (de forma segura via HTTPS) directament a l'endpoint de l'API del proveïdor d'IA.
5.  **Processament IA:** El model d'IA analitza la descripció del teu problema i genera analogies creatives i rellevants basades en la seva vasta base de coneixements.
6.  **Mostra de Resultats:** Un cop l'API d'IA retorna la resposta, plungeFix la mostra de manera clara a la secció "Perspectives Suggerides per IA".

---

## 🛠️ Tecnologies Utilitzades

*   **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
*   **Intel·ligència Artificial:** Integració amb API d'IA de tercers (dissenyat per funcionar amb models com els d'OpenAI, requereix clau API de l'usuari).
*   **Allotjament:** GitHub Pages

---

## 🚀 Com Utilitzar l'Aplicació

Utilitzar plungeFix és molt fàcil:

1.  **Accedeix a l'Aplicació:** Obre [plungeFix](https://xesco-tejedor.github.io/plungeFix/) al teu navegador web preferit.
2.  **Defineix el Teu Repte:** A la primera caixa de text (`1. Describe tu problema complejo`), escriu el problema que vols abordar. Intenta ser específic!
    *   *Exemple:* "Estic intentant organitzar un equip remot amb diferents zones horàries i nivells d'experiència per a un projecte urgent."
3.  **Afegeix la Teva API Key:** A la segona caixa (`2. Introduce tu API Key`), enganxa la teva clau API personal d'un servei com OpenAI. Recorda que és un camp de tipus `password`, de manera que els caràcters no seran visibles per seguretat.
4.  **Inicia la Màgia:** Fes clic al botó verd `3. Generar Perspectivas con IA`.
5.  **Espera un Moment:** Veuràs un indicador de càrrega mentre l'IA processa la teva sol·licitud. Això pot trigar uns segons.
6.  **Explora les Idees:** Llegeix les analogies i perspectives que l'IA ha generat a l'àrea `Perspectivas Suggerides por IA`. Reflexiona sobre com aquestes noves visions poden aplicar-se al teu problema original.

---

## 🔑 Informació Important sobre l'API Key

*   **Necessites la Teva Pròpia Clau:** Aquesta aplicació **NO** inclou ni proporciona claus API. Has d'utilitzar la teva pròpia clau obtinguda d'un proveïdor d'IA (com [OpenAI](https://openai.com/)). Això et dóna control sobre el teu ús i et fa responsable dels possibles costos associats.
*   **SEGURETAT:** La teva clau API **MAI S'ENVIA** als servidors de plungeFix (perquè no n'hi ha!). S'utilitza **directament des del teu navegador** per comunicar-se amb l'API del proveïdor d'IA (ex: OpenAI). La comunicació es fa via JavaScript des del client. Això significa que la clau no queda emmagatzemada enlloc més que temporalment al teu propi navegador durant la sessió activa. Tot i així, **tracta sempre la teva clau API com a informació altament sensible i confidencial.** No la comparteixis públicament.
*   **Costos Potencials:** L'ús de les API d'IA generalment no és gratuït (més enllà de possibles crèdits inicials o nivells gratuïts limitats). Ets **responsable** de qualsevol cost generat per l'ús de la teva pròpia clau API amb el proveïdor corresponent. Consulta les tarifes del teu proveïdor d'IA.

---

## 🤝 Contribucions

Les contribucions, idees i suggeriments són benvinguts! Si tens alguna proposta per millorar plungeFix o trobes algun error:

1.  **Informa d'Errors (Issues):** Si trobes un bug, si us plau, obre un nou [*issue*](https://github.com/xesco-tejedor/plungeFix/issues) descrivint el problema detalladament.
2.  **Suggereix Millores (Issues/Discussions):** Tens una idea per a una nova funcionalitat? Obre un *issue* o inicia una discussió.
3.  **Envia Millores (Pull Requests):** Si vols contribuir amb codi, fes un *fork* del repositori, crea una branca per a la teva funcionalitat (`git checkout -b feature/NomDeLaMillora`), fes els canvis, i envia una [*Pull Request*](https://github.com/xesco-tejedor/plungeFix/pulls).

---

## 📄 Llicència

Aquest projecte es distribueix sota la **Llicència MIT**. Això significa que ets lliure d'utilitzar, copiar, modificar, fusionar, publicar, distribuir, subllicenciar i/o vendre còpies del programari. Consulta el fitxer `LICENSE` (si existeix al repositori) per obtenir el text complet de la llicència.

<!-- Caldria afegir un fitxer LICENSE al repositori si es vol formalitzar la llicència MIT -->

---

## 👤 Autor

**plungeFix** ha estat creat amb entusiasme per [**Xesco Tejedor**](https://github.com/xesco-tejedor).

---

Esperem que plungeFix t'ajudi a trobar noves perspectives i solucions creatives! ✨