# Modello Client/Server


Il modello client-server è un'architettura di rete in cui i ruoli e le responsabilità sono distribuiti tra due tipi principali di entità: il client e il server.

## Client

`Descrizione`: Il client è un'applicazione o un dispositivo che richiede servizi o risorse da un server. In genere, il client è l'utente finale o un'applicazione interattiva che avvia richieste al server.

`Ruolo`: Il client inizia le richieste al server, aspetta le risposte e gestisce l'interfaccia utente.

## Server

`Descrizione`: Il server è un'applicazione o un dispositivo che fornisce servizi o risorse ai client. Risponde alle richieste dei client, elabora le informazioni e invia i risultati al client.

`Ruolo`: Il server gestisce risorse, dati, e svolge operazioni specifiche richieste dai client.



## Esempio di Interazione Client-server

![1_SBH_Y5t32ixv8C_F1MVYzA.png](/1_SBH_Y5t32ixv8C_F1MVYzA.png)

1. **Inizializzazione:**
   - Un utente (client) apre il browser e digita l'URL di un sito di e-commerce (ad esempio, www.amazon.it).
   - Il browser invia una richiesta HTTP al server del sito di e-commerce.

2. **Richiesta del Cliente:**
   - Il server (che ospita il sito web di e-commerce) riceve la richiesta dal browser del cliente.
   - Il server interpreta la richiesta e recupera i dati necessari dal database.

3. **Elaborazione Server:**
   - Il server esegue le operazioni necessarie per soddisfare la richiesta del cliente. Ad esempio, potrebbe recuperare informazioni sul prodotto, prezzi, immagini, ecc.

4. **Risposta del Server:**
   - Il server crea una risposta contenente i dati richiesti e la invia al browser del cliente tramite una risposta HTTP.
   - La risposta può includere codice HTML, CSS, JavaScript e risorse come immagini che vengono gestite dal MIME.

:::alert
Il `MIME` (Multipurpose Internet Mail Extensions) è uno standard che specifica i tipi di dati e i formati dei file su Internet. La principale funzione di MIME è consentire ai sistemi di trasferire file non solo come dati binari, ma anche come dati di testo in formato ASCII. In altre parole, MIME estende il protocollo di trasmissione di posta elettronica per supportare tipi di dati multipli, non solo testo.
:::

5. **Rendering del Browser:**
   - Il browser del cliente riceve la risposta dal server e inizia a renderizzare la pagina web utilizzando i dati e le risorse fornite.
   - L'utente visualizza la pagina del sito di e-commerce sul suo browser.

6. **Interazione Utente:**
   - L'utente interagisce con la pagina web, ad esempio, navigando tra le categorie di prodotti o aggiungendo articoli al carrello.
   - Ogni interazione genera nuove richieste che vengono inviate al server.

7. **Nuove Richieste e Risposte:**
   - Ogni nuova azione dell'utente (clic, scorrimento, aggiunta al carrello) genera richieste al server.
   - Il server elabora ciascuna richiesta, aggiorna lo stato e invia le risposte corrispondenti per aggiornare dinamicamente la pagina web nel browser del cliente, per fare ciò si utilizza AJAX.

:::alert
`AJAX`, acronimo di "Asynchronous JavaScript and XML," è una tecnologia di sviluppo web che consente di creare applicazioni interattive e dinamiche, aggiornando i contenuti di una pagina web senza dover ricaricare completamente la pagina stessa. La chiave di AJAX è la sua capacità di effettuare richieste asincrone al server web, consentendo agli utenti di interagire con la pagina senza interruzioni.
:::

In questo modo, l'interazione tra client e server avviene continuamente mentre l'utente naviga e interagisce con il sito di e-commerce. Il modello client-server consente una distribuzione efficiente delle responsabilità, con il server che gestisce i dati e il client che gestisce l'interfaccia utente.
