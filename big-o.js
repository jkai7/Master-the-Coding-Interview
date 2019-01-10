//BIG O - tells us how well a problem is solved (efficiency of code - how long     an algorithmn takes to run)
    //what is good code? - 1.readable, 2.scalable (big o allows us to see how       scalable code is)

    const nemo = ['nemo'];

    const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

    const large = new Array(10000).fill('nemo')//run time for this array will take significantly longer 

    function findNemo(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 'nemo') {
                console.log(`found Nemo at ${[i]}!`)
            } else {
                console.log(`no nemo at ${[i]}...`)
            }
        }
    }

    findNemo(nemo); //loops through nemo array, array[i] is essentially array[0] which = 'nemo'

    findNemo(everyone);//each added item will take a little longer to execute

