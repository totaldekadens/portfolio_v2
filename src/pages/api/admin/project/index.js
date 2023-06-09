import dbConnect from "@/lib/dbConnect";
import Project from "@/models/ProjectModel";

export default async function handler(
req, res
) {
  const { method } = req;

  await dbConnect();

/*   if (!req.body) {
    return res.status(400).json({ success: false, data: "Check body" });
  } */

  switch (method) {
    case "POST":
      try {

  
        // Creates Main product
        let newProject = new Project(req.body);


        
        const project = await Project.create(newProject);
        res.status(201).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    case "PUT":
      try {
        // Fix validation for already existing category except the one you update

      /*   const updateProject = req.body;

        const project = await Project.findOneAndUpdate(
          { _id: req.body._id },
          updateProject,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!project) {
          return res
            .status(400)
            .json({ success: false, data: "Project not found" });
        } */
        res.status(200).json({ success: true, data: "project" });
      } catch (error) {
        res.status(400).json({ success: false, data: error });
      }
      break;
    default:
      res.status(400).json({ success: false, data: "Break error" });
      break;
  }
}
