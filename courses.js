import coursesDB from "./coursesDB.js";

const getCourses = async () => {
  return await coursesDB.findAll();
};
const addCourse = async (name) => {
  const newCourse = {
    nom: name,
  };
  await coursesDB.add(newCourse);
};
const removeCourse = async (id) => {
  await coursesDB.remove(id);
};

export { getCourses, addCourse, removeCourse };
