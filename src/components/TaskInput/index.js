import { Button, Icon, Input } from "@ui-kitten/components";
import React, { useState } from 'react'
import axios from "axios";
import { useMutation } from "react-query";

import { API_URL } from "@env";
import { taskModel } from '../../utils/constants'
import queryClient from "../../../queryClient";

export default () => {
  const [task, setTask] = useState("");

  const newTaskSubmit = useMutation((newTask) =>
    axios.post(`${API_URL}/tasks`, newTask)
  );

  const ChevronRightIcon = (props) => <Icon {...props} name="chevron-right-outline" />;

  return (
    <>
      <Input
        size="large"
        placeholder="Place your Text"
        value={task}
        onChangeText={(nextValue) => setTask(nextValue)}
        onSubmitEditing={() => {
          newTaskSubmit.mutate(taskModel(task));
          setTask("");
          setTimeout(() => {
            queryClient.invalidateQueries("taskData");
          }, 1000);
        }}
      />
      <Button
        accessoryRight={ChevronRightIcon}
        onPress={() => {
          newTaskSubmit.mutate(taskModel(task));
          setTask("");
          setTimeout(() => {
            queryClient.invalidateQueries("taskData");
          }, 1000);
        }}
      />
    </>
  );
}
