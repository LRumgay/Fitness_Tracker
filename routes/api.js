const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    workout.create(req.body)
    .then(workouts => {
        res,json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


















module.exports = router;