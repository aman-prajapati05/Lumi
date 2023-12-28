import express from "express";

const router = express.Router();
import Replicate from "replicate";

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    const replicate = new Replicate({
      auth: "r8_Mw9K5ZyQncpJCpvSeEOzuwQ7uzpXmys2u5spn",
    });

    const output = await replicate.run(
      "mistralai/mixtral-8x7b-instruct-v0.1:2b56576fcfbe32fa0526897d8385dd3fb3d36ba6fd0dbe033c72886b81ade93e",
      {
        input: {
          prompt: text,

        },
      }
    );
    console.log(output);
    const result = output.join("");
    res.json({ result });
  } catch (error) {
    console.error(error);
  }
});

export default router;
