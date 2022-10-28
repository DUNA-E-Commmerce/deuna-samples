const API_SECRET = "00cdd7f62063c072cc91c80a1aaf16ae3e61ddcc762f0e094d8d642624e478dc4bf9d74fa5e7550a79ec091935ffa2819ea496c7c9291486dd08674137c6";
const orderTokenReceive = "kpjh0zVDzfwHVGB8GXmsqVN1PyhuXfhjzQTcBF5";

const getOrderToken = (order) => {
    //TODO tokenization
    /*fetch('').then(function (response) {
        console.log('success!', response);
    }).catch(function (err) {
        console.warn('Error', err);
    });*/
}

const deunaCheckout = window.DunaCheckout();

const shouldOpen = () => {
    //getOrderToken(order);

    const CONFIG = {
        apiKey: API_SECRET,
        env: "staging",
        orderToken: orderTokenReceive
    };
    deunaCheckout.configure(CONFIG);

    deunaCheckout.shouldOpenCheckout().then((data) => {
        if (data) {
            deunaCheckout.show();
        }
    });
}
