import * as React from "react";
import { marketItem } from "../marketApi";

type ContentDetailProps = {
  item: marketItem;
};

const ContentDetail = ({ item: item }: ContentDetailProps) => (
  <div>
    <p>id: {item.id}</p>
  </div>
);

export default ContentDetail;
