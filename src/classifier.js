//function classifier(input) {}
function classifier(input){



    let workingInput = input.slice()

    let output = {

        noOfGroups : null

    }

    let groupLimit = 3

    const thisYear = 2019




    // automate acquiring and setting age

    function getAge(arrayOfStudents){

        arrayOfStudents.forEach(function(student){

            let Dob = new Date(student.dob)

            let yearOfBirth = Dob.getFullYear()

            let age = thisYear - yearOfBirth

            student.age = age

        })

    }




    // set age for all students

    getAge(workingInput)




    // sorting students by age in ascending order

    workingInput.sort((a, b) => a.age - b.age)




    // creating list of groups

    let groups = []




    // group students

    workingInput.forEach(function(student){

        let addedToGroup = false

        for(let i = 0; i < groups.length; i++){

            let group = groups[i]

            if(group.length < groupLimit && (student.age - group[0].age) <= 5){

                group.push(student)

                addedToGroup = true

            }

        }

        if(!addedToGroup){

            groups.push([student])

        }

    })

    // define noOfGroups

    output.noOfGroups = groups.length

    

    for(let i = 0; i < groups.length; i++){

        let groupName = "group" + (1 + i)

        output[groupName] = {

            members: groups[i],

            oldest: getOldest(groups[i]),

            sum: getSum(groups[i]),

            regNos: getRegNos(groups[i])

        }

    }


    function getOldest(studentGroup){

        let maximumAge = 0

        studentGroup.forEach(function(student){

            if(student.age > maximumAge){

                maximumAge = student.age

            }

        })

        return maximumAge

    }



    function getSum(studentGroup){

        let sumOfAges = 0

        studentGroup.forEach(function(student){

            sumOfAges += student.age

        })

        return sumOfAges

    }

    //registration No in ascending order

    function getRegNos(studentGroup){

        let regNosArray = []

        studentGroup.forEach(function(student){

            regNosArray.push(Number(student.regNo))

        })

        return regNosArray.sort((a, b) => a - b)

    }
    

    return output

}
const groupCase= [
    {
      name: 'Hendrick',
      dob: '1853-07-18T00:00:00.000Z',
      regNo: '041',
    },
    {
      name: 'Albert',
      dob: '1910-03-14T00:00:00.000Z',
      regNo: '033',
    },
    {
      name: 'Marie',
      dob: '1953-11-07T00:00:00.000Z',
      regNo: '024',
    },
    {
      name: 'Neils',
      dob: '1853-10-07T00:00:00.000Z',
      regNo: '02',
    },
    {
      name: 'Max',
      dob: '1853-04-23T00:00:00.000Z',
      regNo: '014',
    },
    {
      name: 'Erwin',
      dob: '1854-08-12T00:00:00.000Z',
      regNo: '09',
    },
    {
      name: 'Auguste',
      dob: '1854-01-28T00:00:00.000Z',
      regNo: '08',
    },
    {
      name: 'Karl',
      dob: '1852-12-05T00:00:00.000Z',
      regNo: '120',
    },
    {
      name: 'Louis', 
      dob: '1852-08-15T00:00:00.000Z',
      regNo: '022',
    },
    {
      name: 'Arthur',
      dob: '1892-09-10T00:00:00.000Z',
      regNo: '321',
    },
    {
      name: 'Paul',
      dob: '1902-08-08T00:00:00.000Z',
      regNo: '055',
    },
    {
      name: 'William',
      dob: '1890-03-31T00:00:00.000Z',
      regNo: '013',
    },
    {
      name: 'Owen',
      dob: '1853-04-26T00:00:00.000Z',
      regNo: '052',
    },
    {
      name: 'Martin',
      dob: '1854-02-15T00:00:00.000Z',
      regNo: '063',
    },
    {
      name: 'Guye',
      dob: '1854-10-15T00:00:00.000Z',
      regNo: '084',
    },
    {
      name: 'Charles',
      dob: '1954-02-14T00:00:00.000Z',
      regNo: '091',
    },
  ];

console.log(classifier(groupCase))
