import React, { useCallback, useState } from "react";
import { VStack, useColorModeValue, Fab, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AnimatedColorBox from "../components/animated-color-box";
import TaskList from "../components/task-list";
import { nanoid } from "nanoid/non-secure";
import Masthead from "../components/masthead";
import NavBar from "../components/navbar";

const initialData = [
  {
    id: nanoid(),
    subject: "Buy movie tickets for Friday",
    done: false,
  },
  {
    id: nanoid(),
    subject: "Make a React Native tutorial",
    done: false,
  },
];

interface Task {
  id: string;
  subject: string;
  done: boolean;
}

export default function MainScreen() {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handleToggleTaskItem = useCallback((item: Task) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done,
      };
      return newData;
    });
  }, []);
  const handleChangeTaskItemSubject = useCallback(
    (item: Task, newSubject: string) => {
      setData((prevData) => {
        const newData = [...prevData];
        const index = prevData.indexOf(item);
        newData[index] = {
          ...item,
          subject: newSubject,
        };
        return newData;
      });
    },
    []
  );
  const handleFinishEditingTaskItem = useCallback((_item: Task) => {
    setEditingItemId(null);
  }, []);
  const handlePressTaskItemLabel = useCallback((item: Task) => {
    setEditingItemId(item.id);
  }, []);
  const handleRemoveItem = useCallback((item: Task) => {
    setData((prevData) => {
      const newData = prevData.filter((i) => i !== item);
      return newData;
    });
  }, []);
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "primary.900")}
      w="full"
    >
      <Masthead
        title="What's up, Suleman!"
        image={require("../assets/masthead.png")}
      >
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} />}
        colorScheme={useColorModeValue("blue", "darkBlue")}
        onPress={() => {
          const id = nanoid();
          setData([
            {
              id,
              subject: "",
              done: false,
            },
            ...data,
          ]);
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
}
