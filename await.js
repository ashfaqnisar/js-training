const samplePromise =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10000)
            reject(new Error("User was not present in the system"));
        }, 2000);
    });
}

samplePromise().then(res => console.log(res));

const runApp = async () => {
    try {
        const res = await samplePromise();
        console.log(res);
        console.log("This should run in the last");
    }catch (err){
        console.log("dsdsds", err)
    }
}


const sample =  samplePromise().then(res => res);


runApp()

console.log("This should run in the last line");


// samplePromise().then(res => console.log(res));
// await samplePromise()

