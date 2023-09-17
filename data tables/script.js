function DataTable(config, data) {
    const table = document.createElement("table");
    const parent = config.parent
    // console.log(parent)


    // const parent1 = document.createElement("div")
    // document.getElementById("usersTable").appendChild(parent1)
    // parent1.appendChild(table)

    

    let count_data = 0
    while (data[count_data] != undefined) {
        count_data++
    }
    console.log(count_data)
    // tyt data.lenght vudavalo "undefined" po etomy ya sdelal tak

    let count_config_col = 0
    while (config.columns[count_config_col] != undefined) {
        count_config_col++
    }
    console.log(count_config_col)
    // taje prichina

    let TableHeader = document.createElement("tr")
    for (let i = 0; i < count_config_col; i++) {
        let content = document.createElement("th")
        let val = document.createTextNode(config.columns[i].title)
        content.appendChild(val)

        TableHeader.appendChild(content)
    }
    
    table.appendChild(TableHeader)


    // let TableContent = document.createElement("tr")
    for (let i = 0; i < count_data; i++) {
        let TableContent = document.createElement("tr")

        let UserId = document.createElement("td")
        let UserIdVal = document.createTextNode(data[i].id)
        UserId.appendChild(UserIdVal)
        TableContent.appendChild(UserId)

        let UserName = document.createElement("td")
        let UserNameVal = document.createTextNode(data[i].name)
        UserName.appendChild(UserNameVal)
        TableContent.appendChild(UserName)

        let UserSurname = document.createElement("td")
        let UserSurnameVal = document.createTextNode(data[i].surname)
        UserSurname.appendChild(UserSurnameVal)
        TableContent.appendChild(UserSurname)

        let UserAge = document.createElement("td")
        let UserAgeVal = document.createTextNode(data[i].age)
        UserAge.appendChild(UserAgeVal)
        TableContent.appendChild(UserAge)

        table.appendChild(TableContent)
    }
    document.getElementById("usersTable").appendChild(table)
}
 
const config1 = {
    parent: 'usersTable',
    columns: [
        {title: "ID", value: "ID"},
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Вік', value: 'age'},
   ]
};
 
const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
];
 
DataTable(config1, users);

// console.log(config1.parent)
// console.log(config1.columns[0].value)