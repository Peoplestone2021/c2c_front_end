import * as React from "react";
import { marketItems } from "../marketApi";

type ContentDetailProps = {
  item: marketItems;
};

const ContentDetail = ({ item: item }: ContentDetailProps) => (
  <div>
    <p>id: {item.id}</p>
  </div>
);

export default ContentDetail;
