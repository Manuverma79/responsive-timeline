import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import HoverText from "./HoverText";
import { Button, Tooltip } from "@material-tailwind/react";
import HoverCard from "./HoverCard";

function TooltipTrigger(innerText) {
  return (
    <Tooltip className="" content={<HoverCard />} placement="bottom">
      <Button style={{ all: "unset" }}>
        <HoverText>{innerText}</HoverText>
      </Button>
    </Tooltip>
  );
}
const ExampleTree = () => (
  <>
    <Tree
      lineWidth={"2px"}
      lineColor={"#828288"}
      lineBorderRadius={"10px"}
      lineHeight={"50px"}
      label={<HoverText>Timeline</HoverText>}
    >
      <TreeNode label={TooltipTrigger("Research")}>
        <TreeNode label={TooltipTrigger("External")}>
          <TreeNode label={TooltipTrigger("B2C")}>
            <TreeNode label={TooltipTrigger("Online")} />
            <TreeNode label={TooltipTrigger("Interview")} />
            <TreeNode label={TooltipTrigger("Public Data")} />
            <TreeNode label={TooltipTrigger("Health")} />
          </TreeNode>
          <TreeNode label={TooltipTrigger("B2C")} />
        </TreeNode>
        <TreeNode label={TooltipTrigger("Internal")} />
      </TreeNode>
      <TreeNode label={TooltipTrigger("Planning")}>
        <TreeNode label={TooltipTrigger("PRD")} />
        <TreeNode label={TooltipTrigger("Specs")} />
      </TreeNode>
      <TreeNode label={TooltipTrigger("Desiging")}>
        <TreeNode label={TooltipTrigger("Hardware")} />
        <TreeNode label={TooltipTrigger("Software")} />
      </TreeNode>
      <TreeNode label={TooltipTrigger("Manufacturing")}>
        <TreeNode label={TooltipTrigger("Material")} />
        <TreeNode label={TooltipTrigger("Production")} />
      </TreeNode>
      <TreeNode label={TooltipTrigger("Sales/Marketing")}>
        <TreeNode label={TooltipTrigger("Online")} />
        <TreeNode label={TooltipTrigger("Dealership")} />
      </TreeNode>
    </Tree>
  </>
);

export default ExampleTree;
