import React from "react";
import "./feturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Notes</span>
        <div className="featuredNotesContainer">
          <span className="featuredNote"> 500</span>
          <span className="featuredNoteRate">
            -4 <ArrowDownward className="feturedIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to The Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Professor</span>
        <div className="featuredNotesContainer">
          <span className="featuredNote"> 500</span>
          <span className="featuredNoteRate">
            +3
            <ArrowUpward className="feturedIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to The Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Student</span>
        <div className="featuredNotesContainer">
          <span className="featuredNote"> 700</span>
          <span className="featuredNoteRate">
            +67
            <ArrowUpward className="feturedIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to The Last Month</span>
      </div>
    </div>
  );
}
