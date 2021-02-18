import { Layout, List, ListItem, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useQuery } from "react-query";
// import TaskLine from "../TaskLine";

import { API_URL } from "@env";
import TaskLine from "../TaskLine";

export default () => {
  // const [pausedTasks, setPausedTasks] = useState(false);
  const { isLoading, error, data } = useQuery("taskData", async () => {
    const res = await fetch(`${API_URL}/tasks`);
    return res.json();
  });

  if (isLoading) {
    return "Tasks Loading...";
  }

  if (error) {
    return "Error fetching tasks, please reload page.";
  }

  // const renderItem = ({ item, index }) => (
  //   <ListItem title={`${item.title} ${index + 1}`} />
  // );

  return (
    <Layout>
      <Text>Tasks</Text>
      <List style={styles.container} data={data} renderItem={TaskLine} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 180,
  },
});