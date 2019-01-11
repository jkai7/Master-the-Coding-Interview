//BIG O - tells us how well a problem is solved (efficiency of code - how long     an algorithmn takes to run)
    //what is good code? - 1.readable, 2.scalable (big o allows us to see how       scalable code is)

    // example of O(n) - linear time
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

        findNemo(nemo); // loops through nemo array, array[i] is essentially array[0] which = 'nemo'

        findNemo(everyone); // each added item will take a little longer to execute

        //findNemo(large); // O(n) - linear time (most common big O notation)

    // example of O(1) - constant time
        const boxes = [0,1,2,3,4,5];

        function compressFirstBox(boxes) {
            console.log(boxes[0]);
        } // only logs first item in array not matter how long array is

        function logFirstTwoBoxes(boxes) {
            console.log(boxes[0]); // O(1)
            console.log(boxes[1]); // O(1)
        }

        logFirstTwoBoxes(boxes); // O(2) - its still considered O(1) because its always a constant amount of time to execute. doesnt matter if its O(1000), its still O(1) because its constant

