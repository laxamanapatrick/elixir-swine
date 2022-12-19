import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { MotionTag } from "../../utils/Page-Transition";

export const UserManagement = () => {
  return (
    <MotionTag>
        <Outlet />
    </MotionTag>
  );
};
