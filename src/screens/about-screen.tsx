import React from "react";
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import AnimatedColorBox from "../components/animated-color-box";
import NavBar from "../components/navbar";
import Masthead from "../components/masthead";
import LinkButton from "../components/link-button";

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "warmGray.900")}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require("../assets/about-masthead.png")}
      >
        <NavBar />
      </Masthead>
      <ScrollView
        borderTopRightRadius="20px"
        borderTopLeftRadius="20px"
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4} >
          <Box alignItems="center" >
            <Image
              source={require("../assets/about-masthead.png")}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
            <Text fontSize="md" w="full" pb="30px" >
              About This Customized Todo App: {"\n\n"}
              This customized version of the todo app was originally developed
              by [Takuya Matsuyama]. {"\n\n"}
              As part of my portfolio to showcase my coding skills, I've taken
              the foundation of the app and tailored it to create a personalized
              version.{"\n"}
              This app empowers you to create, manage, and track tasks
              effectively, featuring a user-friendly interface designed to help
              you stay organized and productive.{"\n\n"}
              Developed and customized by [Suleman Tunkara]{"\n"}
              Original version by [Takuya Matsuyama]{"\n"}© 2023 [Suleman
              Tunkara]{"\n"}
              Licensed under the MIT License.{"\n\n"}
              Original tutorial: {" "}
              <LinkButton
                colorScheme="red"
                size="sm"
                href="https://www.youtube.com/watch?v=k2h7usLLBhY"
                p={1}
              >
                Link
              </LinkButton>
              {"\n\n"}
              Please note that while I started with the code from [Takuya
              Matsuyama]'s tutorial, I've added my own features, design
              elements, and improvements to make this version unique.{"\n"}
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
