const dataCustomer = (code, name) => {
    let data = {}
    data.code = code
    data.name = name

    let newData = {...data}
    newData.customer = newData.code + ' - ' + newData.name
    return newData
}