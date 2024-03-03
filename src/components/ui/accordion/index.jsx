import React from "react";
import AccordionCss from "./Accordion.module.css";
import { useState } from "react";
import { useMemo } from "react";
import PlusIcon from "../../icon/plus";

const AccordionItem = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClickTitle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const elText = useMemo(() => {
    if (isCollapsed) {
      return (
        <div className={AccordionCss.accordionItemText}>{props.item.text}</div>
      );
    }
  }, [isCollapsed]);
  return (
    <div className={AccordionCss.accordionItem}>
      <div className={AccordionCss.accordionItemTitle} onClick={onClickTitle}>
        <PlusIcon
          className={[
            AccordionCss.accordionItemTitleIcon,
            isCollapsed ? AccordionCss.accordionItemTitleIconActive : "",
          ].join(" ")}
        />
        {props.item.title}
      </div>
      {elText}
    </div>
  );
};
export default function Accordion(props) {
  return (
    <div className={AccordionCss.accordion}>
      {props.options.map((item) => {
        return <AccordionItem key={item.title} item={item} />;
      })}
    </div>
  );
}
