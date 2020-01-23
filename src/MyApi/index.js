async function getTableData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {name: "Jimmy", age: 33, email: "jimmy@jimmy.com", amountInSuper: 50000},
                    {name: "Michael", age: 33, email: "michael@jimmy.com", amountInSuper: 500000},
                    {name: "Ben", age: 30, email: "ben@jimmy.com", amountInSuper: 5000000},
                ],
                entries: 3
            })
        }, 3000)
    });
}

export {
    getTableData
}
