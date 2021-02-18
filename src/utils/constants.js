export const taskModel = (task) => ({
  createdOn: new Date(),
  title: task,
  complete: false,
  ancestors: [],
  children: [],
  parentId: null,
  active: true,
  urgency: 2,
});

export const urgencyLevels = {
  1: "Low",
  2: "Medium",
  3: "High",
};
