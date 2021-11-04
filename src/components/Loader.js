import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    .loader {
  margin: 0;
  margin-left: 10px;
  font-size: 5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #e61919, 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.5), -1.8em -1.8em 0 0em rgba(230,25,25, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.7), 1.8em -1.8em 0 0em #e61919, 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.5), 1.8em -1.8em 0 0em rgba(230,25,25, 0.7), 2.5em 0em 0 0em #e61919, 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.5), 2.5em 0em 0 0em rgba(230,25,25, 0.7), 1.75em 1.75em 0 0em #e61919, 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.5), 1.75em 1.75em 0 0em rgba(230,25,25, 0.7), 0em 2.5em 0 0em #e61919, -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.5), 0em 2.5em 0 0em rgba(230,25,25, 0.7), -1.8em 1.8em 0 0em #e61919, -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.5), -1.8em 1.8em 0 0em rgba(230,25,25, 0.7), -2.6em 0em 0 0em #e61919, -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.5), -2.6em 0em 0 0em rgba(230,25,25, 0.7), -1.8em -1.8em 0 0em #e61919;
  }
}
@keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #e61919, 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.5), -1.8em -1.8em 0 0em rgba(230,25,25, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.7), 1.8em -1.8em 0 0em #e61919, 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.5), 1.8em -1.8em 0 0em rgba(230,25,25, 0.7), 2.5em 0em 0 0em #e61919, 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.5), 2.5em 0em 0 0em rgba(230,25,25, 0.7), 1.75em 1.75em 0 0em #e61919, 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.5), 1.75em 1.75em 0 0em rgba(230,25,25, 0.7), 0em 2.5em 0 0em #e61919, -1.8em 1.8em 0 0em rgba(230,25,25, 0.2), -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.5), 0em 2.5em 0 0em rgba(230,25,25, 0.7), -1.8em 1.8em 0 0em #e61919, -2.6em 0em 0 0em rgba(230,25,25, 0.2), -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.5), -1.8em 1.8em 0 0em rgba(230,25,25, 0.7), -2.6em 0em 0 0em #e61919, -1.8em -1.8em 0 0em rgba(230,25,25, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(230,25,25, 0.2), 1.8em -1.8em 0 0em rgba(230,25,25, 0.2), 2.5em 0em 0 0em rgba(230,25,25, 0.2), 1.75em 1.75em 0 0em rgba(230,25,25, 0.2), 0em 2.5em 0 0em rgba(230,25,25, 0.2), -1.8em 1.8em 0 0em rgba(230,25,25, 0.5), -2.6em 0em 0 0em rgba(230,25,25, 0.7), -1.8em -1.8em 0 0em #e61919;
  }
}
`

export default function Loader() {
    return (
        <Wrapper>
            <div class="loader">Loading...</div>
        </Wrapper>
    )
}
