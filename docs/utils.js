async function generateList(redirect) {

    const listRequest = {
        allowDelete:false,
        callback: {
            cancelUrl: "https://optile.github.io/checkout-web-sdk-docs-examples/failed.html",
            notificationUrl: "https://dev.oscato.com/checkout-web-sdk-docs-examples/notify.html",
            returnUrl: `https://optile.github.io/checkout-web-sdk-docs-examples/success.html?redirect=${redirect}`,
            summaryUrl: "https://dev.oscato.com/checkout-web-sdk-docs-examples/summary.html"
        },
        country: "DE",
        customer: {
            email: "john.doe@example.com",
            number: "42"
        },
        integration: "EMBEDDED",
        payment: {
            amount: 100,
            netAmount: 99.99,
            taxAmount: 0.01,
            currency: "EUR",
            reference: "Shop 101/20-03-2016"
        }, 
        preselection: {
            direction:"CHARGE",
            networkCodes: [
                "AMEX", "VISA", "MASTERCARD", "JCB"
            ]
        },
        presetFirst: false,
        style:{
            hostedVersion: "v5",
            language: "en",
        },
        transactionId: "tr101",
        updateOnly:false
    }

    const options = {
        method: "POST",
        body: JSON.stringify(listRequest)
    }

    return new Promise((resolve, reject) => {
        fetch("https://api.pi-nightly.integration.oscato.com/demo/lists", options)
        .then(res => res.json()).then(listResponse => {
            resolve(listResponse);
        }).catch(err => reject(err));
    })

    
}