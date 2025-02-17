import { Router } from "express";
const router = Router();
import  {createJob,getAllJobs,updateJob,deleteJob,showStatus} from "../controllers/jobs.controller.js";
router.post('/',createJob);
router.get('/',getAllJobs);
router.get('/stats',showStatus);
router.put('/:id',updateJob);
router.delete('/:id',deleteJob);
export default router;