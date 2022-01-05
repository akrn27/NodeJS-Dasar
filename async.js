function samplePromise(){
    return Promise.resolve("Dika");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();