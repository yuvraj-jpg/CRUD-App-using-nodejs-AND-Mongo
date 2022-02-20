const express = require('express');
const router = express.Router();
const Todo = require('../model/Todoschema');
const mongoose = require('mongoose');



router.get('/', (req, res, next) => {
    Todo.find()
        .then(result => {
            res.status(200).render('todo.pug', { result: result })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});
router.get('/up/:id', (req, res, next) => {
    Todo.findById(req.params.id)
        .then(result => {
            res.status(200).render('todoupdate.pug', { result: result })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});


router.post('/', (req, res, next) => {
    const todo = new Todo({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        description: req.body.description
    })
    todo.save().then(result => {
        console.log(result);
        res.status(200).redirect("/")
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});

router.get('/delete/:id', (req, res, next) => {
    Todo.findByIdAndRemove(req.params.id)
        .then(result => {
            console.log(result);
            res.status(200).redirect('/')
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

// router.get('/:id',(req,res,next)=>{
//     todo.findById(req.params.id)
//     .then(result => {
//         console.log(result);
//         res.status(200).json({
//             result: result
//         })
//     })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             })
//         })

// });


// router.delete('/:id',(req,res,next)=>{
//     todo.remove({_id:req.params.id})
//     .then(result => {
//         console.log(result);
//         res.status(200).json({
//             message:'Product Deleted',
//             result: result
//         })
//     })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             })
//         })
// });


// router.put('/:id',(req,res,next)=>{
//     todo.findByIdAndUpdate({_id:req.params.id},{
//     $set:{title: req.body.title,
//         description: req.body.description
//     }
// }).then(result => {
//     console.log(result);
//     res.status(200).json({
//         Updated_result: result
//     })
// })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         })
//     })
// });


module.exports = router;