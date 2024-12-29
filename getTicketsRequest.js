import axios from 'axios'




const headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7",
    Connection: "keep-alive",
    "Content-Type": "application/json",
    Cookie: "_ga=GA1.1.525331903.1731410718; BIGipServerProd_E-Vente-contenu-443=!z98U/VNg+Z67I5yZaEEjx4IvmuDB7CttLliUQZxn6JrkhOKIXfi919pk88r0UirNh+IYtYW3HwjEI/I=; TS016b4824=019f9e87acd47dbb0467bd5158d31d01ca76a6de17bc8392ad30e05e049d604a90aff00f6b434e9b89d7fa824ca370fc6df27a06287e48fb014ce446c5f1a7f1a701e48a14; _ga_T9HHRXN608=GS1.1.1732027263.7.1.1732027552.0.0.0",
    Host: "www.oncf-voyages.ma",
    Origin: "https://www.oncf-voyages.ma",
    Referer: "https://www.oncf-voyages.ma/recap",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
  };

const getTickets = async (aller,retour) => {
  const requestBody = {
    "culture": 3,
    "withoutTickets": true,
    "fournisseurPaiementId": 1,
    "paymentOkUrl": "https://www.oncf-voyages.ma/api/paymentUrl",
    "paymentFailUrl": "https://www.oncf-voyages.ma/api/paymentUrl",
    "paymentShopUrl": "https://www.oncf-voyages.ma/panier",
    "montant": 0,
    "contact": {
        "email": "aminemiadi15@gmail.com",
        "emailconfirme": "aminemiadi15@gmail.com",
        "telephone": "+212 689798348",
        "prenom": "amine",
        "nom": "miadi",
        "nomAr": "",
        "prenomAr": null,
        "codeCivilite": "1",
        "dateNaissance": "",
        "isContactByEmail": false,
        "isAutorisationContact": false,
        "codeClient": null
    },
    "attributsCommande": [
        {
        "attributsDisponibilite": aller,
        "attributsClient": [
            "{\"typeClient\":\"Voyageur\",\"voyageur\":{\"prenom\":\"AMINE\",\"nom\":\"MIADI\",\"prenomAr\":\"ميعادي\",\"nomAr\":\"امين\",\"codeCivilite\":\"1\",\"numeroClient\":\"191179524003487\",\"codeConvention\":null,\"numeroTitre\":null,\"tarifRevendique\":\"AY\",\"codeProfilDemographique\":\"3\",\"email\":\"A.MIADI@OUTLOOK.COM\",\"telephone\":\"0689798348\",\"typeTarifRevendique\":\"4\",\"codeClient\":\"081205077\",\"codeTiers\":null}}"
        ],
        "attributsDisponibiliteRetour": retour
        }
    ],
    "preuve": null
    }
    try {
        // Send the POST request with the specified URL, data, and headers
        const response = await axios.post('https://www.oncf-voyages.ma/api/getinfopaiment', requestBody, { headers });

        // Log the response data when the request is successful
        return response;
    } catch (error) {
        // Log any error that occurs during the request
        console.error('Error occurred:', error);
    }
      
}

export default getTickets;

