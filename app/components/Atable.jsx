import * as React from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Atable(props) {
  function AccordionUsage() {
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="w-full flex">
              <div className="flex gap-3 w-[33.33%] h-8">
                <img src="usdt.png" alt="coin" className="h-6" />
                <p className="text-lg font-medium">{props.coin}</p>
              </div>
              <div className="w-[33.33%] h-8  text-green-500">{props.apr}</div>
              <div className="w-[33.33%] h-8 ">
                {props.duration}
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex w-full flex-col gap-4">
                <div className="flex w-full">
                    <p className="w-[33.33%]">Simple Earn</p>
                    <p className="w-[33.33%]">5.81%max</p>
                    <div className="w-[33.33%] flex gap-12 justify-start items-center">
                        <p>flexible</p>
                        <Link href="/login" className="bg-yellow-400  w-28 rounded-lg p-2">Subscribe</Link>
                    </div>
                </div>
                <div className="flex w-full">
                    <p className="w-[33.33%]">Dual Investment</p>
                    <p className="w-[33.33%]">5.81%max</p>
                    <div className="w-[33.33%] flex gap-12 justify-start items-center">
                        <p>flexible</p>
                        <Link href="/login" className="bg-yellow-400 w-28 rounded-lg p-2">Subscribe</Link>
                    </div>
                </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
  return (
    <div className="w-full">
        {AccordionUsage()}
    </div>
  );
}


