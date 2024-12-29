import axios from 'axios';

const url = 'https://www.oncf-voyages.ma/api/availability'; 



async function sendPostRequest(date) {
    const requestBody = {
        "codeGareDepart":"139",
        "codeGareArrivee":"191",
        "codeNiveauConfort":2,
        "dateDepartAller": date + "T00:01:41+01:00",
        "dateDepartAllerMax":null,
        "dateDepartRetour": date + "T13:17:20+01:00",
        "dateDepartRetourMax":null,
        "isTrainDirect":null,
        "isPreviousTrainAller":null,
        "isTarifReduit":true,
        "adulte":1,
        "kids":0,
        "listVoyageur":[
           {
              "numeroClient":"191179524003487",
              "codeTarif":"AY",
              "codeProfilDemographique":"3",
              "dateNaissance":null
           }
        ],
        "booking":true,
        "isEntreprise":false,
        "token":"",
        "numeroContract":"",
        "codeTiers":""
    };

    try {
        const response = await axios.post(url, requestBody, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-US,en;q=0.5',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Host': 'www.oncf-voyages.ma',
            'Origin': 'https://www.oncf-voyages.ma',
            'Priority': 'u=0',
            'Referer': 'https://www.oncf-voyages.ma/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
        },
        });

        return response.data;

    } catch (error) {
        // Handle errors (both network and HTTP errors)
        if (error.code === 'ECONNABORTED') {
        console.error('Error: Timeout exceeded');
        } else {
        console.error('Error here:', error.response ? error.response.data : error.message);
        }
    }
}

export default sendPostRequest;