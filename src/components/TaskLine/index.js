import React, { useState } from "react";
import axios from "axios";
import Identicon from "identicon.js";
import { useMutation } from "react-query";

import md5 from "../../utils/md5.min";
import { API_URL } from "@env";
import timeAgo from "../../utils/timeAgo";
import queryClient from "../../../queryClient"
import { taskModel } from "../../utils/constants";
// import UrgencyDropdown from "../UrgencyDropdown";
import { ListItem } from "@ui-kitten/components";

export default ({item, index}) => {
  const [subTask, setSubTask] = useState("");
  const [breakingDown, setBreakingDown] = useState(false);

  const hash = md5(item.title);
  const icon = new Identicon(hash, 420).toString();

  // const newTaskSubmit = useMutation((newTask) =>
  //   axios.post(`${API_URL}/tasks`, newTask)
  // );

  // const subTaskEdit = useMutation((editedTask) =>
  //   axios.patch(`${API_URL}/tasks/${editedTask.id}`, editedTask)
  // );

  // const handleComplete = async () => {
  //   if (task.parentId) {
  //     const res = await fetch(
  //       `${API_URL}/tasks/${task.parentId}`
  //     );
  //     const parentTask = await res.json();

  //     subTaskEdit.mutate({ ...parentTask, active: true });
  //   }
  //   subTaskEdit.mutate({ ...task, complete: true, active: false });
  //   setTimeout(() => {
  //     queryClient.invalidateQueries("taskData");
  //   }, 1000);
  // };

  // const handleSubtaskCreate = () => {
  //   newTaskSubmit.mutate({
  //     ...taskModel(subTask),
  //     ancestors: [...task.ancestors, task.id],
  //     parentId: task.id,
  //   });
  //   subTaskEdit.mutate({
  //     ...task,
  //     children: [...task.children, subTask],
  //     active: false,
  //   });
  //   setTimeout(() => {
  //     queryClient.invalidateQueries("taskData");
  //   }, 1000);
  //   setSubTask("");
  //   setBreakingDown(false);
  // };

  // const handlePause = () => {
  //   if (task.paused) {
  //     subTaskEdit.mutate({ ...task, paused: false });
  //   } else {
  //     subTaskEdit.mutate({ ...task, paused: true });
  //   }
  //   setTimeout(() => {
  //     queryClient.invalidateQueries("taskData");
  //   }, 1000);
  // };

  return <ListItem title={`${item.title} ${index + 1}`} />;
};
