import reviewService from "../service/reviewService.js";

const handleFindAllReviews = async (req, res) => {
  try {
    let data = await reviewService.findAllReviews();
    console.log("data:", data);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in handleFindAllReviews:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const handleGetRatingCourse = async (req, res) => {
  try {
    let courseID = req.params.courseID;
    let data = await reviewService.getRatingCourse(courseID);
    console.log("data:", data);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in handleGetRatingCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

export default {
  handleFindAllReviews,
  handleGetRatingCourse,
};
