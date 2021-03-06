export default function checkServerIdentity(host, cert) {
    var CN = cert.subject.CN;
    var re = /^(([a-zA-Z0-9]+-[a-zA-Z0-9]+)|legacy-terminal-certificate)\.(live|test)\.terminal\.adyen\.com$/;
    var isValid = re.test(CN);
    var error = new Error("Couldn't verify certificate");
    return isValid ? undefined : error;
}
//# sourceMappingURL=checkServerIdentity.js.map