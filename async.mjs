function samplePromise() {
    return Promise.resolve("dika");
}

const name = await samplePromise();
console.info(name);