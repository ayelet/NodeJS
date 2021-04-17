const workers = [
    {
        "id": "123456799",
        "name": "it ASFSAFASF",
        "isActive": false
    },
    {
        "id": "123456789",
        "name": "it ASFSAFASF",
        "isActive": false
    }
];

const addWorker = (req,res)=>{
    const {name, id} = req.body;

    let result = workers.find((w) => {
        return w.id == id
    })
    if (!name || !id) {
        return res.status(200).json({error: 'enter id and name'})
    } else if (name.length < 6 || !name.includes(' ')) {
        return res.status(200).json({error: 'name must includes space and length bigger then 5'})
    } else if (result) {
        return res.status(200).json({error: 'worker exist in db'})
    }
    const obj = {
        id: id,
        name: name,
        isActive: false
    }
    workers.push(obj);

    return res.send(obj);
}

const getWorkers = (req,res)=>{
    return res.send(workers);
}

const getWorkersArray = (req,res)=>{
    return workers;
}

const asf =()=>{
   const x=   getWorkerById(10);
    const y=   getWorkerById(17);
    x.roomid = y.roomid;
}
const getWorkerById = (req,res)=>{
    const {workerId,isActive} = req.params;
    let worker = workers.find((w)=>{
        return w.id ==workerId
    })
    return worker
}



module.exports = {
    addWorker,
    getWorkers,
    getWorkerById
}
