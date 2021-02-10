// My keys
const account_id = '0.0.307144';
const private_key = '302a300506032b6570032100c02ecbf70c6c107f75849bbccf7fb378b540d846c72181fdd5253b9b1c788ccb';
const public_key = '302e020100300506032b6570042204203802f061a828d6e44945d04fdae7478db0d2f877d92eaafbe01767cf5b2c7078';

// Website keys
// const account_id = '0.0.319685';
// const private_key = '302a300506032b6570032100639582f5ceb9fbe48d3f1577da8d621e661bd1da44af1f9c2c7539930a9eee79';
// const public_key = '302e020100300506032b65700422042093a43abd3d5bb0f9dd79d6ec70bb6cfe9003856439cff7c65fd92a9a9c33488e';

if (document.getElementsByTagName('meta')[2]) {
    console.log('!HederaMeta connected!');
    const divOuter = document.createElement("div");
    const divInner = document.createElement("div");
    const divTitle = document.createElement("div");
    const divDescription = document.createElement("div");
    divInner.id = 'extension_hedera_donut_content';
    divOuter.id = 'extension_hedera_donut';
    divTitle.id = 'extension_hedera_donut_title';
    divDescription.id = 'extension_hedera_donut_description';
    divInner.append(divTitle);
    divInner.append(divDescription);
    divOuter.append(divInner);
    document.body.append(divOuter);
    document.getElementById("extension_hedera_donut_content").style.display = 'none';
    document.getElementById("extension_hedera_donut").onclick = function() {
        const display = document.getElementById("extension_hedera_donut_content").style.display;
        if (display === 'none') {
            document.getElementById("extension_hedera_donut_content").style.display = 'block';
            document.getElementById("extension_hedera_donut_title").innerHTML = 'HederaDonut connected!';
            document.getElementById("extension_hedera_donut_description").innerHTML = `Address: ${document.getElementsByTagName('meta')[2].getAttribute('content')}`;
        } else {
            document.getElementById("extension_hedera_donut_content").style.display = 'none';
        }
    };
} else {
    console.log('!HederaMeta not found :(');
}
