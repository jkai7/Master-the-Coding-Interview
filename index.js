//BIG O - tells us how well a problem is solved (efficiency of code)
    //what is good code? - 1.readable, 2.scalable (big o allows us to see how       scalable code is)

    const nemo = ['nemo'];

    function findNemo(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 'nemo') {
                console.log('found Nemo!')
            }
        }
    }

    findNemo(nemo);