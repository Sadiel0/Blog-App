import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5138612588904448/image/5679182071726080"
          alt=""
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit
        <div className="edit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>

          <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>Sadiel</b>
        </span>
        <span className="singlePostDate">
          Date: <b> 1 hour ago</b>
        </span>
      </div>
      <p className="singlePostDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
        urna purus. Morbi pretium dolor sed ex consectetur, sed sollicitudin
        ante consectetur. Sed semper tempor purus, a tempor turpis laoreet non.
        Duis et dui at magna elementum placerat. Sed elementum bibendum lacus
        nec fermentum. Mauris quis purus nec dolor viverra sagittis at ac
        mauris. Curabitur vel aliquet justo. Vivamus molestie at enim quis
        sodales. Pellentesque euismod vitae lectus id sodales. Nulla aliquam
        nunc at dui fermentum pharetra. Cras molestie ac diam id congue. Sed
        quis tellus et nulla ornare interdum. Cras ac felis eros. Duis massa
        risus, aliquet ut lacus non, egestas vulputate augue. Proin a ligula
        justo. Phasellus gravida lectus ligula, vel tincidunt felis gravida nec.
        Curabitur consequat arcu ipsum, tristique aliquam eros vestibulum a.
        Aliquam erat volutpat. Quisque feugiat efficitur sapien. Quisque risus
        sapien, commodo sed varius ac, faucibus eget magna. Donec consequat
        massa vitae diam molestie feugiat. Cras arcu turpis, fermentum ut ex
        sed, accumsan pretium dolor. Ut a hendrerit odio. Donec eget quam
        tincidunt, rutrum dui non, pulvinar elit. Integer nec ullamcorper enim,
        sit amet vestibulum arcu. Phasellus ut velit ac purus dignissim
        consequat. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum laoreet vitae libero vitae
        consequat. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Vestibulum rhoncus dignissim dolor sit
        amet vehicula. Fusce tristique ac nibh et pharetra. Maecenas iaculis
        nunc at pharetra pulvinar. Phasellus libero lacus, porta nec
        sollicitudin ac, mollis sit amet elit. Aliquam hendrerit leo eget
        eleifend pharetra. Suspendisse at tortor purus. Donec egestas arcu sem,
        eu elementum lorem lobortis ut. Fusce suscipit consequat imperdiet.
        Praesent id sagittis tortor, at ultricies neque. Pellentesque iaculis,
        turpis ut vive
      </p>
    </div>
  );
}
