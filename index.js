const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())
// app.get('/', (req, res)=>{
//     res.send('This is coder boy galib this is coderboy galib!');  
// });

var friends = [
    {id: 0, name: 'Forhad Hasan Munna', years: 18, className: 'Ten', school : 'Kazjihat fazil madrasah'},
    {id: 1, name: 'Rifat Islam Ridoy', years: 17, className: 'Ten', school : 'Kazjihat fazil madrasah'},
    {id: 2, name: 'Mazidul Islam Mazid', years: 18, className: 'Ten', school : 'Kazjihat fazil madrasah'},
    {id: 3, name: 'Kawser Ali Badhon', years: 16, className: 'Ten', school : 'Kazjihat fazil madrasah'},
    {id: 4, name: 'Mamunur Rashid Mamun', years: 17, className: 'Ten', school : 'Kazjihat fazil madrasah'},
    {id: 5, name: 'Habibur Rahman Habib', years: 18, className: 'Ten', school : 'Kazjihat fazil madrasah'},
    {id: 6, name: 'Asadullah Hil Galib', years: 16, className: 'Nine', school : 'Nilphamari Technical School and Collage'},
]

// app.get('/',(req,res)=>{
//     res.send(friends)
// })
// app.get('/friends', (req, res)=>{
//     res.send(friends);
// })

app.post('/friends',(req, res)=>{
    const newFriends = req.body;
    newFriends.id = friends.length;
    friends.push(newFriends);

    res.json(newFriends)
})

app.get('/friends', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = friends.filter(friend=> friend.name.toLowerCase().includes(search))
        res.send(searchResult);
    } else {
        res.send(friends)
    }
    
})



app.listen(port, ()=>{
    console.log('Listening to port ', port);
})