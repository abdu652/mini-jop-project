const createJob = async (req, res) => {
    res.send("create job route");
};

const getAllJobs = async (req, res) => {
    res.send("get all jobs route");
};

const updateJob = async (req, res) => {
    res.send("update job route");
};

const deleteJob = async (req, res) => {
    res.send("delete job route");
};

const showStats = async (req, res) => {
    res.send("show stats route");
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };