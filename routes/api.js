const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        { $addfields: {totalDuration: {$sum: "$exercises.duration"}}}
    ])
    .then (workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.post("/api/workouts", (req, res) => {
    workout.create(req.body)
    .then(workouts => {
        res,json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id"), (req, res) => {
    Workout.findByIdAndUpdate(
        { _id: req.params.id }, { $push: {exercises: req.body}}
    )
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

module.exports = router;