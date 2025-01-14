import courseService from "../service/courseService";

const handleFindCourse = async (req, res) => {
  try {
    let data = await courseService.findAllCourses();
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in handleFindCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const handleFindCourseByID = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await courseService.findCourseByID(id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in handleFindCourseByID:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const handleFindPopularCourses = async (req, res) => {
  try {
    let data = await courseService.findPopularCourses();
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in handleFindPopularCourses:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const handleFindCourseSimilar = async (req, res) => {
  try {
    let data = await courseService.findCourseSimilar(req.params.id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in handleFindCourseSimilar:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const handleSearchCourse = async (req, res) => {
  try {
    const keyword = req.params.keyword;

    if (!keyword || keyword.trim() === "") {
      return res.status(400).json({
        EM: "Course name is required",
        EC: -1,
        DT: "",
      });
    }

    const data = await courseService.searchCourse(keyword);

    if (data.EC !== 0) {
      return res.status(404).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in handleSearchCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

const addNewCourse = async (req, res) => {
  try {
    let data = await courseService.addNewCourse(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in addNewCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

const updateCourse = async (req, res) => {
  try {
    let data = await courseService.updateCourse(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in updateCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

const deleteCourse = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await courseService.deleteCourse(id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in deleteCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

const findInspireCourses = async (req, res) => {
  try {
    let data = await courseService.findInspireCourses();
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in findInspireCourses:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

const findCourseByCategory = async (req, res) => {
  try {
    let data = await courseService.findCourseByCategory(req.params.CategoryID);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in findCourseByCategory:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

const updateSaveCourse = async (req, res) => {
  try {
    let data = await courseService.updateSaveCourse(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in updateSaveCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

const updateBuyCourse = async (req, res) => {
  try {
    let data = await courseService.updateBuyCourse(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in updateBuyCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

const updateGoIngCourse = async (req, res) => {
  try {
    let data = await courseService.updateGoIngCourse(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in updateGoIngCourse:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

module.exports = {
  handleFindCourse,
  handleFindCourseByID,
  handleFindPopularCourses,
  handleFindCourseSimilar,
  findInspireCourses,
  addNewCourse,
  handleSearchCourse,
  updateCourse,
  deleteCourse,
  findCourseByCategory,
  updateSaveCourse,
  updateBuyCourse,
  updateGoIngCourse,
};
//done
