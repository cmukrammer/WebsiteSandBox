console.log('Ya');
function opCallback(opName) {
    return () => {
        console.log(opName);
    };
};

for (const social of ["youtube", "facebook"]) {
    document.querySelector(`.${social}`).onclick = opCallback(social);
}
