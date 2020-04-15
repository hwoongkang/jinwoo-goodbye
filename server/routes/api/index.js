import express from "express";
import { Message } from "../../models/Message.js";

export const router = express.Router();

router.post("/message", (req, res) => {
  const newMessage = new Message({
    message: req.body.message,
  });
  newMessage
    .save()
    .then((message) => {
      res.json({
        success: true,
        message,
      });
    })
    .catch((err) =>
      res.status(500).json({
        success: false,
        message: err.data.message,
      })
    );
});

router.get("/message", (req, res) => {
  Message.find()
    .sort({ date: -1 })
    .then((messages) => {
      res.json({
        success: true,
        messages,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.data.message,
      });
    });
});

router.delete("/message/:id", (req, res) => {
  Message.findById(req.params.id)
    .then((message) => {
      message
        .remove()
        .then(() => {
          return res.json({
            success: true,
            message: "item successfully removed",
          });
        })
        .catch((err) => {
          return res.status(500).json({
            success: false,
            message: err.data.message,
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: err.data.message,
      });
    });
});
