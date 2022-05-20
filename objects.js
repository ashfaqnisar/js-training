const sample = {
    name: "vivek",
    age: 22,
    number: null,
    email: "vivke@gmail.com",
    "hello world": "program", 
    address: {
        street1: 0
    }, 
    getSampleAddress: function(){
        return this.address
    }
}

console.log("testsst", sample.getSampleAddress())

sample.name = "Ashfaq"

console.log(sample.name)
console.log(sample["name"])

console.log(sample["hello world"])

delete sample.age


// sample = {name:"Ashjfaq"}

console.log(sample)

const sampleObject = {
    name: "vivek",
}
sampleObject.name= "Ashfaq"

// sampleObject = {}


const array = ["1", "2"]
array.push(1)

console.log(array)



const key  = "name" 
const value = "vivek"

const object = {
    [key]: value
}
console.log(object)


const createStudent = (name, age,  email) => {

    const student = {
        name,
        age,
        emailAddress:  email
    }

    return student
}



const vivek = createStudent("vivek", 22, "email.com")
console.log(vivek)


const sample1 = {
    for: 1, 
    let: 1, 
    var: 23, 
    this: 23, 
    return: 23,
}
console.log(sample1)

console.log("number" in sample ? "yes" : "no")

// for (const key in sample) {
//     console.log(key, sample[key])
// }


// const street1Address = sample.address.street1 || "No street"

// const newAddress = sample?.address?.street1 || "No street"
const newAddress = sample?.address1?.street1

console.log(newAddress)

// (salesOrderObject?.salesOrderId ?? "No sales order id")
// (salesOrderObject?.customer?.contact?.name ?? "No sales order id")


const salesOrderObject = {
    "customer": {
      "contact": {
        "name": "Ashfaq",
        "email": "ashfaqnisar00@gmail.com",
        "mobile": 8328277518
      },
      "name": "Ezerka",
      "gst": "1242",
      "pan": "Ass12",
      "address": {
        "shipping": {
          "address1": "Flat No 401, Rainbow Residency, Attapur",
          "city": "Hyderabad",
          "district": "Hyderabad",
          "state": "Telangana",
          "stateCode": "36",
          "pinCode": "500006"
        },
        "billing": {
          "address1": "Flat No 401, Rainbow Residency, Attapur",
          "city": "Hyderabad",
          "district": "Hyderabad",
          "state": "Telangana",
          "stateCode": "36",
          "pinCode": "500006"
        },
        "_id": "6226e755cbca8e1c5d3759b8"
      }
    },
    "charges": {
      "netAmount": 211210,
      "taxAmount": 38017.8,
      "discountAmount": 0,
      "totalAmount": 249227.8,
      "otherChargesNet": 0,
      "otherChargesTax": 0,
      "otherChargesTotal": 0,
      "roundOffAmount": 0.2,
      "finalAmount": 249228,
      "amount_paid": 0,
      "amount_due": 249228
    },
    "_id": "628272521eafdbc8f04cf163",
    "createdAt": "2022-05-16T15:48:34.564Z",
    "updatedAt": "2022-05-16T15:50:27.975Z",
    "salesOrderDate": "2022-05-16T10:41:01.233Z",
    "custId": "cust_1001",
    "salesOrderId": "r_so_22-23_1023",
    "quotationId": "r_q_22-23_1002",
    "timeline": [{
      "event": "created",
      "time": "2022-05-16T15:50:12.672Z",
      "_id": "628272b41eafdbc8f04cf182"
    }, {
      "event": "sent_to_production",
      "time": "2022-05-16T15:50:25.834Z",
      "_id": "628272c31eafdbc8f04cf1b1"
    }, {
      "event": "available_to_dispatch",
      "time": "2022-05-16T15:50:38.433Z",
      "_id": "628272ce1eafdbc8f04cf1cb"
    }, {
      "event": "partially_dispatched",
      "time": "2022-05-16T15:52:05.225Z",
      "_id": "628273251eafdbc8f04cf1fd"
    }, {
      "event": "production_completed",
      "time": "2022-05-16T15:53:36.136Z",
      "_id": "628273801eafdbc8f04cf240"
    }, {
      "event": "dispatched",
      "time": "2022-05-16T15:53:55.227Z",
      "_id": "628273931eafdbc8f04cf265"
    }],
    "lineItems": [{
      "productId": "product_1605",
      "modelName": "123",
      "modelNo": "525",
      "cellModel": "23",
      "energy": 23,
      "batterySegment": 25,
      "typeQuantity": {
        "rtb": 0,
        "rtm": 5,
        "_id": "628272521eafdbc8f04cf166"
      },
      "quantity": 5,
      "availableToDispatch": 0,
      "dispatchedQuantity": 5,
      "unitPrice": 0,
      "netAmount": 0,
      "gstPercentage": 0,
      "taxAmount": 0,
      "discountAmount": 0,
      "totalAmount": 0,
      "materials": [],
      "_id": "6221aed8e9ddaa0293f0ac24"
    }, {
      "productId": "product_1606",
      "modelName": "sdsd",
      "modelNo": "1212",
      "cellModel": "sdsd",
      "energy": 123,
      "batterySegment": 2323,
      "typeQuantity": {
        "rtb": 0,
        "rtm": 10,
        "_id": "628272521eafdbc8f04cf168"
      },
      "quantity": 10,
      "availableToDispatch": 0,
      "dispatchedQuantity": 10,
      "unitPrice": 21121,
      "netAmount": 211210,
      "gstPercentage": 18,
      "taxAmount": 38017.8,
      "discountAmount": 0,
      "totalAmount": 249227.8,
      "materials": [],
      "_id": "6235baa42e85fb8bbb65778d"
    }],
    "otherCharges": [],
    "paymentStatus": "pending",
    "status": "dispatched",
    "currency": "USD",
    "statusKeywords": "di dis disp dispa dispat dispatc dispatch dispatche dispatched pe pen pend pendi pendin pending",
    "__v": 0,
    "taxItems": [],
    "serialInfo": [{
      "createdAt": "2022-05-16T10:41:01.233Z",
      "serialNumbers": ["1212052200001", "1212052200010"],
      "productId": "product_1606",
      "quantity": 10,
      "typeQuantity": {
        "rtb": 0,
        "rtm": 10,
        "_id": "628273801eafdbc8f04cf247"
      },
      "authorizedBy": "Ashfaq Nisar",
      "note": "",
      "_id": "628273801eafdbc8f04cf246"
    }, {
      "createdAt": "2022-05-16T10:41:01.233Z",
      "serialNumbers": ["525052200001", "525052200005"],
      "productId": "product_1605",
      "quantity": 5,
      "typeQuantity": {
        "rtb": 0,
        "rtm": 5,
        "_id": "628272cf1eafdbc8f04cf1d2"
      },
      "authorizedBy": "Ashfaq Nisar",
      "note": "",
      "_id": "628272cf1eafdbc8f04cf1d1"
    }],
    "payments": [],
    "prodRequestStatus": "completed",
    "productionRequestId": "prod_req_1008"
  }
  

const test1 = {
    name : "hello",  age: 22,
    number: null,
    email: "vivke@gmail.com",
    "hello world": "program", 
    address: {
        street1: 0
    }
}
const test2 = {age : 20, test: "test"}
const merge = {
    name: test1.name,
    age: test2.age
}
const merged = {
    ...test1, 
    ...test2
}

console.log(merged)

// console.log(test == test1)


const sampleObjectKeys = Object.keys(merged)
const sampleObjectValues = Object.values(merged)

console.log(sampleObjectKeys)

