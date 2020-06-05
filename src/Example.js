import React from 'react'
import MediaQuery from 'react-responsive'

const Example = () => (
    <div>
      <div>Device Test!</div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div>You are a desktop or laptop</div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <div>You are a tablet or mobile phone</div>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <div>You are portrait</div>
      </MediaQuery>
      <MediaQuery query="(orientation: landscape)">
        <div>You are landscape</div>
      </MediaQuery>
      <MediaQuery query="(min-resolution: 2dppx)">
        <div>You are retina</div>
      </MediaQuery>
    </div>
)
export default Example;
