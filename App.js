import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import TaskInput from "./src/components/TaskInput";
import TaskList from "./src/components/TaskList";
import { QueryClientProvider } from "react-query";

import queryClient from './queryClient';

const HomeScreen = () => {
  const style = { flex: 1, justifyContent: "center", alignItems: "center" };
  return (
    <Layout style={style}>
      <Text category="h1">HOME</Text>
      <TaskInput />
      <TaskList />
    </Layout>
  );}

export default () => (
  <QueryClientProvider client={queryClient}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </QueryClientProvider>
);
