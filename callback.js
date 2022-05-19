const add = (x,y) => {
    return x+y
}

const printstmt = (x) => {
    console.log(x)
}

printstmt(add(1,2))


const addAndPrint = (x , y,callBackFunc) => {
    const result = x+y
    callBackFunc(result)
}

addAndPrint(1,2,printstmt)