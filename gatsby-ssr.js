import React from "react";
export function onRenderBody(
  { setHeadComponents, setPostBodyComponents }) {
setHeadComponents([
     <script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      />,
      <script
      type="text/javascript"
      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
    />,

    <script
    type="text/javascript"
    src="//netdna.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
  />,

]);

setPostBodyComponents([
	<script
         key="pqr"
         type="text/javascript"
         integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
         crossorigin="anonymous"
         src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        />,
]);

}